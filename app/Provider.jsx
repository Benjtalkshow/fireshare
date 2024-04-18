import React from "react";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const Provider = ({ children }) => {
  return (
    <div className="bg-gray-100">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Provider;
