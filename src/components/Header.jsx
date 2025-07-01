import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#12123e] shadow-md">
      <nav className="flex justify-between items-center px-6 md:px-20 h-20">
        <div className="text-xl font-light font-poppins">Waheed's Portfolio</div>
        <ul className="flex gap-6 text-lg">
          <li><a href="/" className="hover:text-yellow-400">Home</a></li>
          <li><a href="/#about" className="hover:text-yellow-400">About</a></li>
          <li><a href="/#education" className="hover:text-yellow-400">Education</a></li>
          <li><a href="/#projects" className="hover:text-yellow-400">Projects</a></li>
          <li><a href="/#contact" className="hover:text-yellow-400">Contact Me</a></li>
          <li><Link to="/blogs" className="hover:text-yellow-400">Blogs</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
