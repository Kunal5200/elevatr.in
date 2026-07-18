import { COLORS } from "@/utils/enum";
import { poppins, surgena } from "@/utils/fonts";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import journey from "@/images/banner/platform-journey.png";
import Image from "next/image";
const OnePlatform = () => {
  return (
    <Box
      sx={{
        mt: 10,
        height: "100vh",
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
                fontSize: 26,
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
                fontSize: { lg: 110, xs: 60 },
                fontFamily: poppins.style.fontFamily,
                lineHeight: { lg: "108px", xs: "60px" },
                letterSpacing: "-7.68px",
              }}
            >
              One platform,{" "}
              <Typography
                component={"span"}
                sx={{
                  color: COLORS.BLACK,
                  fontWeight: 700,
                  fontSize: { lg: 128, xs: 60 },
                  fontFamily: poppins.style.fontFamily,
                  lineHeight: { lg: "108px", xs: "60px" },
                  letterSpacing: "-7.68px",
                }}
              >
                The entire journey.
              </Typography>{" "}
            </Typography>
            <Typography
              sx={{
                fontFamily: surgena.style.fontFamily,
                fontWeight: 500,
                fontSize: 20,
                lineHeight: "36px",
                textAlign: "left",
                color: COLORS.GRAY,
                mt: 8,
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
                fontSize: 24,
                lineHeight: "36px",
                mt: 5,
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
