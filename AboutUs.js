import React from "react";
import { FaCheckCircle, FaShippingFast, FaHeadset, FaShoppingCart, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function AboutUs() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>

      {/* Who We Are */}
      <section style={styles.section}>
        <h2 style={styles.subHeading}>Who We Are</h2>
        <p style={styles.text}>
          Welcome to <strong>ShopVista</strong>, your number one destination for the latest fashion, electronics, beauty products, and more! 
          We are dedicated to giving you the very best products, with a focus on **quality, affordability, and excellent customer service**.
        </p>
      </section>

      {/* Our Mission */}
      <section style={styles.section}>
        <h2 style={styles.subHeading}>Our Mission</h2>
        <p style={styles.text}>
          At <strong>ShopVista</strong>, our mission is to **provide a seamless online shopping experience** where you can find everything you need at the best prices. 
          We aim to bring a curated collection of high-quality products directly to your doorstep.
        </p>
      </section>

      {/* Why Choose Us */}
      <section style={styles.whyChoose}>
        <h2 style={styles.subHeading}>Why Choose Us?</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <FaCheckCircle style={styles.iconGreen} /> High-quality products at affordable prices
          </li>
          <li style={styles.listItem}>
            <FaShippingFast style={styles.iconBlue} /> Fast and reliable shipping across India
          </li>
          <li style={styles.listItem}>
            <FaHeadset style={styles.iconRed} /> 24/7 customer support
          </li>
          <li style={styles.listItem}>
            <FaShoppingCart style={styles.iconPurple} /> Easy and secure payment options
          </li>
        </ul>
      </section>

      {/* Contact Information */}
      <section style={styles.contact}>
        <h2 style={styles.subHeading}>Contact Us</h2>
        <p style={styles.text}>Have questions? Reach out to us!</p>
        <div style={styles.contactInfo}>
          <p><FaEnvelope style={styles.iconContact} /> <strong>Email:</strong> support@shopvista.com</p>
          <p><FaPhone style={styles.iconContact} /> <strong>Phone:</strong> +91 98765 43210</p>
          <p><FaMapMarkerAlt style={styles.iconContact} /> <strong>Address:</strong> Pune, Maharashtra, India</p>
        </div>
      </section>
    </div>
  );
}

// Styles Object
const styles = {
  container: {
    maxWidth: "1000px",
    margin: "auto",
    padding: "30px",
    backgroundColor: "#f9f9f9",
    borderRadius: "12px",
    boxShadow: "0px 0px 20px rgba(0,0,0,0.1)",
    marginTop:"5px"
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
    fontSize: "32px",
    fontWeight: "bold",
  },
  section: {
    marginBottom: "30px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
  },
  subHeading: {
    fontSize: "24px",
    color: "#444",
    marginBottom: "10px",
    borderBottom: "3px solid #ff7f50",
    display: "inline-block",
    paddingBottom: "5px",
  },
  text: {
    fontSize: "16px",
    lineHeight: "1.8",
    color: "#555",
  },
  whyChoose: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
  },
  list: {
    listStyle: "none",
    padding: 0,
    fontSize: "16px",
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "12px",
    fontSize: "16px",
    color: "#444",
  },
  iconGreen: { color: "green", marginRight: "10px", fontSize: "20px" },
  iconBlue: { color: "blue", marginRight: "10px", fontSize: "20px" },
  iconRed: { color: "red", marginRight: "10px", fontSize: "20px" },
  iconPurple: { color: "purple", marginRight: "10px", fontSize: "20px" },
  contact: {
    marginTop: "20px",
    padding: "20px",
    backgroundColor: "#fffae6",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
  },
  contactInfo: {
    marginTop: "10px",
    fontSize: "16px",
    color: "#444",
  },
  iconContact: { marginRight: "10px", color: "#ff7f50", fontSize: "20px" },
};

