import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Bags() {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([]);

  // Product data
  const products = [
    { id: 31, name: "Women Handbag", price: 10830, image: "/Images/bag1.jpg", description: "Women's Purses and Handbags - Designer Top Handle Satchel Tote Bag." },
    { id: 32, name: "Women Embroidered Handbag", price: 8260, image: "/Images/bag2.jpg", description: "Embroidered Leather Handbag for Women - Stylish & Elegant." },
    { id: 33, name: "Leather Bag", price: 18560, image: "/Images/bag3.jpg", description: "Premium Leather Handbag - Perfect for Office & Casual Wear." },
    { id: 34, name: "Women Laptop Bag", price: 560, image: "/Images/bag4.jpg", description: "Brown Artilea Women's Leather Laptop Bag - Durable & Fashionable." },
    { id: 35, name: "Multipurpose Bag", price: 2120, image: "/Images/bag5.jpg", description: "Multipurpose Leather Handbag for Ladies - Shoulder Bag Style." },
    { id: 36, name: "Backpack", price: 750, image: "/Images/bag6.jpg", description: "Water-Resistant Laptop Backpack - Ideal for School & Office Use." },
    { id: 37, name: "Men's Backpack", price: 1150, image: "/Images/bag8.jpg", description: "Stylish Backpack for Men - Travel & Daily Use." },
    { id: 38, name: "Sling Bag", price: 899, image: "/Images/bag9.jpg", description: "Trendy Sling Bag for Men - Compact & Lightweight." },
    { id: 39, name: "Messenger Bag", price: 1265, image: "/Images/bag10.jpg", description: "Classic Messenger Bag for Men - Business & Casual Wear." },
    { id: 40, name: "Men's Handbag", price: 936, image: "/Images/bag12.jpeg", description: "Fashionable Men's Handbag - High-Quality Leather." }
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
      <h3 style={{ textAlign: "center", marginTop: "40px" }}>Bags Collection</h3>
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
