import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';


export default function NewArrival() {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([]);

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
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  const newArrivals = [
    { id: 1, name: "Trendy Sneakers", price: 2299, image: "/Images/Casual_Sneakers.jpg", discount: "30% off" },
    { id: 2, name: "Smartwatch", price: 4499, image: "/Images/smartwatch.jpg", discount: "20% off" },
    { id: 3, name: "Leather Handbag", price: 1999, image: "/Images/bag2.jpg", discount: "25% off" },
    { id: 4, name: "Wireless Earbuds", price: 1599, image: "/Images/earbuds.jpg", discount: "40% off" },
    { id: 5, name: "Sunscreen", price: 550, image: "/Images/aqualogica.jpg", discount: "35% off" }
  ];

  return (
    <div>
      <div style={{ padding: '15px' }}>
        <Slider {...settings}>
          <div><img src="/Images/new4.png" alt="Slide 1" className="d-block w-100" style={{ width: '100%', height: '540px', objectFit: 'cover' }} /></div>
          <div><img src="/Images/new3.png" alt="Slide 2" className="d-block w-100" style={{ width: '100%', height: '540px', objectFit: 'cover' }} /></div>
          <div><img src="/Images/beauty.png" alt="Slide 3" className="d-block w-100" style={{ width: '100%', height: '540px', objectFit: 'cover' }} /></div>
        </Slider>
      </div>

      <h2 style={{ textAlign: 'center' }}>New Arrivals</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "15px", marginTop: "20px" }}>
        {newArrivals.map((product) => (
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
              <p style={{ fontSize: "14px", color: "red" }}>{product.discount}</p>
            </div>
          </div>
        ))}
      </div>
      <br /><br />
    </div>
  );
}
