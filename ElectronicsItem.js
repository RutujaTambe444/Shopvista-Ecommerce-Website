import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Electronics() {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([]);

  // Product data
  const products = [
    { id: 51, name: "Earbuds", price: 1299, image: "/Images/Earbuds.jpg", description: "Buy Earbuds" },
    { id: 52, name: "Earphone Wired", price: 640, image: "/Images/wiredearphones.jpg", description: "Buy Earphone" },
    { id: 53, name: "SmartPhone", price: 26660, image: "/Images/Smartphone.jpg", description: "Buy Latest Smartphone" },
    { id: 54, name: "Washing Machine", price: 18259, image: "/Images/washingmachine.jpg", description: "Buy Multi Functional Washing Machine" },
    { id: 55, name: "Television", price: 20120, image: "/Images/Television.jpg", description: "Buy Television" },
    { id: 56, name: "Fridge", price: 29050, image: "/Images/Fridge.jpg", description: "Buy Fridge" },
    { id: 57, name: "Charger", price: 1100, image: "/Images/Charger.jpg", description: "Buy Charger" },
    { id: 58, name: "Laptop", price: 62080, image: "/Images/Laptop.jpg", description: "Buy Laptop" },
    { id: 59, name: "Headphone", price: 1170, image: "/Images/Headphone.jpg", description: "Buy Headphone" },
    { id: 60, name: "Gaming PC", price: 55070, image: "/Images/Gamingpc.jpg", description: "Buy Gaming PC" }
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
      <h3 style={{ textAlign: "center", marginTop: "40px" }}>Electronics Shopping</h3>
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
