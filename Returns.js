import React, { useState } from "react";

export default function ReturnProduct() {
  const [formData, setFormData] = useState({
    orderId: "",
    email: "",
    reason: "",
    condition: "New",
    additionalDetails: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Return Request Submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Return a Product</h1>
      <p style={styles.subText}>Easily request a return by filling out the form below.</p>

      {submitted ? (
        <div style={styles.successMessage}>
          ✅ Your return request has been submitted successfully! Our team will contact you shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>Order ID:</label>
          <input type="text" name="orderId" value={formData.orderId} onChange={handleChange} required style={styles.input} placeholder="Enter your order ID" />

          <label style={styles.label}>Email Address:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required style={styles.input} placeholder="Enter your email" />

          <label style={styles.label}>Reason for Return:</label>
          <select name="reason" value={formData.reason} onChange={handleChange} required style={styles.input}>
            <option value="">Select a reason</option>
            <option value="Received wrong item">Received wrong item</option>
            <option value="Item is damaged">Item is damaged</option>
            <option value="Changed my mind">Changed my mind</option>
            <option value="Other">Other</option>
          </select>

          <label style={styles.label}>Condition of Product:</label>
          <div style={styles.radioGroup}>
            <label><input type="radio" name="condition" value="New" checked={formData.condition === "New"} onChange={handleChange} /> New</label>
            <label><input type="radio" name="condition" value="Used" onChange={handleChange} /> Used</label>
          </div>

          <label style={styles.label}>Additional Details (Optional):</label>
          <textarea name="additionalDetails" value={formData.additionalDetails} onChange={handleChange} style={styles.textarea} placeholder="Provide additional details if needed"></textarea>

          <button type="submit" style={styles.submitButton}>Submit Return Request</button>
        </form>
      )}
    </div>
  );
}

// Stylish Form Design
const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "30px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0px 0px 15px rgba(0,0,0,0.1)",
    fontFamily: "'Poppins', sans-serif",
    color: "#333",
    textAlign: "center",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#222",
    marginBottom: "10px",
    borderBottom: "3px solid #ff5733",
    display: "inline-block",
    paddingBottom: "10px",
  },
  subText: {
    fontSize: "16px",
    color: "#666",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  label: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#444",
    marginTop: "10px",
    alignSelf: "flex-start",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    marginBottom: "15px",
    outline: "none",
  },
  textarea: {
    width: "100%",
    height: "80px",
    padding: "10px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    marginBottom: "15px",
    outline: "none",
    resize: "none",
  },
  radioGroup: {
    display: "flex",
    gap: "20px",
    marginBottom: "15px",
    fontSize: "14px",
  },
  submitButton: {
    backgroundColor: "#ff5733",
    color: "#fff",
    padding: "12px 20px",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.3s ease-in-out",
  },
  submitButtonHover: {
    backgroundColor: "#e64c2c",
  },
  successMessage: {
    backgroundColor: "#d4edda",
    color: "#155724",
    padding: "15px",
    borderRadius: "8px",
    fontWeight: "bold",
  },
};

