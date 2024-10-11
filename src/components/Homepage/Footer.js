import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Section 1: About Us */}
        <div className="footer-section">
          <h2>About Explora</h2>
          <p>
            Explora is your ultimate guide to adventure and discovery. We curate the best destinations and experiences to satisfy your wanderlust.
          </p>
        </div>
        {/* Section 2: Quick Links */}
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            
            <li><Link to="/aboutus">About Us</Link></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/destinations">Destinations</a></li>
          
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Section 3: Contact Info */}
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Email: Explora@gmail.com</p>
          <p>Phone: +91 9876543210</p>
          <p>Location: 72 Maldives, Parathe wali gaali</p>
        </div>

        {/* Section 4: Social Media */}
        <div className="footer-section">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://facebook.com"><FaFacebookF /></a>
            <a href="https://instagram.com"><FaInstagram /></a>
            <a href="https://twitter.com"><FaTwitter /></a>
            <a href="https://www.youtube.com/@devgaming72"><FaYoutube /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Explora. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

