import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Beauty() {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([]);

  // Product data
  const products = [
    { id: 41, name: "Nivea Soft", price: 130, image: "/Images/nivea-soft.jpeg", description: "Light moisturising Cream." },
    { id: 42, name: "Nivea Butter", price: 260, image: "/Images/nivea-butter.jpg", description: "Nivea Cocoa Butter" },
    { id: 43, name: "Vaseline", price: 560, image: "/Images/vaseline.jpg", description: "Vaseline" },
    { id: 44, name: "Vaseline Lip Petroleum Jelly", price: 60, image: "/Images/lip-jelly.jpg", description: "Vaseline Lip Petroleum Jelly" },
    { id: 45, name: "Rare Beauty", price: 1120, image: "/Images/rare-beauty.jpg", description: "Rare Beauty Product" },
    { id: 46, name: "Sunscreen", price: 550, image: "/Images/aqualogica.jpg", description: "SPF 50 sunscreen" },
    { id: 47, name: "Dove Soap", price: 110, image: "/Images/dove.jpg", description: "Dove Bathing Bar 135g" },
    { id: 48, name: "L'oreal Paris", price: 799, image: "/Images/loreal.jpg", description: "L'oreal Paris Total Repair 5" },
    { id: 49, name: "Head & Shoulder Shampoo", price: 265, image: "/Images/headandshoulders.jpg", description: "Head & Shoulders 2 in 1 anti dandruff shampoo" },
    { id: 50, name: "Ponds Facewash", price: 236, image: "/Images/ponds.jpg", description: "Ponds Pimple Clear Facewash" }
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
      <h3 style={{ textAlign: "center", marginTop: "40px" }}>Beauty and Health</h3>
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
