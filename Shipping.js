import React from "react";
import { FaShippingFast, FaUndo, FaMoneyBillWave, FaQuestionCircle } from "react-icons/fa";

export default function ReturnRefunds() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Return & Refund Policy</h1>
      <p style={styles.subText}>
        If you're not satisfied with your purchase, we're here to help!
      </p>

      {/* Return Process Section */}
      <div style={styles.section}>
        <FaUndo style={styles.icon} />
        <h2 style={styles.sectionHeading}>Return Process</h2>
        <p>Returns are accepted within <strong>7 days</strong> of delivery.</p>
        <ul style={styles.list}>
          <li>Item must be unused and in original packaging.</li>
          <li>Include the receipt or proof of purchase.</li>
          <li>Request a return through your order history.</li>
          <li>Our team will arrange a pickup for eligible items.</li>
        </ul>
      </div>

      {/* Refund Process Section */}
      <div style={styles.section}>
        <FaMoneyBillWave style={styles.icon} />
        <h2 style={styles.sectionHeading}>Refund Policy</h2>
        <p>Once we receive your return, we will:</p>
        <ul style={styles.list}>
          <li>Inspect the item and process the refund.</li>
          <li>Refund will be credited to the original payment method.</li>
          <li>Processing time: <strong>5-7 business days</strong>.</li>
        </ul>
      </div>

      {/* Shipping & Cancellation Section */}
      <div style={styles.section}>
        <FaShippingFast style={styles.icon} />
        <h2 style={styles.sectionHeading}>Shipping & Cancellations</h2>
        <ul style={styles.list}>
          <li>Orders can be canceled before shipping.</li>
          <li>Once shipped, cancellation requests cannot be processed.</li>
          <li>Shipping fees are non-refundable (if applicable).</li>
        </ul>
      </div>

      {/* Frequently Asked Questions */}
      <div style={styles.section}>
        <FaQuestionCircle style={styles.icon} />
        <h2 style={styles.sectionHeading}>FAQs</h2>
        <p><strong>Q: How can I track my return?</strong></p>
        <p>A: You can check your return status in the "My Orders" section.</p>

        <p><strong>Q: Can I exchange an item instead?</strong></p>
        <p>A: Yes, exchanges are available for size issues within 7 days.</p>
      </div>

      {/* Contact Support */}
      <div style={styles.contactSection}>
        <h3>Need Help? Contact Our Support</h3>
        <p>Email: support@ecommerce.com | Phone: +91 98765 43210</p>
      </div>
    </div>
  );
}

// Styles
const styles = {
  container: {
    maxWidth: "800px",
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
  section: {
    textAlign: "left",
    padding: "20px",
    marginTop: "20px",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
  },
  sectionHeading: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#444",
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
  },
  icon: {
    fontSize: "24px",
    color: "#ff5733",
    marginRight: "10px",
  },
  list: {
    textAlign: "left",
    paddingLeft: "20px",
    fontSize: "16px",
    lineHeight: "1.8",
  },
  contactSection: {
    marginTop: "30px",
    padding: "15px",
    backgroundColor: "#fdecea",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333",
  },
};
