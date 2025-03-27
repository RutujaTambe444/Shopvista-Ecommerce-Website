import React from "react";

export default function TermsConditions() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Terms & Conditions</h1>
      <p style={styles.date}>Last Updated: March 2025</p>

      <div style={styles.content}>
        <section style={styles.section}>
          <h2 style={styles.subHeading}>1. Introduction</h2>
          <p>
            Welcome to <span style={styles.brand}>ShopVista</span>. By accessing our site, you agree to abide by these Terms & Conditions. Please read them carefully before making a purchase.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subHeading}>2. User Agreement</h2>
          <p>By using our website, you confirm that you:</p>
          <ul style={styles.list}>
            <li>Are at least 18 years old or have parental consent.</li>
            <li>Provide accurate account information.</li>
            <li>Will not misuse our services.</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subHeading}>3. Orders & Payments</h2>
          <ul style={styles.list}>
            <li>All purchases are subject to product availability.</li>
            <li>Prices and discounts may change without notice.</li>
            <li>Secure payments through trusted payment providers.</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subHeading}>4. Shipping & Delivery</h2>
          <p>
            Orders will be processed within <b>1-2 business days</b>. Delivery time depends on location and courier services. We are not responsible for delays due to external factors.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subHeading}>5. Returns & Refunds</h2>
          <p>
            Items can be returned within <b>7 days</b> if unused and in original packaging. Refunds are processed within **5-7 business days** after return approval.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subHeading}>6. Privacy & Security</h2>
          <p>
            Your privacy is important to us. Please review our{" "}
            <a href="/privacy-policy" style={styles.link}>Privacy Policy</a> for more details on data collection and security measures.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subHeading}>7. Prohibited Activities</h2>
          <p>Users must NOT:</p>
          <ul style={styles.list}>
            <li>Engage in fraudulent transactions.</li>
            <li>Use the website for illegal activities.</li>
            <li>Copy or misuse our content.</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subHeading}>8. Changes to Terms</h2>
          <p>
            We reserve the right to update these Terms & Conditions. Any changes will be effective immediately upon posting.
          </p>
        </section>

        <section style={styles.contactSection}>
          <h2 style={styles.subHeading}>9. Contact Us</h2>
          <p>
            If you have any questions, reach out to us:
          </p>
          <p style={styles.contactDetails}>
            📧 <span>Email:</span> <a href="mailto:support@yourshop.com" style={styles.link}>support@yourshop.com</a><br />
            📍 <span>Address:</span> Pune, Maharashtra, India
          </p>
        </section>
      </div>

      <p style={styles.footer}>© 2025 ShopVista. All rights reserved.</p>
    </div>
  );
}

// Enhanced Styles
const styles = {
  container: {
    maxWidth: "1000px",
    margin: "40px auto",
    padding: "40px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0px 0px 15px rgba(0,0,0,0.1)",
    fontFamily: "'Poppins', sans-serif",
    color: "#333",
    lineHeight: "1.8",
    textAlign: "justify",
  },
  heading: {
    fontSize: "36px",
    fontWeight: "bold",
    textAlign: "center",
    color: "#222",
    marginBottom: "10px",
    borderBottom: "3px solid #ff5733",
    paddingBottom: "10px",
    display: "inline-block",
    width: "100%",
  },
  date: {
    textAlign: "center",
    color: "#666",
    fontSize: "15px",
    marginBottom: "20px",
  },
  content: {
    padding: "10px 20px",
  },
  section: {
    marginBottom: "25px",
    padding: "15px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "2px 2px 5px rgba(0,0,0,0.1)",
  },
  subHeading: {
    fontSize: "22px",
    color: "#444",
    marginBottom: "10px",
    borderLeft: "5px solid #ff5733",
    paddingLeft: "10px",
  },
  list: {
    listStyleType: "disc",
    paddingLeft: "25px",
    marginBottom: "15px",
  },
  contactSection: {
    marginBottom: "25px",
    padding: "15px",
    backgroundColor: "#f0f8ff",
    borderRadius: "8px",
    boxShadow: "2px 2px 5px rgba(0,0,0,0.1)",
  },
  contactDetails: {
    fontSize: "16px",
    fontWeight: "500",
    color: "#444",
  },
  brand: {
    fontWeight: "bold",
    color: "#ff5733",
  },
  footer: {
    textAlign: "center",
    marginTop: "30px",
    fontSize: "14px",
    color: "#777",
    borderTop: "2px solid #ddd",
    paddingTop: "10px",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
    fontWeight: "500",
  },
};

