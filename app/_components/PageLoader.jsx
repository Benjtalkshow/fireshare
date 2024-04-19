"use client"
import React from "react";
import "../_assets/page_loader.css";

const PageLoader = ({ text, label = "Wait a few seconds." }) => {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700  flex flex-col items-center justify-center">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
        <h2 className="text-center text-white text-xl font-semibold">
          {text} Loading...
        </h2>
        <p className="text-center text-white">{label}</p>
      </div>
    </div>
  );
};
export default PageLoader;
