import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Assuming you have some CSS for the footer

export default function Footer() {
  return (
    <footer className="footer-content">
      <div className="footer-column">
        <h3>ShopVista</h3>
        <p>&copy; 2024 ShopVista. All rights reserved.</p>
      </div>
      <div className="footer-column">
        <h3>Links</h3>
        <a href='/about'>About Us</a>
        <a href='/contact'>Contact Us</a>
        <a href='/privacy'>Privacy Policy</a>
        <a href='/terms'>Terms and Conditions</a>
      </div>
      <div className="footer-column">
        <h3>Customer Service</h3>
        <a href='/faq'>FAQ</a>
        <a href='/returns'>Returns</a>
        <a href='/shipping'>Shipping</a>
        <a href='/support'>Support</a>
      </div>
      <div className="footer-column">
        <h3>Follow Us</h3>
        <div className="social-media">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
}
