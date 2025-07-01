import React from "react";

const projects = [
    {
      title: "Coders of Delhi",
      desc: "Cleaned and analyzed social network data to recommend people and pages using Python and Pandas.",
    },
    {
    title: "IPL Player Data Analyst",
        desc: "Analyzed IPL players' performance using Python, Streamlit, and live datasets. Built dashboards for stats, trends, and predictions.",
      },
      
    {
      title: "ML House Price Predictor",
      desc: "Used Scikit-learn to build and train a model for predicting house prices based on location and features.",
    },
    {
      title: "Stock Price Prediction",
      desc: "Predicted stock trends using LSTM on historical data. Achieved >82% test accuracy,Implemented visualizations for moving averages and trend detection..",
    },
    {
      title: "AI Legal Assistant Agent",
      desc: "Built an AI assistant to summarize and answer legal queries from Indian law documents using RAG.",
    },
    {
      title: "Data Cleaning Toolkit",
      desc: "Developed a Python toolkit using Pandas to clean, transform, and preprocess messy datasets.",
    },
  ];
  

const Projects = () => {
  return (
    <section className="my-20 px-6 md:px-12">
      <h2 className="text-center text-gray-400 mb-2 text-lg">My Creations</h2>
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-14 text-yellow-400">Projects</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#12123e] p-6 border-2 border-gray-600 rounded-lg hover:scale-105 hover:border-yellow-400 hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">{project.title}</h3>
            <p className="text-gray-300 text-sm">{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
