import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-neutral-100 text-gray-600 font-light py-5">
      <div className="footer-content flex justify-between items-center maincol">
        <p>&copy; {currentYear} Darel Bvcr. All rights reserved.</p>
        <div className="flex space-x-4 items-center">
          <a href="https://www.facebook.com/yourFBprofile" target="_blank" rel="noopener noreferrer">
            <FaFacebookF size={24} />
          </a>
          <a href="https://www.linkedin.com/in/yourLinkedInProfile" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn size={24} />
          </a>
          <p className="text-sm">Call us: +385914200355</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
