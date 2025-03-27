import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaHeadset } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import ChatBot from "./Chatbox";

export default function Support() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Open Chat Handler
  const handleStartChat = () => {
    setIsChatOpen(true);
  };

  // Close Chat Handler
  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Customer Support</h1>
      <p style={styles.subText}>Need help? Contact our support team!</p>

      {/* Contact Options */}
      <div style={styles.contactSection}>
        <div style={styles.contactCard}>
          <FaPhoneAlt style={styles.icon} />
          <h3>Call Us</h3>
          <p>+91 98765 43210</p>
          <p>Mon-Sat: 9AM - 6PM</p>
        </div>

        <div style={styles.contactCard}>
          <FaEnvelope style={styles.icon} />
          <h3>Email Us</h3>
          <p>support@ecommerce.com</p>
          <p>Response within 24 hrs</p>
        </div>

        <div style={styles.contactCard}>
          <FaWhatsapp style={styles.icon} />
          <h3>WhatsApp</h3>
          <p>+91 98765 43210</p>
          <p>Chat with us</p>
        </div>
      </div>

      {/* Help Categories */}
      <h2 style={styles.sectionHeading}>🔹 Help Categories</h2>
      <div style={styles.helpSection}>
        <NavLink to="/returns">
          <button style={styles.helpButton}>Returns & Refunds</button>
        </NavLink>
        <NavLink to="/shipping">
          <button style={styles.helpButton}>Shipping & Delivery</button>
        </NavLink>
        <NavLink to="/orders">
          <button style={styles.helpButton}>Payment & Billing</button>
        </NavLink>
        <NavLink to="/women">
          <button style={styles.helpButton}>Account Settings</button>
        </NavLink>
        <NavLink to="/faq">
          <button style={styles.helpButton}>FAQs</button>
        </NavLink>
      </div>

      {/* Live Chat */}
      <div style={styles.chatSection}>
        <FaHeadset style={styles.chatIcon} />
        <h3>Live Chat Support</h3>
        <p>Chat with our support team in real time.</p>
        <button style={styles.chatButton} onClick={handleStartChat}>
          Start Live Chat
        </button>
      </div>

      {/* ChatBot Component */}
      {isChatOpen && <ChatBot isOpen={isChatOpen} onClose={handleCloseChat} />}
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
  contactSection: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "15px",
    marginBottom: "30px",
  },
  contactCard: {
    backgroundColor: "#f8f9fa",
    padding: "15px",
    borderRadius: "8px",
    width: "220px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    transition: "transform 0.3s ease-in-out",
  },
  icon: {
    fontSize: "24px",
    color: "#ff5733",
    marginBottom: "10px",
  },
  sectionHeading: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#444",
    marginTop: "30px",
    borderBottom: "2px solid #ff5733",
    paddingBottom: "5px",
  },
  helpSection: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "10px",
    marginTop: "15px",
  },
  helpButton: {
    backgroundColor: "#ff5733",
    color: "#fff",
    padding: "10px 15px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "0.3s ease-in-out",
    fontSize: "14px",
  },
  chatSection: {
    marginTop: "30px",
    backgroundColor: "#fdecea",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(255,0,0,0.1)",
  },
  chatIcon: {
    fontSize: "28px",
    color: "#ff5733",
    marginBottom: "10px",
  },
  chatButton: {
    backgroundColor: "#ff5733",
    color: "#fff",
    padding: "8px 15px",
    fontSize: "14px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "0.3s ease-in-out",
  },
};

// Responsive Design using Media Queries
const mediaQueryStyles = `
  @media (max-width: 768px) {
    body {
      padding: 10px;
    }
    .container {
      width: 100%;
      padding: 20px;
    }
    .contactSection {
      flex-direction: column;
      align-items: center;
    }
    .contactCard {
      width: 100%;
      margin-bottom: 15px;
    }
    .helpSection {
      flex-direction: column;
      gap: 8px;
    }
    .helpButton {
      width: 100%;
    }
    .chatSection {
      padding: 15px;
    }
    .chatButton {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    .heading {
      font-size: 24px;
    }
    .subText {
      font-size: 14px;
    }
    .sectionHeading {
      font-size: 18px;
    }
    .chatButton, .helpButton {
      font-size: 12px;
      padding: 8px 12px;
    }
    .contactCard {
      width: 90%;
    }
  }
`;

// Inject Media Queries into Head
/*const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = mediaQueryStyles;
document.head.appendChild(styleSheet);
*/