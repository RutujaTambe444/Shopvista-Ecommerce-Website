const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Place an Order
router.post("/", (req, res) => {
  const { name, address, product_id, product_name, price, payment_method, status } = req.body;

  const query = `
    INSERT INTO orders (name, address, product_id, product_name, price, payment_method, status)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(query, [name, address, product_id, product_name, price, payment_method, status], (err, result) => {
    if (err) {
      console.error("Error inserting order:", err);
      return res.status(500).json({ message: "Order placement failed." });
    }
    res.status(201).json({ message: "Order placed successfully!", orderId: result.insertId });
  });
});

// Get All Orders
router.get("/", (req, res) => {
  db.query("SELECT * FROM orders ORDER BY order_date DESC", (err, results) => {
    if (err) {
      console.error("Error fetching orders:", err);
      return res.status(500).json({ message: "Error fetching orders." });
    }
    res.status(200).json(results);
  });
});

module.exports = router;
