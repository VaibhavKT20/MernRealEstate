import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="footer-section">
          <h3 className="text-xl font-bold mb-4 text-slate-500">Explore</h3>
          <ul>
            <li>
              <Link to="/" className="hover:text-slate-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/search" className="hover:text-slate-300">
                Search Listings
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-slate-300">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="text-xl font-bold mb-4 text-slate-500">Services</h3>
          <ul>
            <li>
              <Link to="/create-listing" className="hover:text-slate-300">
                Create Listing
              </Link>
            </li>
            <li>
              <Link to="/profile" className="hover:text-slate-300">
                Your Profile
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="text-xl font-bold mb-4 text-slate-500">Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
      <div className="container mx-auto mt-8 border-t border-slate-600 pt-4 text-center">
        <p className="text-slate-400">
          &copy; {currentYear} HomeHaven. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
