import React from "react";
import "../_assets/page_loader.css";

const PageLoader = ({ text, label }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center">
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
      <h2 className="text-center text-black text-lg font-semibold">
        {text} Loading...
      </h2>
      <p className="text-center text-white">{label}</p>
    </div>
  );
};

export default PageLoader;
