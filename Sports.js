import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Sports() {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([]);

  // Product data
  const products = [
    { id: 81, name: "Badminton Rackets", price: 830, image: "/Images/badminton.jpg", description: "Hulk Badminton Racket Set of 2 by STARTER - Badminton Rackets, Ideal for Indoor & Outdoor, Multi-Colour." },
    { id: 82, name: "David Warner Cricket Bat", price: 94260, image: "/Images/bat.jpg", description: "DAVID WARNER PLAYER EDITION BAT" },
    { id: 83, name: "Bicycle", price: 18560, image: "/Images/cycle2.jpg", description: "CHAMPION MAGNESIUM ALLOY 24 GEAR CYCLE." },
    { id: 84, name: "Carrom Board", price: 1660, image: "/Images/carrom.jpg", description: "KORNERS Carrom Board | Black Round Pocket 32 Inches Full Size | Black" },
    { id: 85, name: "Skating Shoes", price: 2120, image: "/Images/skating.jpg", description: "JD Fresh 4 Wheel Inline Skates Skating Shoes for Boys and Girls Age 10 to 14 Years." },
    { id: 86, name: "Basketball", price: 2550, image: "/Images/basketball.jpeg", description: "Nike Basketball" },
    { id: 87, name: "Shuttlecock", price: 50, image: "/Images/shuttle.jpg", description: "Shuttle Cock (1 piece)" },
    { id: 88, name: "Cricket Stump", price: 399, image: "/Images/stump.jpg", description: "Jaspo Revive (World Cup Edition) Premium Plastic Stumps Set." },
    { id: 89, name: "Tennis Ball", price: 1265, image: "/Images/tennisball.jpg", description: "Vermont Mini Green Tennis Balls [Stage 1] - 10 Ball Bucket" },
    { id: 90, name: "Boxing Gloves", price: 8236, image: "/Images/boxing.jpg", description: "FIVING Boxing Gloves for Men and Women - Suitable for Boxing, Kickboxing, MMA, Muay Thai." }
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
      <h3 style={{ textAlign: "center", marginTop: "40px" }}>Sports Shopping</h3>
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
