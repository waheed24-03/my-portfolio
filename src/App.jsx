import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Typed from "typed.js";
import "./styles/profileGlow.css";

import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
// import Blogs from "./pages/Blogs.jsx";
import Blogs from "./pages/Blogs.jsx"; // 
import BlogPost from "./pages/BlogPost.jsx";

function HomePage() {
  useEffect(() => {
    const typed = new Typed("#element", {
      strings: [
        "Web Developer",
        "Tech Explorer 🚀",
        "Software Enthusiast",
        "ML Engineer Enthusiast",
        "Data Science Enthusiast",
      ],
      typeSpeed: 45,
      backSpeed: 25,
      backDelay: 1500,
      loop: true,
      showCursor: false,
    });

    return () => typed.destroy();
  }, []);

  return (
    <main className="bg-[#000021] text-white font-poppins min-h-screen scroll-smooth snap-y snap-mandatory overflow-y-scroll h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-[#12123e] shadow-md">
        <nav className="flex justify-between items-center px-6 md:px-20 h-20">
          <div className="text-xl font-light font-poppins">Waheed's Portfolio</div>
          <ul className="flex gap-8 text-lg">
            <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#about" className="hover:text-yellow-400">About</a></li>
            <li><a href="#education" className="hover:text-yellow-400">Education</a></li>
            <li><a href="#projects" className="hover:text-yellow-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
            <li><Link to="/blogs" className="hover:text-yellow-400">Blogs</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col md:flex-row justify-center items-center px-6 md:px-12 gap-16 snap-start min-h-[85vh]"
      >
        {/* Left Text */}
        <div className="md:w-1/2 text-[2.2rem] leading-relaxed">
          <p>Hi, My name is</p>
          <p className="text-yellow-400 font-normal">Waheed</p>
          <p>and I am a passionate</p>
          <span
            id="element"
            className="text-yellow-400 transition-all duration-500 ease-in-out"
          ></span>

          <div className="mt-10 flex flex-wrap gap-4 text-lg">
            <a
              href="/MYRESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white px-6 py-3 rounded-md hover:bg-blue-950 transition-all"
            >
              View Resume
            </a>
            <a
              href="https://github.com/waheed24-03"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white px-6 py-3 rounded-md hover:bg-blue-950 transition-all"
            >
              Visit GitHub
            </a>
            <a
              href="https://linkedin.com/in/syed-waheed-298b782a7"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white px-6 py-3 rounded-md hover:bg-blue-950 transition-all"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-72 h-72 relative image-container">
          <img src="/images/BG.png" alt="BG" className="bg-img" />
          <img src="/images/myimage.JPEG" alt="Waheed" className="my-img" />
        </div>
      </section>

      <hr className="mx-auto w-[85%] border-[#9c97f1]" />

      {/* About Section */}
      <section id="about" className="snap-start h-screen overflow-y-auto px-6 md:px-12 py-10">
        <Experience />
      </section>

      <hr className="mx-auto w-[85%] border-[#9c97f1]" />

      {/* Education Section */}
      <section id="education" className="snap-start h-screen overflow-y-auto px-6 md:px-12 py-10">
        <Education />
      </section>

      <hr className="mx-auto w-[85%] border-[#9c97f1]" />

      {/* Projects Section */}
      <section id="projects" className="snap-start h-screen overflow-y-auto px-6 md:px-12 py-10">
        <Projects />
      </section>

      <hr className="mx-auto w-[85%] border-[#9c97f1]" />

      {/* Footer Section */}
      <section id="contact" className="px-6 md:px-12 py-10 snap-start">
        <Footer />
      </section>
    </main>
  );
}


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:id" element={<BlogPost />} />
    </Routes>
  );
}
