const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    
    db.query(sql, [name, email, hashedPassword], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "User registered successfully" });
    });
};

exports.login = (req, res) => {
    const { email, password } = req.body;
    const sql = "SELECT * FROM users WHERE email = ?";
    
    db.query(sql, [email], async (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.length === 0) return res.status(401).json({ error: "User not found" });

        const isMatch = await bcrypt.compare(password, result[0].password);
        if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });

        const token = jwt.sign({ userId: result[0].id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.json({ message: "Login successful", token });
    });
};
