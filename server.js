const express = require("express");
const mysql = require("mysql2");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS

// MySQL Database Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "Rutuja@1234", // Replace with your MySQL password
  database: process.env.DB_NAME || "ecommerce",
  port: process.env.DB_PORT || 3307,
});

db.connect((err) => {
  if (err) {
    console.error("Database Connection Failed:", err);
    return;
  }
  console.log("✅ Connected to MySQL Database");
});

// Use a secret key from env or fallback
const SECRET_KEY = process.env.SECRET_KEY || "your_secret_key";

// Middleware to authenticate JWT token (skips OPTIONS preflight)
const authenticateToken = (req, res, next) => {
  if (req.method === "OPTIONS") return next();

  const authHeader = req.header("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    console.log("❌ No token provided or incorrect format");
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; // Payload should include user id and email
    next();
  } catch (err) {
    console.log("❌ Invalid Token:", err);
    return res.status(403).json({ message: "Invalid token." });
  }
};

// ============== USER ROUTES ==============

// User Registration
app.post("/api/register", async (req, res) => {
  try {
    const { firstName, lastName, mobileNumber, email, password } = req.body;
    db.query("SELECT * FROM users WHERE email = ?", [email], async (err, result) => {
      if (err) return res.status(500).json({ error: "Database error" });
      if (result.length > 0) {
        return res.status(400).json({ message: "User already exists, please sign in" });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const sql =
        "INSERT INTO users (first_name, last_name, mobile_number, email, password) VALUES (?, ?, ?, ?, ?)";
      db.query(sql, [firstName, lastName, mobileNumber, email, hashedPassword], (err) => {
        if (err) return res.status(500).json({ error: "Registration failed" });
        res.status(201).json({ message: "User registered successfully" });
      });
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// User Login
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, result) => {
    if (err) return res.status(500).json({ message: "Server error" });
    if (result.length === 0) {
      return res.status(404).json({ message: "Account not found. Create an account." });
    }
    const user = result[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    // Generate token with user id and email in payload
    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ token });
  });
});

// Fetch User Profile (Protected Route)
app.get("/api/profile", authenticateToken, (req, res) => {
  console.log("Fetching profile for user ID:", req.user?.id);
  const userId = req.user?.id;
  if (!userId) {
    return res.status(400).json({ message: "Invalid request, missing user ID" });
  }
  db.query(
    "SELECT first_name, last_name, email, mobile_number FROM users WHERE id = ?",
    [userId],
    (err, result) => {
      if (err) {
        console.error("Database Error:", err);
        return res.status(500).json({ message: "Database error" });
      }
      if (result.length === 0) {
        return res.status(404).json({ message: "User not found" });
      }
      console.log("User Data Fetched:", result[0]);
      res.json(result[0]);
    }
  );
});

// Update User Profile (Protected Route)
app.put("/api/update-profile", authenticateToken, (req, res) => {
  const { first_name, last_name, mobile_number } = req.body;
  const userId = req.user.id;
  if (!first_name || !last_name || !mobile_number) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const sql = "UPDATE users SET first_name = ?, last_name = ?, mobile_number = ? WHERE id = ?";
  db.query(sql, [first_name, last_name, mobile_number, userId], (err, result) => {
    if (err) {
      console.error("Database Error:", err);
      return res.status(500).json({ message: "Database update failed" });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "Profile updated successfully" });
  });
});

// ============== ORDER ROUTES (Protected) ==============

// Fetch Orders for the logged-in user using the column "id" instead of "user_id"
app.get("/api/orders", authenticateToken, (req, res) => {
  const userId = req.user.id; // Extract user ID from token

  console.log("🔹 Fetching orders for user ID:", userId); // Debugging output

  const sql = "SELECT * FROM orders WHERE user_id = ?"; // Ensure correct column name

  db.query(sql, [userId], (err, results) => {
    if (err) {
      console.error("❌ Database Error:", err);
      return res.status(500).json({ message: "Database query failed" });
    }

    if (results.length === 0) {
      console.log("⚠️ No orders found for this user.");
      return res.status(200).json([]); // Return empty array instead of error
    }

    console.log("✅ Orders Fetched:", results); // Debugging output
    res.json(results);
  });
});


// Place Order (Protected Route)
// Inserting an order using the column "id" to store the user's id
app.post("/api/orders", authenticateToken, (req, res) => {
  const { product_id, product_name, price, payment_method, status } = req.body;
  const userId = req.user.id;
  if (!product_id || !product_name || price <= 0 || !payment_method || !status) {
    return res
      .status(400)
      .json({ message: "Missing required order details or invalid price" });
  }
  const sql =
    "INSERT INTO orders (id, product_id, product_name, price, payment_method, status) VALUES (?, ?, ?, ?, ?, ?)";
  // Using "id" as the user identifier in the orders table
  db.query(sql, [userId, product_id, product_name, price, payment_method, status], (err, result) => {
    if (err) {
      console.error("Order placement failed:", err);
      return res.status(500).json({ message: "Order placement failed" });
    }
    res.json({ message: "Order placed successfully", orderId: result.insertId });
  });
});

// ============== START SERVER ==============
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
