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
    <Box
      sx={{
        height: { lg: "100vh", xs: "auto" },
        display: "flex",
        alignItems: "center",
        py: { xs: 4 },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontSize: { lg: "130px", xs: "40px" },
            fontFamily: poppins.style.fontFamily,
            lineHeight: { lg: "100px", xs: "50px" },
            letterSpacing: { lg: "-7.68px", xs: "-1px" },
            fontWeight: 500,
          }}
        >
          Not a resume tool. A career system.
        </Typography>
        <Grid container sx={{ mt: 4 }}>
          <Grid size={{ lg: 3.5, xs: 12 }}>
            <Typography
              sx={{
                fontFamily: surgena.style.fontFamily,
                fontSize: { lg: 24, xs: 18 },
                color: "#4D4D4D",
                fontWeight: 600,
                lineHeight: "36px",
              }}
            >
              Most tools solve one step. Elevatr connects all of them.
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          sx={{ position: "relative", mt: { xs: 5, lg: 10 } }}
          spacing={3}
        >
          <Box
            sx={{
              position: "absolute",
              top: -40,
              left: 150,
              display: { xs: "none", lg: "block" },
            }}
          >
            <Image src={topRightArrow} alt="topRightArrow" />
          </Box>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <DashedBorder title="Build your identity" />
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <DashedBorder title="To understanding your position" />
          </Grid>
          <Box
            sx={{
              position: "absolute",
              bottom: -40,
              right: 200,
              display: { xs: "none", lg: "block" },
            }}
          >
            <Image src={bottomLeftArrow} alt="topRightArrow" />
          </Box>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <DashedBorder title="To understanding your position" />
          </Grid>
          <Box
            sx={{
              position: "absolute",
              bottom: -160,
              right: 30,
              display: { xs: "none", lg: "block" },
            }}
          >
            <Image src={downRight} alt="topRightArrow" />
          </Box>
        </Grid>

        <Grid
          container
          sx={{ mt: { xs: 5, lg: 15 }, position: "relative" }}
          spacing={3}
        >
          <Grid size={{ xs: 12, lg: 5 }}>
            <DashedBorder title="Everything works together." />
          </Grid>
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 310,
              display: { xs: "none", lg: "block" },
            }}
          >
            <Image src={arrowRight} alt="topRightArrow" />
          </Box>
          <Grid size={{ xs: 12, lg: 5 }}>
            <DashedBorder title="To growing long-term." />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CareerSystem;
