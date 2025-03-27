import React, { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Sample FAQ Questions & Answers
  const faqs = [
    {
      question: "How do I place an order?",
      answer: "To place an order, browse through our categories, add items to your cart, and proceed to checkout. Follow the instructions to complete your purchase securely.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit/debit cards, UPI, net banking, and popular digital wallets such as Paytm and Google Pay.",
    },
    {
      question: "How long does delivery take?",
      answer: "Delivery times vary depending on your location. Standard delivery takes 3-7 business days, while express delivery is available within 1-3 business days.",
    },
    {
      question: "Can I track my order?",
      answer: "Yes! Once your order is shipped, you'll receive an email with a tracking link. You can also track your order in the 'My Orders' section.",
    },
    {
      question: "What is your return policy?",
      answer: "You can return most items within 7 days of delivery for a full refund. The item must be unused, in its original packaging, and accompanied by a receipt.",
    },
    {
      question: "How do I contact customer support?",
      answer: "You can reach us via email at support@yourshop.com or call our 24/7 helpline at +91 98765 43210.",
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Frequently Asked Questions (FAQs)</h1>
      <p style={styles.subText}>Find answers to the most common queries below.</p>

      <div style={styles.faqContainer}>
        {faqs.map((faq, index) => (
          <div key={index} style={styles.faqItem}>
            <button style={styles.faqButton} onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span style={styles.toggleIcon}>{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && <p style={styles.faqAnswer}>{faq.answer}</p>}
          </div>
        ))}
      </div>

      <p style={styles.contactInfo}>
        Still have questions? <a href="mailto:support@yourshop.com" style={styles.contactLink}>Contact us</a>
      </p>
    </div>
  );
}

// Enhanced Styles with Lighter Colored Questions
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
    fontSize: "32px",
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
  faqContainer: {
    textAlign: "left",
  },
  faqItem: {
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    marginBottom: "10px",
    boxShadow: "2px 2px 5px rgba(0,0,0,0.1)",
  },
  faqButton: {
    width: "100%",
    padding: "15px",
    backgroundColor: "#ffffff",
    color: "rgba(252, 123, 62, 0.8)", // Lighter color for the questions
    fontSize: "18px",
    fontWeight: "bold",
    textAlign: "left",
    border: "1px solid #ddd",
    outline: "none",
    cursor: "pointer",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "background 0.3s",
  },
  faqButtonHover: {
    backgroundColor: "#f0f0f0",
  },
  toggleIcon: {
    fontSize: "20px",
    color: "#ff5733",
  },
  faqAnswer: {
    padding: "15px",
    fontSize: "16px",
    color: "#444",
    backgroundColor: "#fff",
    borderTop: "1px solid #ddd",
    borderRadius: "0 0 8px 8px",
  },
  contactInfo: {
    marginTop: "20px",
    fontSize: "16px",
  },
  contactLink: {
    color: "#007bff",
    textDecoration: "none",
    fontWeight: "500",
  },
};

