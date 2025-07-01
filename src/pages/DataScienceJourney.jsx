import React from "react";
import Header from "../components/Header";

import { Link } from "react-router-dom";

<Link to="/blogs" className="text-yellow-400 hover:underline block mt-4">
  ← Back to Blogs
</Link>

const DataSciencePost = () => {
  return (
    <div className="min-h-screen bg-[#000021] text-white">
      <Header />
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-yellow-400 mb-6">
          My Journey into Data Science
        </h1>
        <p className="text-gray-300 mb-4">
          I’ve always been curious about how data is used to drive decisions. After learning the basics of Python and working with some datasets, I found my interest shifting from frontend UI to backend logic and analysis.
        </p>
        <p className="text-gray-300 mb-4">
          I started with Pandas and NumPy for data manipulation, then moved into Matplotlib and Seaborn for visualizing patterns. With the rise of AI and ML, I’m currently exploring algorithms and how to use them to build intelligent systems.
        </p>
        <p className="text-gray-300 mb-4">
          I enrolled in a course that covers everything from SQL to Machine Learning and Generative AI. It includes hands-on projects, which I’m integrating into my portfolio to reflect this new direction in my career.
        </p>
        <p className="text-gray-300">
          Data Science isn’t just a career path — it’s a toolkit for solving real-world problems. I’m excited to keep exploring and sharing that journey.
        </p>
      </div>
    </div>
  );
};

export default DataSciencePost;
