import React from "react";

const educationList = [
  {
    title: "High School",
    institution: "ST. FRANCIS DE SALES",
    year: "2019",
    img: "/images/education1.png",
  },
  {
    title: "Bachelor of Computer Science Engineering",
    institution: "MJCET",
    year: "2025",
    img: "/images/education2.png",
  },
];

const Education = () => {
  return (
    <section className="my-32 px-6 md:px-12 educationSection">
      <h2 className="text-center text-gray-400 mb-2 text-lg">Where I’ve Studied</h2>
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-14 text-yellow-400">
        Education
      </h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-[80vw] mx-auto">
        {educationList.map((edu, index) => (
          <div
            key={index}
            className="relative overflow-hidden p-8 min-h-[260px] rounded-xl border-2 border-yellow-500 bg-[#0a0a23] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0px_8px_15px_rgba(255,215,0,0.6)] group"
          >
            {/* Content hidden on hover */}
            <div className="z-10 relative flex flex-col items-center justify-center h-full text-center transition-opacity duration-500 group-hover:opacity-0">
              <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-2">{edu.title}</h3>
              <p className="text-lg md:text-xl font-semibold text-white mb-1">{edu.institution}</p>
              <p className="text-sm text-gray-400">Graduation Year: {edu.year}</p>
            </div>

            {/* Image shown on hover */}
            <img
              src={edu.img}
              alt={edu.title}
              className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 rounded-[10px] z-0 group-hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
