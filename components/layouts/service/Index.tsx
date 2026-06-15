import React from "react";
import ServiceHeroSection from "./ServiceHeroSection";
import ProductSlide from "./ProductSlide";
import CareerSystem from "./CareerSystem";
import HowWorks from "./How-Works";

import Steps from "./Steps";
import Skills from "./Skills";
import WhyElevatr from "../../widgets/Why-Elevatr";
import Careers from "./Careers";

const ServiceLayout = () => {
  return (
    <div>
      <ServiceHeroSection />
      <ProductSlide />
      <CareerSystem />
      <HowWorks />
      <Steps />
      <Skills />
      <WhyElevatr />
      <Careers />
    </div>
  );
};

export default ServiceLayout;
