import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="p-10 bg-neutral text-neutral-content">
      <div className="footer container mx-auto px-4">
        <nav>
          <header className="footer-title text-2xl text-secondary">
            Dw-shop
          </header>
          <p className="text-lg text-center font-bold">2013 - {year}</p>
        </nav>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};
export default Footer;
