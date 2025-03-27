const db = require('../config/db');

exports.addToCart = (req, res) => {
    const { userId, productId, quantity } = req.body;
    const sql = "INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?)";
    
    db.query(sql, [userId, productId, quantity], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Item added to cart" });
    });
};

exports.getCart = (req, res) => {
    const { userId } = req.params;
    db.query("SELECT * FROM cart WHERE user_id = ?", [userId], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};
