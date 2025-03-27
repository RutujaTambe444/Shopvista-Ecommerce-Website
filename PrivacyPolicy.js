import React from "react";

export default function PrivacyPolicy() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Privacy Policy</h1>
      <p style={styles.date}>Last Updated: March 2025</p>

      <div style={styles.content}>
        <section style={styles.section}>
          <h2 style={styles.subHeading}>1. Introduction</h2>
          <p>
            Welcome to <span style={styles.brand}>YourShop</span>. Your privacy is important to us. This Privacy Policy outlines how we collect, use, and safeguard your personal information.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subHeading}>2. Information We Collect</h2>
          <ul style={styles.list}>
            <li>Personal details like name, email, phone number, and address.</li>
            <li>Payment information (processed securely via trusted payment gateways).</li>
            <li>Browsing and purchase history to improve our services.</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subHeading}>3. How We Use Your Information</h2>
          <p>We use your data to:</p>
          <ul style={styles.list}>
            <li>Process and deliver your orders.</li>
            <li>Send updates, promotions, and personalized offers.</li>
            <li>Improve website functionality and security.</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subHeading}>4. Data Security</h2>
          <p>
            We implement strict security measures to protect your data from unauthorized access, alteration, or disclosure. All transactions are encrypted using industry-leading security protocols.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subHeading}>5. Third-Party Services</h2>
          <p>
            We may share data with trusted partners (e.g., payment processors, delivery services) only to fulfill your orders. Your data will **never** be sold to third parties.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subHeading}>6. Cookies & Tracking</h2>
          <p>
            We use cookies to enhance your experience. You can modify your browser settings to decline cookies, but this may affect website functionality.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subHeading}>7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul style={styles.list}>
            <li>Access and review your personal data.</li>
            <li>Request corrections or deletions.</li>
            <li>Opt-out of marketing communications at any time.</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subHeading}>8. Changes to Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised date.
          </p>
        </section>

        <section style={styles.contactSection}>
          <h2 style={styles.subHeading}>9. Contact Us</h2>
          <p>
            If you have any questions, feel free to reach out:
          </p>
          <p style={styles.contactDetails}>
            📧 <span>Email:</span> <a href="mailto:support@yourshop.com" style={styles.link}>support@yourshop.com</a><br />
            📍 <span>Address:</span> Pune, Maharashtra, India
          </p>
        </section>
      </div>

      <p style={styles.footer}>© 2025 YourShop. All rights reserved.</p>
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

