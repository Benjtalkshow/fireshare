import React from "react";
import Header from "./_components/Header";

const Provider = ({ children }) => {
  return (
    <div className="bg-gray-100">
      <Header />
      {children}
    </div>
  );
};

export default Provider;
