import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Grocery() {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([]);

  // Product data
  const products = [
    { id: 71, name: "Maggi", price: 14, image: "/Images/maggi.jpeg", description: "Buy Maggi!" },
    { id: 72, name: "Milk", price: 40, image: "/Images/milk.jpg", description: "Cow Milk 1 liter" },
    { id: 73, name: "Bread", price: 60, image: "/Images/bread.jpg", description: "Buy Fresh Bread!" },
    { id: 74, name: "Peanut Butter", price: 259, image: "/Images/butter.jpg", description: "Peanut Butter" },
    { id: 75, name: "Chocolate", price: 120, image: "/Images/chocolate.jpg", description: "Perfect Chocolate" },
    { id: 76, name: "Yogurt", price: 50, image: "/Images/yogurt.jpg", description: "Buy Fresh Yogurt" },
    { id: 77, name: "Apples", price: 100, image: "/Images/apples.jpg", description: "Apples! 10 pieces" },
    { id: 78, name: "Eggs", price: 80, image: "/Images/eggs.jpg", description: "Eggs!" },
    { id: 79, name: "Bananas", price: 70, image: "/Images/banana.jpg", description: "Bananas 10 pieces" },
    { id: 80, name: "Orange Juice", price: 70, image: "/Images/orange-juice.jpg", description: "Fresh Orange Juice 500ml" }
  ];

  // Toggle Wishlist Function
  const toggleWishlist = (product) => {
    let storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  
    // Check if product already exists in wishlist
    const isInWishlist = storedWishlist.some((item) => item.id === product.id);
  
    if (isInWishlist) {
      // Remove from wishlist
      storedWishlist = storedWishlist.filter((item) => item.id !== product.id);
    } else {
      // Add to wishlist
      storedWishlist.push(product);
    }
  
    // Save updated wishlist to localStorage
    localStorage.setItem("wishlist", JSON.stringify(storedWishlist));
    setWishlist(storedWishlist.map((item) => item.id)); // Update state to reflect changes
  };
  

  return (
    <div>
      <h3 style={{ textAlign: "center", marginTop: "40px" }}>Grocery Shopping</h3>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "15px", marginTop: "20px" }}>
        {products.map((product) => (
          <div
            key={product.id}
            className="card"
            style={{
              width: "16rem",
              height: "23rem",
              cursor: "pointer",
              border: "1px solid #ddd",
              borderRadius: "10px",
              boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
              textAlign: "center",
              padding: "10px",
              position: "relative"
            }}
          >
            {/* Wishlist Button ❤️ */}
            <button
              onClick={() => toggleWishlist(product)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "none",
                border: "none",
                fontSize: "24px",
                cursor: "pointer"
              }}
            >
              {wishlist.includes(product.id) ? "❤️" : "🤍"}
            </button>

            {/* Clickable Image to View Details */}
            <img
              src={product.image}
              className="card-img-top"
              alt={product.name}
              style={{ borderRadius: "10px" }}
              onClick={() => navigate(`/product/${product.id}`, { state: product })}
            />

            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p style={{ fontSize: "16px", fontWeight: "bold", color: "green" }}>₹{product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <br /><br />
    </div>
  );
}
