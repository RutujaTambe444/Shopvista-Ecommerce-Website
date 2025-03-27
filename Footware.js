import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Footwear() {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([]);

  // Product data
  const products = [
    { id: 61, name: "Formal Shoes", price: 1299, image: "/Images/Formalshoes.jpg", description: "Elegant black leather shoes with a polished finish, perfect for business meetings and formal occasions." },
    { id: 62, name: "Casual Sneakers", price: 1640, image: "/Images/Casual_Sneakers.jpg", description: "Trendy and comfortable sneakers with a breathable mesh design, ideal for everyday wear and casual outings." },
    { id: 63, name: "Hiking Boots", price: 3660, image: "/Images/Hiking_Boots.jpg", description: "Durable and rugged hiking boots with deep-tread soles for maximum grip, designed for outdoor adventures." },
    { id: 64, name: "Loafers", price: 1259, image: "/Images/Loafers.jpg", description: "Stylish slip-on loafers with a soft suede finish, providing both comfort and sophistication for semi-formal occasions." },
    { id: 65, name: "Sports Running Shoes", price: 3120, image: "/Images/Sports_Shoes.jpg", description: "Lightweight and flexible running shoes with cushioned soles, built for enhanced performance and long-distance comfort." },
    { id: 66, name: "High-Heeled Sandals", price: 2050, image: "/Images/High-Heeled_Sandals.jpg", description: "Elegant and stylish heeled sandals with a sleek strap design, perfect for parties and formal events." },
    { id: 67, name: "Ballet Flats", price: 1100, image: "/Images/Ballet_Flats.jpg", description: "Classic and comfortable ballet flats with a soft suede finish and a cute bow detail, ideal for everyday wear." },
    { id: 68, name: "Wedge Sandals", price: 1880, image: "/Images/Wedge_Sandals.jpg", description: "Trendy and comfy wedge sandals with a cork-textured sole, perfect for casual outings and summer wear." },
    { id: 69, name: "Ankle Boots", price: 1170, image: "/Images/Ankle_Boots.jpg", description: "Sleek and fashionable ankle boots with a leather finish and a side zipper, ideal for chilly weather and stylish looks." },
    { id: 70, name: "Slip-On Sneakers", price: 2070, image: "/Images/Slip-On_Sneakers.jpg", description: "Lightweight and breathable slip-on sneakers with a cushioned sole, designed for all-day comfort and effortless style." }
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
      <h3 style={{ textAlign: "center", marginTop: "40px" }}>Footwear Shopping</h3>
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
