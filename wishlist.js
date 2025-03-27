import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  // Remove item from wishlist
  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>❤️ Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p style={styles.emptyWishlist}>Your wishlist is empty.</p>
      ) : (
        <div style={styles.grid}>
          {wishlist.map((item) => (
            <div key={item.id} style={styles.card}>
              <img src={item.image} alt={item.name} style={styles.itemImage} />
              <h5 style={styles.itemName}>{item.name}</h5>
              <p style={styles.price}>₹{item.price}</p>
              <div style={styles.buttonGroup}>
                <button style={styles.viewButton} onClick={() => navigate(`/product/${item.id}`, { state: item })}>👀 View</button>
                <button style={styles.removeButton} onClick={() => removeFromWishlist(item.id)}>❌ Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: { padding: "40px", textAlign: "center", backgroundColor: "#f8f9fa" },
  title: { fontSize: "28px", marginBottom: "20px", color: "#333", fontWeight: "bold" },
  emptyWishlist: { fontSize: "20px", color: "#777", marginTop: "20px" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "20px", justifyContent: "center", padding: "20px" },
  card: {
    width: "100%",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    backgroundColor: "white",
    transition: "transform 0.3s ease-in-out",
  },
  cardHover: {
    transform: "scale(1.05)",
  },
  itemImage: { width: "100px", height: "100px", borderRadius: "8px", objectFit: "cover", marginBottom: "10px" },
  itemName: { fontSize: "18px", fontWeight: "bold", color: "#333", marginBottom: "5px" },
  price: { fontSize: "16px", fontWeight: "bold", color: "#27ae60", marginBottom: "10px" },
  buttonGroup: { display: "flex", justifyContent: "center", gap: "10px", marginTop: "10px" },
  viewButton: { background: "#007bff", color: "white", border: "none", padding: "8px 14px", borderRadius: "6px", cursor: "pointer", fontSize: "14px", transition: "background 0.3s ease" },
  removeButton: { background: "#dc3545", color: "white", border: "none", padding: "8px 14px", borderRadius: "6px", cursor: "pointer", fontSize: "14px", transition: "background 0.3s ease" },
};
