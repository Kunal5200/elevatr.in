import React, { ReactNode } from "react";
import Header from "../widgets/Header";
import Footer from "../widgets/Footer";

const LayoutWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
