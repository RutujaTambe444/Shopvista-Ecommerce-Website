import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CartItems() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  //  Remove item from cart
  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  //  Buy Now - Redirect to Product Details
  const handleBuyNow = (product) => {
    navigate("/product-details", { state: product });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p style={styles.emptyCart}>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} style={styles.cartItem}>
            <img src={item.image} alt={item.name} style={styles.itemImage} />
            <div style={styles.itemDetails}>
              <h5 style={styles.itemName}>{item.name}</h5>
              {item.size && <p style={styles.itemText}>Size: {item.size}</p>}
              <p style={styles.itemText}>Quantity: {item.quantity}</p>
              <p style={styles.itemPrice}>Price: ₹{(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <div style={styles.buttonGroup}>
              <button style={styles.buyButton} onClick={() => handleBuyNow(item)}>🛍️ Buy</button>
              <button style={styles.removeButton} onClick={() => removeItem(item.id)}>❌ Remove</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

// **🎨 Styles (Reduced Width of Cart Items)**
const styles = {
  container: { padding: "20px", textAlign: "center" },
  title: { fontSize: "24px", marginBottom: "15px" },
  emptyCart: { fontSize: "18px", color: "#777" },
  cartItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: "10px",
    margin: "10px auto",
    width: "60%",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  itemImage: { width: "80px", height: "80px", borderRadius: "5px", objectFit: "cover" },
  itemDetails: { flex: "1", textAlign: "left", paddingLeft: "10px" },
  itemName: { fontSize: "16px", fontWeight: "bold", marginBottom: "5px" },
  itemText: { fontSize: "14px", color: "#555" },
  itemPrice: { fontSize: "16px", fontWeight: "bold", color: "#27ae60" },
  buttonGroup: { display: "flex", gap: "10px" },
  buyButton: {
    background: "#3498db",
    color: "white",
    border: "none",
    padding: "6px 10px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "12px",
  },
  removeButton: {
    background: "#e74c3c",
    color: "white",
    border: "none",
    padding: "6px 10px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "12px",
  },
};
