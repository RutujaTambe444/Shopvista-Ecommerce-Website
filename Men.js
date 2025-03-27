import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Men() {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([]);

  // Product data
  const products = [
    { id: 1, name: "Shirt", price: 799, image: "/Images/shirt2.jpeg", description: "Soft cotton shirt, perfect for casual or formal wear." },
    { id: 2, name: "Casual Shirt", price: 699, image: "/Images/shaheer.jpg", description: "Trendy and comfortable shirt for everyday style." },
    { id: 3, name: "Jeans", price: 1199, image: "/Images/jean1.jpeg", description: "Slim-fit denim jeans with a classic look and durable fabric." },
    { id: 4, name: "Trousers", price: 999, image: "/Images/trouser.jpeg", description: "Elegant formal trousers with a comfortable fit for office wear." },
    { id: 5, name: "Ethnic", price: 1499, image: "/Images/men-ethnic.jpg", description: "Mwn elegant and classic Ethnic Wear." },
    { id: 6, name: "Jacket", price: 1999, image: "/Images/jacket3.jpeg", description: "Warm and stylish winter jacket with a sleek design." },
    { id: 7, name: "Casual Shirt", price: 1199, image: "/Images/shirt4.jpeg", description: "Modern slim-fit casual shirt with breathable fabric." },
    { id: 8, name: "Trousers", price: 999, image: "/Images/trouser.jpeg", description: "Classic chinos offering both comfort and a stylish look." },
    { id: 9, name: "Sneakers", price: 1499, image: "/Images/shoess.jpeg", description: "Trendy sneakers with excellent grip and comfort." },
    { id: 10, name: "Hooded Jacket", price: 1999, image: "/Images/jacket2.jpeg", description: "Cozy hooded jacket for a perfect winter outfit." }
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
      <h3 style={{ textAlign: "center", marginTop: "40px" }}>Men Shopping</h3>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "15px", marginTop: "20px" }}>
        {products.map((product) => (
          <div
            key={product.id}
            className="card"
            style={{
              width: "16rem",
              height: "26rem",
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
