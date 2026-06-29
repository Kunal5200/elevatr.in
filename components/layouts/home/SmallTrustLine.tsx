import FilledButton from "@/components/widgets/FilledButton";
import { COLORS } from "@/utils/enum";
import { poppins, surgena } from "@/utils/fonts";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

const SmallTrustLine = () => {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontSize: 128,
            fontFamily: poppins.style.fontFamily,
            fontWeight: 275,
            lineHeight: "52px",
            letterSpacing: "-6px",
          }}
        >
          Small{" "}
          <Typography
            component={"span"}
            sx={{
              fontSize: 128,
              fontFamily: poppins.style.fontFamily,
              fontWeight: 700,
              lineHeight: "52px",
              letterSpacing: "-6px",
            }}
          >
            trust line
          </Typography>{" "}
        </Typography>

        <Grid container sx={{ mt: 7 }}>
          <Grid size={8}>
            <Typography
              sx={{
                fontFamily: surgena.style.fontFamily,
                color: COLORS.GRAY,
                fontSize: 26,
                fontWeight: 500,
                lineHeight: "30px",
              }}
            >
              Built for students, professionals, and career switchers who want
              clarity, not guesswork.
            </Typography>
          </Grid>
          <Grid size={4} sx={{ textAlign: "right" }}>
            <FilledButton
              sx={{
                color: COLORS.WHITE,
                fontFamily: poppins.style.fontFamily,
                fontSize: 16,
                fontWeight: 600,
                lineHeight: "60px",
                borderRadius: "88px",
                padding: "0 32.41px 0 32.59px",
              }}
            >
              Explore
            </FilledButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SmallTrustLine;
