import React from "react";
import HeroSection from "./HeroSection";
import { Box, Container, Grid } from "@mui/material";
import StartCard from "./components/Start-Card";
import Clients from "./Clients";
import CareerDeserve from "./Career-Deserve";
import CareersUncertain from "./Careers-Uncertain";
import HeroSection2 from "./HeroSection2";
import SmallTrustLine from "./SmallTrustLine";
import CareerGrowth from "./CareerGrowth";
import OnePlatform from "./OnePlatform";

const HomeLayout = () => {
  return (
    <Box>
      <HeroSection2 />
      <SmallTrustLine />
      <Clients />
      <CareerGrowth />
      <OnePlatform />
      <CareerDeserve />
      <CareersUncertain />
    </Box>
  );
};

export default HomeLayout;
