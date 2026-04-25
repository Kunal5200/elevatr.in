import React from "react";
import ServiceHeroSection from "./ServiceHeroSection";
import ProductSlide from "./ProductSlide";
import CareerSystem from "./CareerSystem";
import HowWorks from "./How-Works";

import Steps from "./Steps";
import Skills from "./Skills";

const ServiceLayout = () => {
  return (
    <div>
      <ServiceHeroSection />
      <ProductSlide />
      <CareerSystem />
      <HowWorks />
      <Steps />
      <Skills />
    </div>
  );
};

export default ServiceLayout;
