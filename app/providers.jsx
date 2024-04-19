"use client"
import Header from "./_components/Header";

const Providers = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Providers;