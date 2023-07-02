import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="maincol bg-neutral-300">
      <div className="footer-content flex justify-between items-center">
        <p>&copy; {currentYear} Darel Bvcr. All rights reserved.</p>
        <nav className="flex gap-5 py-5">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
