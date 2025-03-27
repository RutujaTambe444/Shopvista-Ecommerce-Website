import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser, FaPaperPlane } from "react-icons/fa";

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Us</h1>

      {/* Contact Info Section */}
      <div style={styles.contactInfoContainer}>
        <div style={styles.infoBox}>
          <FaMapMarkerAlt style={styles.icon} />
          <p><strong>Address:</strong> Pune, Maharashtra, India</p>
        </div>
        <div style={styles.infoBox}>
          <FaPhone style={styles.icon} />
          <p><strong>Phone:</strong> +91 98765 43210</p>
        </div>
        <div style={styles.infoBox}>
          <FaEnvelope style={styles.icon} />
          <p><strong>Email:</strong> support@ShopVista.com</p>
        </div>
      </div>

      {/* Contact Form */}
      <div style={styles.formContainer}>
        <h2 style={styles.subHeading}>Send Us a Message</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <FaUser style={styles.inputIcon} />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <FaEnvelope style={styles.inputIcon} />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              style={styles.textarea}
            />
          </div>

          <button type="submit" style={styles.button}>
            <FaPaperPlane style={{ marginRight: "8px" }} /> Send Message
          </button>

          {submitted && <p style={styles.successMsg}>✅ Message Sent Successfully!</p>}
        </form>
      </div>
    </div>
  );
}

// Styles Object
const styles = {
  container: {
    maxWidth: "900px",
    margin: "auto",
    padding: "30px",
    backgroundColor: "#f9f9f9",
    borderRadius: "12px",
    boxShadow: "0px 0px 20px rgba(0,0,0,0.1)",
    textAlign: "center",
    marginTop:"5px",
  },
  heading: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px",
  },
  contactInfoContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: "30px",
  },
  infoBox: {
    flex: "1",
    minWidth: "200px",
    padding: "15px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
    margin: "10px",
  },
  icon: { fontSize: "24px", color: "#ff7f50", marginBottom: "8px" },
  formContainer: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
  },
  subHeading: { fontSize: "24px", color: "#444", marginBottom: "15px" },
  form: { display: "flex", flexDirection: "column", alignItems: "center" },
  inputGroup: {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
    width: "100%",
  },
  inputIcon: {
    fontSize: "18px",
    color: "#777",
    marginRight: "10px",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "16px",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "16px",
    minHeight: "100px",
  },
  button: {
    backgroundColor: "#ff7f50",
    color: "white",
    border: "none",
    padding: "12px 20px",
    fontSize: "16px",
    borderRadius: "6px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    marginTop: "10px",
  },
  successMsg: {
    color: "green",
    marginTop: "15px",
    fontWeight: "bold",
  },
};
