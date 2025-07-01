import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header"; 

const blogs = [
  {
    id: "react-portfolio",
    title: "Building My React Portfolio",
    excerpt: "A deep dive into creating a clean personal portfolio using React and Tailwind.",
    image: "/images/reactportfolio.JPEG",
  },
  {
    id: "ds-journey",
    title: "My Journey into Data Science",
    excerpt: "How I started with machine learning, and the resources that helped me.",
    image: "/images/Data-Science-Course.JPEG",
  },
];

const Blogs = () => {
  return (
    <div className="min-h-screen bg-[#000021] text-white">
      <Header />
      <div className="px-6 py-10">
        <h1 className="text-3xl font-bold text-center text-yellow-400 mb-8">My Blogs</h1>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-lime-950 rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-36 w-full object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-yellow-300">{blog.title}</h2>
                <p className="text-gray-300 text-sm mt-1">{blog.excerpt}</p>
                <Link
                  to={`/blogs/${blog.id}`}
                  className="inline-block mt-3 text-yellow-400 hover:text-yellow-300 underline text-sm"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
