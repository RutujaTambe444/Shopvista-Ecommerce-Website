import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Kids() {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([]);

  // Product data
  const products = [
    { id: 1, name: "Ethnic Girls", price: 1799, image: "/Images/kid1.jpg", description: "Graceful ethnic kurta set for kids, perfect for festive occasions and family gatherings. Made with lightweight fabric and intricate embroidery, ensuring elegance and comfort at the same time." },
        { id: 2, name: "Western", price: 1499, image: "/Images/kid2.jpeg", description: "Elegant and stylish formal blazer sets for kids. Perfect for formal occasions, weddings, and family gatherings, this outfit ensures a sharp and classy look with premium fabric and a tailored fit." },
        { id: 3, name: "Jacket", price: 1699, image: "/Images/kid3.jpg", description: "Graceful ethnic Jacket set for kids, perfect for festive occasions and family gatherings. Made with lightweight fabric and intricate embroidery, ensuring elegance and comfort at the same time." },
        { id: 4, name: "Summer Special", price: 999, image: "/Images/kid4.jpeg", description: "Lightweight and breezy, our summer special dresses are designed to keep you cool and stylish in the heat. Made from breathable fabrics like cotton and linen, these dresses feature floral prints, pastel shades, and relaxed fits, making them a must-have for beach outings, vacations, and daily wear." },
        { id: 5, name: "Party Gown", price: 1499, image: "/Images/kid5.jpeg", description: "A charming frock dress designed for little princesses. Featuring soft fabric, cute embellishments, and a flowy silhouette, this dress is perfect for birthdays, parties, and special events." },
        { id: 6, name: "T-Shirt", price: 399, image: "/Images/kid6.jpeg", description: "Soft, breathable, and comfortable casual t-shirts for kids. Made from premium cotton, these tees keep your little ones cool and stylish all day long. Available in fun colors and playful prints that kids love!" },
        { id: 7, name: "Plazo Suit", price: 1299, image: "/Images/kid7.jpeg", description: "Elegant and stylish, the plazo suit is the perfect blend of tradition and modernity. Featuring a flowy palazzo pant paired with a beautifully embroidered kurta, this outfit ensures comfort and grace for festive events, weddings, and office wear." },
        { id: 8, name: "Ethnic Boys", price: 1999, image: "/Images/kid8.jpeg", description: "Graceful ethnic kurta set for kids, perfect for festive occasions and family gatherings. Made with lightweight fabric and intricate embroidery, ensuring elegance and comfort at the same time." },
        { id: 9, name: "Casual Wear", price: 899, image: "/Images/kidd9.jpg", description: "Stay comfortable and fashionable with our casual wear collection. Perfect for everyday outings, work-from-home setups, or relaxed weekends, these outfits are designed with soft fabrics, trendy cuts, and stylish patterns to keep you looking effortlessly chic." },
        { id: 10, name: "Shirt", price: 1199, image: "/Images/kid10.jpg", description: "Beat the cold in style with our trendy hooded jackets. Made from durable, high-quality materials, these jackets provide superior warmth and a fashionable edge. Whether you're heading outdoors or just looking for a stylish winter layer, this is the perfect choice." }
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
