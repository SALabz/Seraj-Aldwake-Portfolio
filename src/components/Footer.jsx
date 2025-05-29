import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      {/* <a
        href="https://www.instagram.com/huzaifahmedz/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={24} />
      </a>
      <a href="https://twitter.comhttps://x.com/HuzaifDev" target="_blank" rel="noopener noreferrer">
        <FaXTwitter size={24} />
      </a> */}
      <a
        href="https://www.linkedin.com/in/seraje-aldwake-4b547623b"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={45} />
      </a>
    </footer>
  );
};

export default Footer;