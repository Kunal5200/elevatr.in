import React from "react";
import ServiceHeroSection from "./ServiceHeroSection";
import ProductSlide from "./ProductSlide";
import CareerSystem from "./CareerSystem";
import HowWorks from "./How-Works";

import Steps from "./Steps";

const ServiceLayout = () => {
  return (
    <div>
      <ServiceHeroSection />
      <ProductSlide />
      <CareerSystem />
      <HowWorks />
      <Steps />
    </div>
  );
};

export default ServiceLayout;
