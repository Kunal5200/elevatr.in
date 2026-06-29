import { COLORS } from "@/utils/enum";
import { poppins, surgena } from "@/utils/fonts";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

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
          <Grid size={3}></Grid>
          <Grid size={9}>
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
                fontSize: 128,
                fontFamily: poppins.style.fontFamily,
                lineHeight: "108px",
                letterSpacing: "-7.68px",
              }}
            >
              One platform,
              <Typography
                component={"span"}
                sx={{
                  color: COLORS.BLACK,
                  fontWeight: 700,
                  fontSize: 128,
                  fontFamily: poppins.style.fontFamily,
                  lineHeight: "108px",
                  letterSpacing: "-7.68px",
                }}
              >
                The entire journey.
              </Typography>{" "}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OnePlatform;
