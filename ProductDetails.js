import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ProductDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state;

  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [couponCode, setCouponCode] = useState("");
  const [wishlist, setWishlist] = useState(false);
  const [discount, setDiscount] = useState(0);

  // ✅ Ensure product price is never null or undefined
  const initialPrice = product?.price ?? 0;
  const [finalPrice, setFinalPrice] = useState(initialPrice);

  useEffect(() => {
    if (product) {
      setFinalPrice((initialPrice - discount) * quantity);
    }
  }, [quantity, discount, product, initialPrice]);

  if (!product) {
    return <h2 style={styles.errorMessage}>❌ Product not found</h2>;
  }

  const sizeCategories = ["men", "women", "kids"];
  const inStock = product.id % 2 !== 0; // Check stock availability

  const applyCoupon = () => {
    if (couponCode === "SAVE10") {
      setDiscount(0.1 * initialPrice);
      alert(" Coupon applied! 10% discount added.");
    } else if (couponCode === "Rutuja25") {
      setDiscount(0.25 * initialPrice);
      alert(" Coupon applied! 25% discount added.");
    } else if (couponCode === "NEW15") {
      setDiscount(0.15 * initialPrice);
      alert(" Coupon applied! 15% discount added.");
    } else {
      alert("⚠️ Invalid coupon code.");
    }
  };
  

  const handleWishlist = () => {
    setWishlist(!wishlist);
  };

  const addToCart = () => {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id && item.size === selectedSize
    );

    if (existingItemIndex !== -1) {
      cartItems[existingItemIndex].quantity += quantity;
    } else {
      cartItems.push({
        id: product.id,
        name: product.name,
        price: initialPrice,
        size: selectedSize,
        quantity: quantity,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cartItems));
    alert("✅ Item added to cart!");
  };

  const handleCheckout = () => {
    if (!inStock) {
      alert("❌ This product is currently out of stock!");
      return;
    }
  
    console.log("✅ Passing product to BillingPage:", {
      id: product.id,
      name: product.name,
      price: initialPrice, // ✅ Ensure price is included
      discountedPrice: finalPrice.toFixed(2),  // ✅ Pass discounted price
      quantity,
      selectedSize,
    });
  
    navigate("/billing", {
      state: {
        id: product.id,
        name: product.name,
        price: initialPrice, // ✅ Original price
        discountedPrice: finalPrice.toFixed(2), // ✅ Pass the discounted price
        quantity,
        selectedSize,
      },
    });
  };
  

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img src={product.image} alt={product.name} style={styles.productImage} />
      </div>
      <div style={styles.detailsContainer}>
        <h2 style={styles.productName}>{product.name}</h2>
        <p style={styles.description}>{product.description}</p>
        <h3 style={styles.price}>
          Price: <span style={{ textDecoration: discount > 0 ? "line-through" : "none" }}>₹{initialPrice}</span>
          {discount > 0 && (
            <span style={{ color: "#27ae60", marginLeft: "10px" }}>₹{finalPrice.toFixed(2)}</span>
          )}
        </h3>
        <p style={inStock ? styles.inStock : styles.outStock}>
          {inStock ? "In Stock ✅" : "Out of Stock ❌"}
        </p>
        {sizeCategories.includes(product.category) && (
          <div style={styles.optionContainer}>
            <label style={styles.optionLabel}>Select Size:</label>
            <div style={styles.optionGroup}>
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  style={{
                    ...styles.sizeButton,
                    backgroundColor: selectedSize === size ? "#bc8286" : "#f0f0f0",
                    color: selectedSize === size ? "white" : "black",
                  }}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}
        <div style={styles.optionContainer}>
          <label style={styles.optionLabel}>Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => {
              const qty = Math.max(1, e.target.value);
              setQuantity(qty);
              setFinalPrice((initialPrice - discount) * qty);
            }}
            style={styles.quantityInput}
          />
        </div>
        <div style={styles.buttonContainer}>
          <button style={styles.cartButton} onClick={addToCart}>🛒 Add to Cart</button>
          <button 
            style={{
              ...styles.checkoutButton,
              backgroundColor: inStock ? "#bc8286" : "#d3d3d3",
              cursor: inStock ? "pointer" : "not-allowed",
            }} 
            onClick={handleCheckout}
            disabled={!inStock}
          >
            Checkout
          </button>
        </div>
        <div style={styles.couponSection}>
          <input
            type="text"
            placeholder="Enter Coupon Code"
            style={styles.couponInput}
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
          <button 
            style={styles.applyCouponButton} 
            onMouseOver={(e) => (e.target.style.background = styles.applyCouponButtonHover.background)}
            onMouseOut={(e) => (e.target.style.background = styles.applyCouponButton.background)}
            onClick={applyCoupon}
          >
            Apply
          </button>
        </div>

        <div style={styles.deliveryInfo}>
          <p>🚚 Free delivery within 3-5 days</p>
          <p>🔄 Easy 7-day return policy</p>
          <p>💳 Secure Payment Options Available</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { display: "flex", alignItems: "center", justifyContent: "center", padding: "40px", gap: "40px", backgroundColor: "#f9f9f9" },
  imageContainer: { flex: "1", display: "flex", justifyContent: "center" },
  productImage: { width: "350px", height: "auto", borderRadius: "12px", boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)" },
  detailsContainer: { flex: "1", padding: "25px", borderRadius: "10px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", backgroundColor: "white" },
  buttonContainer: { display: "flex", gap: "20px", marginTop: "30px" },
  cartButton: { background: "#3498db", color: "white", padding: "6px 12px", borderRadius: "5px", cursor: "pointer", border: "none" },
  checkoutButton: { color: "white", padding: "6px 12px", borderRadius: "5px", cursor: "pointer", border: "none" },
  couponSection: { 
    marginTop: "40px", 
    display: "flex", 
    gap: "10px", 
    alignItems: "center", 
     
  },
  
  // ✅ Reduced width of input box
  couponInput: { 
    width: "180px",  // 🔹 Reduced width
    padding: "8px", 
    border: "1px solid #ccc", 
    borderRadius: "6px", 
    fontSize: "14px", 
    
  },

  applyCouponButton: { 
    background: "#bc8286", 
    color: "white", 
    padding: "8px 15px", 
    borderRadius: "6px", 
    cursor: "pointer", 
    border: "none", 
    fontSize: "14px", 
    fontWeight: "bold",
    transition: "0.3s",
  },

  applyCouponButtonHover: { 
    background: "#a5696a", 
  },
};

