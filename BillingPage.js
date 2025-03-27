import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function BillingPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  //  Card Payment Fields
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardHolder, setCardHolder] = useState("");

  //  UPI Payment Fields
  const [upiId, setUpiId] = useState("");
  const [qrGenerated, setQrGenerated] = useState(false);

  //  Set product details from navigation state
  useEffect(() => {
    if (location.state) {
      setProduct(location.state);
      console.log(" Product received in BillingPage:", location.state);
    } else {
      console.error(" No product data received. Redirecting...");
      setTimeout(() => navigate("/", { replace: true }), 3000);
    }
  }, [location.state, navigate]);

  //  Show a loading message if product is null
  if (!product) {
    return <h2 style={styles.errorMessage}> Product not found. Redirecting...</h2>;
  }

  //  Use Discounted Price if available
  const productPrice = product?.discountedPrice
    ? Number(product.discountedPrice) //  Use discounted price if available
    : product?.price
    ? Number(product.price)  //  Otherwise, use normal price
    : 0; //  Default to 0 if no price found

  console.log(" Final Product Price:", productPrice);

  //  Handle order placement
  const handleOrder = async () => {
    if (!name || !address || !paymentMethod || productPrice === 0) {
      alert("⚠️ Please fill in all fields and ensure a valid product price.");
      return;
    }

    // ✅ Validate card details if Credit Card is selected
    if (paymentMethod === "Credit Card" && (!cardNumber || !cvv || !cardHolder)) {
      alert("⚠️ Please fill in all card details.");
      return;
    }

    // ✅ Validate UPI details if UPI is selected
    if (paymentMethod === "UPI" && !upiId && !qrGenerated) {
      alert("⚠️ Please enter a valid UPI ID or scan the QR code.");
      return;
    }

    const orderData = {
      name,
      address,
      product_id: product.id,
      product_name: product.name,
      price: productPrice, //  Ensure correct price is used
      payment_method: paymentMethod,
      status: "Confirmed",
    };

    try {
      console.log(" Sending Order Data:", orderData);

      const response = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      const result = await response.json();
      console.log(" Order Response:", result);

      if (response.ok) {
        setOrderPlaced(true);
        setTimeout(() => {
          navigate("/orders", { state: { order: result } });
        }, 3000);
      } else {
        console.error(" Order Failed:", result);
        alert("Order failed: " + (result.error || result.message || "Unknown error"));
      }
    } catch (error) {
      console.error(" Network Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      {!orderPlaced ? (
        <div style={styles.formContainer}>
          <h2>Billing & Payment</h2>
          <p> Product: {product.name}</p>
          <p>
             Price:  
            {product?.discountedPrice ? (
              <>
                <span style={{ textDecoration: "line-through", color: "red" }}> ₹{product.price}</span>
                <span style={{ marginLeft: "10px", color: "#27ae60" }}> ₹{productPrice}</span>
              </>
            ) : (
              <> ₹{productPrice} </>
            )}
          </p>

          <label>Full Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={styles.input} />

          <label>Address:</label>
          <textarea value={address} onChange={(e) => setAddress(e.target.value)} style={styles.input}></textarea>

          <label>Payment Method:</label>
          <select 
            value={paymentMethod} 
            onChange={(e) => {
              setPaymentMethod(e.target.value);
              setQrGenerated(false); // Reset QR if payment method changes
            }} 
            style={styles.input}
          >
            <option value="">Select</option>
            <option value="UPI">UPI</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Cash on Delivery">Cash on Delivery</option>
          </select>

          {/*  Card Details Section */}
          {paymentMethod === "Credit Card" && (
            <div style={styles.paymentSection}>
              <label>Card Holder Name:</label>
              <input type="text" value={cardHolder} onChange={(e) => setCardHolder(e.target.value)} style={styles.input} />

              <label>Card Number:</label>
              <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} style={styles.input} maxLength={16} />

              <label>CVV:</label>
              <input type="password" value={cvv} onChange={(e) => setCvv(e.target.value)} style={styles.input} maxLength={3} />
            </div>
          )}

          {/*  UPI Section */}
          {paymentMethod === "UPI" && (
            <div style={styles.paymentSection}>
              <button style={styles.qrButton} onClick={() => setQrGenerated(true)}>Generate QR Code</button>
              {qrGenerated ? (
                <img src="/Images/upi-qr.jpg" alt="UPI QR Code" style={styles.qrImage} />
              ) : (
                <>
                  <label>Enter UPI ID:</label>
                  <input type="text" value={upiId} onChange={(e) => setUpiId(e.target.value)} style={styles.input} />
                </>
              )}
            </div>
          )}

          <button onClick={handleOrder} style={styles.billingButton}>🛒 Place Order</button>
        </div>
      ) : (
        <h2 style={styles.successMessage}> Your Order is Placed Successfully!</h2>
      )}
    </div>
  );
}

//  Styles
const styles = {
  container: { display: "flex", justifyContent: "center", padding: "30px", backgroundColor: "#f9f9f9" },
  formContainer: { width: "450px", padding: "25px", border: "1px solid #ddd", borderRadius: "10px", background: "#fff", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" },
  input: { width: "100%", padding: "10px", marginBottom: "12px", borderRadius: "6px", border: "1px solid #ccc", fontSize: "16px" },
  billingButton: { padding: "14px 25px", background: "#bc8286", color: "white", border: "none", cursor: "pointer", fontSize: "14px", borderRadius: "5px", margin: "20px auto", textAlign: "center" },
  qrButton: { padding: "10px", background: "#27ae60", color: "white", border: "none", cursor: "pointer", borderRadius: "5px", fontWeight: "bold", transition: "0.3s" },
  qrImage: { width: "150px", marginTop: "15px", display: "block", marginLeft: "auto", marginRight: "auto" },
  paymentSection: { marginTop: "20px", textAlign: "center" },
};
