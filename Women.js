import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Women() {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([]);

  // Product data
  const products = [
    { id: 11, name: "Ethnic", price: 1799, image: "/Images/alia.jpg", description: "Elegant and timeless ethnic wear designed to bring out the rich cultural heritage of India. Perfect for festive occasions, weddings, and celebrations, our ethnic collection is crafted from premium-quality fabric with intricate embroidery and embellishments that add a touch of royalty to your look." },
    { id: 12, name: "Western", price: 499, image: "/Images/yami1.jpg", description: "Trendy and stylish western wear that blends comfort with fashion. Whether it's a casual outing or a party night, our western collection includes sleek designs, breathable fabrics, and flattering fits that make you stand out. Pair it with accessories to complete the modern look." },
    { id: 13, name: "Tops", price: 699, image: "/Images/yami.jpg", description: "Explore a variety of stylish tops, from casual to formal, crafted with high-quality fabric that ensures a perfect fit and superior comfort. Whether you prefer flowy designs, body-hugging styles, or elegant prints, our collection has something for every occasion." },
    { id: 14, name: "Kurtas and Suits", price: 999, image: "/Images/aditi2.png", description: "Graceful and sophisticated, our kurtas and suits collection is ideal for both everyday wear and special occasions. Designed with intricate embroidery, soft fabrics, and exquisite craftsmanship, these outfits offer the perfect blend of tradition and contemporary fashion." },
    { id: 15, name: "Trousers", price: 899, image: "/Images/women-trouser.jpeg", description: "A versatile collection of trousers perfect for both casual and formal occasions. Designed for maximum comfort and durability, our trousers come in a variety of styles, including slim-fit, straight-leg, and high-waisted, ensuring a flattering look for every body type." },
    { id: 16, name: "Jacket", price: 1399, image: "/Images/jacket.png", description: "Stay warm and stylish with our premium collection of jackets. Designed for all seasons, our jackets are made with high-quality fabrics, offering excellent insulation and a trendy look. Perfect for layering over any outfit, they are a must-have for fashion-forward individuals." },
    { id: 17, name: "Casual Shirt", price: 999, image: "/Images/women-shirt2.jpg", description: "Effortlessly stylish and comfortable, our casual shirts are designed for everyday wear. Made from breathable fabrics with modern prints and classic designs, these shirts are perfect for work, outings, or casual hangouts." },
    { id: 18, name: "Lehnga", price: 2999, image: "/Images/lehnga1.jpg", description: "Make a statement at weddings and festive occasions with our stunning lehenga collection. Crafted with luxurious fabrics, intricate embroidery, and vibrant colors, these lehengas exude elegance and charm, making you the center of attention." },
    { id: 19, name: "Kurti", price: 1099, image: "/Images/kurti1.jpg", description: "A perfect blend of comfort and style, our kurtis are ideal for both casual and festive wear. Featuring exquisite embroidery, elegant prints, and breathable fabrics, they pair effortlessly with leggings, palazzos, or skirts to create a sophisticated look." },
    { id: 20, name: "Hooded Jacket", price: 1199, image: "/Images/hood.jpg", description: "Beat the cold in style with our trendy hooded jackets. Made from durable, high-quality materials, these jackets provide superior warmth and a fashionable edge. Whether you’re heading outdoors or just looking for a stylish winter layer, this is the perfect choice." }
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
      <h3 style={{ textAlign: "center", marginTop: "40px" }}>Women Shopping</h3>
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
