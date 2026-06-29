import { poppins, surgena } from "@/utils/fonts";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import logo from "@/images/logo/logo.png";
import Image from "next/image";
import abstract from "@/images/banner/abstract.png";
import StartCard from "./components/Start-Card";
const HeroSection2 = () => {
  return (
    <Box>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: 10,
        }}
      >
        <Container maxWidth="lg">
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
          <Typography
            sx={{
              fontSize: 128,
              fontFamily: poppins.style.fontFamily,
              lineHeight: "128px",
              letterSpacing: "-7.68px",
              fontWeight: 275,
            }}
          >
            The
            <Typography
              component={"span"}
              sx={{
                fontSize: 128,
                fontFamily: poppins.style.fontFamily,
                lineHeight: "128px",
                letterSpacing: "-7.68px",
                fontWeight: 500,
              }}
            >
              {" "}
              operating system{" "}
            </Typography>
            for
            <Typography
              component={"span"}
              sx={{
                fontSize: 128,
                fontFamily: poppins.style.fontFamily,
                lineHeight: "128px",
                letterSpacing: "-7.68px",
                fontWeight: 700,
              }}
            >
              {" "}
              modern careers.
            </Typography>
          </Typography>
          <Typography
            sx={{
              fontSize: 28,
              lineHeight: "28px",
              letterSpacing: "-0.84px",
              fontFamily: poppins.style.fontFamily,
              fontWeight: 500,
            }}
          >
            (Built for what’s next)
          </Typography>
          <Box sx={{ textAlign: "center" }}>
            <Image src={abstract} alt="" />
          </Box>
        </Container>
      </Box>
      <Container maxWidth="lg">
        <Grid container>
          <Grid size={8} margin="auto">
            <StartCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection2;
