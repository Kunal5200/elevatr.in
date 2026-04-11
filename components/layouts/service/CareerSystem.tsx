import { poppins, surgena } from "@/utils/fonts";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import DashedBorder from "./components/DashedBorder";
import Image from "next/image";
import topRightArrow from "@/images/icons/home/top-right-arrow.png";
import bottomLeftArrow from "@/images/icons/home/bottom-right-arrow.png";
import downRight from "@/images/icons/home/left-down.png";
import arrowRight from "@/images/icons/home/simple-arrow.png";
const CareerSystem = () => {
  return (
    <Box sx={{ height: "100vh", display: "flex", alignItems: "center" }}>
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontSize: "130px",
            fontFamily: poppins.style.fontFamily,
            lineHeight: "100px",
            letterSpacing: "-7.68px",
            fontWeight: 500,
          }}
        >
          Not a resume tool. A career system.
        </Typography>
        <Grid container sx={{ mt: 4 }}>
          <Grid size={3.5}>
            <Typography
              sx={{
                fontFamily: surgena.style.fontFamily,
                fontSize: 24,
                color: "#4D4D4D",
                fontWeight: 600,
                lineHeight: "36px",
              }}
            >
              Most tools solve one step. Elevatr connects all of them.
            </Typography>
          </Grid>
        </Grid>

        <Grid container sx={{ position: "relative", mt: 10 }} spacing={3}>
          <Box sx={{ position: "absolute", top: -40, left: 150 }}>
            <Image src={topRightArrow} alt="topRightArrow" />
          </Box>
          <Grid size={4}>
            <DashedBorder title="Build your identity" />
          </Grid>
          <Grid size={4}>
            <DashedBorder title="To understanding your position" />
          </Grid>
          <Box sx={{ position: "absolute", bottom: -40, right: 200 }}>
            <Image src={bottomLeftArrow} alt="topRightArrow" />
          </Box>
          <Grid size={4}>
            <DashedBorder title="To understanding your position" />
          </Grid>
          <Box sx={{ position: "absolute", bottom: -160, right: 30 }}>
            <Image src={downRight} alt="topRightArrow" />
          </Box>
        </Grid>

        <Grid container sx={{ mt: 15, position: "relative" }}>
          <Grid size={5}>
            <DashedBorder title="Everything works together." />
          </Grid>
          <Box sx={{ position: "absolute", bottom: 0, left: 310 }}>
            <Image src={arrowRight} alt="topRightArrow" />
          </Box>
          <Grid size={5}>
            <DashedBorder title="To growing long-term." />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CareerSystem;
