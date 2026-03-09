import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import banner from "@/images/banner/banner.png";
import { poppins, surgena } from "@/utils/fonts";
import logo from "@/images/logo/logo.png";
import Image from "next/image";
import StartCard from "./components/Start-Card";
const HeroSection = () => {
  return (
    <Box>
      <Box
        sx={{
          //   backgroundImage: `url(${banner.src})`,
          minHeight: "100vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ py: 7 }}>
            <Typography
              sx={{
                textAlign: "center",
                fontFamily: surgena.style.fontFamily,
                fontSize: 46,
                fontWeight: 600,
              }}
            >
              Ahmm! Finally you’re in good hands |
            </Typography>
            <Box sx={{ textAlign: "center", my: 4 }}>
              <Image
                src={logo}
                alt="logo"
                style={{ width: 200, height: "auto" }}
              />
            </Box>
            <Box sx={{ margin: "auto", textAlign: "left" }}>
              <Typography
                sx={{ fontSize: 100, fontFamily: poppins.style.fontFamily }}
              >
                Career Infrastructure, Just got Reimagined.
              </Typography>
            </Box>
            <Typography sx={{ fontSize: 28 }}>
              (Built for what’s next)
            </Typography>
          </Box>
        </Container>
        <Container maxWidth="lg">
          <Grid container>
            <Grid size={6} margin="auto">
              <StartCard />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HeroSection;
