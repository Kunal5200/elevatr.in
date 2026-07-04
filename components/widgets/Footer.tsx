import { Box, Container, Stack } from "@mui/material";
import React from "react";
import FooterSocial from "./footer/FooterSocial";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#1A1A1A", height: "100vh", py: 5 }}>
      <Container maxWidth="lg">
        <FooterSocial />
      </Container>
    </Box>
  );
};

export default Footer;
