const mysql = require('mysql2'); // Use mysql2 instead of mysql
require('dotenv').config();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Rutuja@1234',  // 🔹 Replace with your MySQL password
  database: 'ecommerce',
  port: 3307
});

db.connect((err) => {
  if (err) {
    console.error("Database Connection Failed!", err);
    return;
  }
  console.log("Connected to MySQL Database");
});

module.exports = db;