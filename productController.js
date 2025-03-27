const db = require('../config/db');

exports.getProducts = (req, res) => {
    db.query("SELECT * FROM products", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

exports.addProduct = (req, res) => {
    const { name, price, category, description } = req.body;
    const sql = "INSERT INTO products (name, price, category, description) VALUES (?, ?, ?, ?)";
    
    db.query(sql, [name, price, category, description], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Product added successfully" });
    });
};
