"use client";
import { COLORS } from "@/utils/enum";
import { poppins, surgena } from "@/utils/fonts";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import journey from "@/images/banner/platform-journey.png";
import Image from "next/image";
const OnePlatform = () => {
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <Box
      sx={{
        mt: { lg: 10, xs: 4 },
        height: { lg: "100vh", xs: "auto" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <Grid container>
          <Grid size={{ lg: 5, xs: 12 }}>
            <Box>
              <Image src={journey} alt="" />
            </Box>
          </Grid>
          <Grid size={{ lg: 7, xs: 12 }}>
            <Typography
              sx={{
                fontFamily: surgena.style.fontFamily,
                fontSize: { lg: 26, xs: 18 },
                color: COLORS.GRAY,
                fontWeight: 500,
                lineHeight: "36px",
                textAlign: "right",
              }}
            >
              No switching tabs, No starting over.
            </Typography>
            <Typography
              sx={{
                color: COLORS.BLACK,
                fontWeight: 275,
                fontSize: { lg: 110, xs: 40 },
                fontFamily: poppins.style.fontFamily,
                lineHeight: { lg: "108px", xs: "50px" },
                letterSpacing: { lg: "-7.68px", xs: "-1px" },
              }}
            >
              One platform,{" "}
              <Typography
                component={"span"}
                sx={{
                  color: COLORS.BLACK,
                  fontWeight: 700,
                  fontSize: { lg: 128, xs: 40 },
                  fontFamily: poppins.style.fontFamily,
                  lineHeight: { lg: "108px", xs: "50px" },
                  letterSpacing: { lg: "-7.68px", xs: "-1px" },
                }}
              >
                The entire journey.
              </Typography>{" "}
            </Typography>
            <Typography
              sx={{
                fontFamily: surgena.style.fontFamily,
                fontWeight: 500,
                fontSize: { lg: 20, xs: 18 },
                lineHeight: { lg: "36px", xs: "30px" },
                textAlign: "left",
                color: COLORS.GRAY,
                mt: { lg: 8, xs: 3 },
              }}
            >
              Elevatr connects every stage of career growth into a single
              system.
            </Typography>
            <Typography
              sx={{
                color: COLORS.GRAY,
                fontFamily: surgena.style.fontFamily,
                fontWeight: 600,
                fontSize: { lg: 24, xs: 12 },
                lineHeight: { lg: "36px", xs: "25px" },
                mt: { lg: 5, xs: 3 },
              }}
            >
              Resume → Skills → Readiness → Opportunities → Growth
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OnePlatform;
