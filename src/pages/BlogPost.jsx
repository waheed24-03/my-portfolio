import React from "react";
import { useParams } from "react-router-dom";
import ReactPortfolio from "./ReactPortfolio"; 
import DataScienceJourney from "./DataScienceJourney"; 

const BlogPost = () => {
  const { id } = useParams();

  switch (id) {
    case "react-portfolio":
      return <ReactPortfolio />;
    case "ds-journey":
      return <DataScienceJourney />;
    default:
      return (
        <div className="min-h-screen bg-[#000021] text-white flex items-center justify-center text-xl">
          No blog found.
        </div>
      );
  }
};

export default BlogPost;
