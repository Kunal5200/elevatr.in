import React from "react";
import HeroSection from "./HeroSection";
import { Box, Container, Grid } from "@mui/material";
import StartCard from "./components/Start-Card";
import Clients from "./Clients";

const HomeLayout = () => {
  return (
    <Box>
      <HeroSection />
      <Clients />
    </Box>
  );
};

export default HomeLayout;
