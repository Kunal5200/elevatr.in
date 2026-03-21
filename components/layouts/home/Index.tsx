import React from "react";
import HeroSection from "./HeroSection";
import { Box, Container, Grid } from "@mui/material";
import StartCard from "./components/Start-Card";
import Clients from "./Clients";
import CareerDeserve from "./Career-Deserve";
import CareersUncertain from "./Careers-Uncertain";

const HomeLayout = () => {
  return (
    <Box>
      <HeroSection />
      <Clients />
      <CareerDeserve />
      <CareersUncertain />
    </Box>
  );
};

export default HomeLayout;
