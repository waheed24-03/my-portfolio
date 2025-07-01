import React from "react";

const experiences = [
  {
    title: "HTML Developer (2021)",
    desc: "Developed structured and semantic web pages using HTML5, ensuring accessibility and SEO optimization. Utilized best practices for creating efficient markup and interactive web content.",
    icon: "/images/html.png",
  },
  {
    title: "CSS Developer (2021-2022)",
    desc: "Created responsive, visually appealing layouts using CSS3, including Flexbox and Grid. Implemented custom styles, animations, and transitions for an engaging user experience across devices.",
    icon: "/images/css.png",
  },
  {
    title: "JS Developer (2022–2023)",
    desc: "Leveraged JavaScript for interactive features and dynamic content on web pages. Proficient in DOM manipulation, async programming, and integrating third-party libraries.",
    icon: "/images/js.png",
  },
  {
    title: "React Developer (2023–2024)",
    desc: "Built scalable, reusable UI components with React, utilizing hooks and state management to create dynamic, fast-loading applications. Focused on performance optimization and user-friendly interfaces.",
    icon: "/images/react.png",
  },
  {
    title: "Python Developer (2024)",
    desc: "Developed scripts, automation, and small backend utilities using Python. Focused on clean, efficient coding practices.",
    icon: "/images/python.png",
  },
  {
    title: "Data Science Enthusiast (2025)",
    desc: "Learning and applying machine learning, data wrangling, and visualization using Pandas, NumPy, and Matplotlib.",
    icon: "/images/Data-Science-Course.JPEG",
  },
];


const Experience = () => {
  return (
    <section className="px-6 md:px-12 my-20">
      <h2 className="text-center text-gray-400 mb-2 text-lg">What I have done so far</h2>
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-16 text-yellow-400">Work Experience</h1>

      <div className="relative w-full border-t border-white flex flex-col md:flex-row items-start md:items-stretch justify-between gap-12 md:gap-0">
        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-col items-center w-full md:w-[15%] relative">
            <div className="absolute top-[-22px]">
  <img
    src={exp.icon}
    alt={exp.title}
    className="w-10 h-10 bg-[#0a0a1e] border-2 border-white rounded-full p-1"
  />
  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-[2px] h-5 bg-white" />
</div>

            <div className="mt-10 text-center">
              <h3 className="text-white font-semibold">{exp.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
