import React from "react";
import HeroSection from "./HeroSection";
import ContactForm from "./ContactForm";
import ContactInformation from "./Contact-Information";

const ContactLayout = () => {
  return (
    <div>
      <HeroSection />
      <ContactForm />
      <ContactInformation />
    </div>
  );
};

export default ContactLayout;
