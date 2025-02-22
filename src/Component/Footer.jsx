import React from "react";
import "../styles/footer.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About Section */}
        <div className="footer-section about">
          <h3>About QuickMedi</h3>
          <p>
            QuickMedi is a healthcare platform offering online doctor consultations, 
            appointment bookings, and medical services. We aim to make healthcare 
            accessible and reliable for everyone.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Doctors</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div className="footer-section contact">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
          <div className="contact-info">
            <p><strong>Contact Us</strong></p>
            <p>Email: support@quickmedi.com</p>
            <p>Phone: +94 770 000 123</p>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2025 QuickMedi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
