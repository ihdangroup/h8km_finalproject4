import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="px-6">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
