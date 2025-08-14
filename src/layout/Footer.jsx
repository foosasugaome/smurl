import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <p>&copy; {currentYear} SmURL. All rights reserved.</p>
      <a
        href="https://github.com/your-repo" // Replace with the actual repo URL
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        <FaGithub className="github-icon" />
        View on GitHub
      </a>
    </footer>
  );
};

export default Footer;
