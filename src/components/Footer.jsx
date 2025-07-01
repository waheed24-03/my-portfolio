import React from "react";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/syed-waheed-298b782a7",
    icon: "/images/linkedln.png",
  },
  {
    name: "GitHub",
    href: "https://github.com/waheed24-03",
    icon: "/images/github.png",
  },
  {
    name: "Gmail",
    href: "mailto:syedabdulwaheed0324@gmail.com",
    icon: "/images/gmail.png",
  },
  {
    name: "Twitter",
    href: "https://x.com/SyedWaheed24",
    icon: "/images/X.png",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#000010] to-[#0a0a23] py-14 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-yellow-400">Let’s Connect</h2>
        <p className="text-gray-400 mb-10 max-w-md mx-auto">
          Feel free to reach out on any platform below — I’m always up for discussing tech, ideas, and opportunities.
        </p>

        <div className="flex justify-center gap-8 flex-wrap">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-blue-950 rounded-full border-2 border-white transition-transform duration-300 group-hover:scale-110 shadow-md hover:shadow-yellow-400/30">
                <img src={link.icon} alt={link.name} className="w-7 h-7" />
              </div>
              <p className="mt-2 text-sm text-white group-hover:text-yellow-400">{link.name}</p>
            </a>
          ))}
        </div>

        <hr className="my-8 border-gray-600 w-[70%] mx-auto" />

        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Syed Abdul Waheed </p>
      </div>
    </footer>
  );
};

export default Footer;
