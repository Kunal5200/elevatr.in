import FilledButton from "@/components/widgets/FilledButton";
import { COLORS } from "@/utils/enum";
import { poppins, surgena } from "@/utils/fonts";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

const SmallTrustLine = () => {
  return (
    <Box
      sx={{
        minHeight: { lg: "80vh", xs: "auto" },
        py: { xs: 10 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontSize: { lg: 128, xs: 40 },
            fontFamily: poppins.style.fontFamily,
            fontWeight: 275,
            lineHeight: { lg: "52px", xs: "30px" },
            letterSpacing: { lg: "-6px", xs: "-1px" },
          }}
        >
          Small{" "}
          <Typography
            component={"span"}
            sx={{
              fontSize: { lg: 128, xs: 40 },
              fontFamily: poppins.style.fontFamily,
              fontWeight: 700,
              lineHeight: { lg: "52px", xs: "30px" },
              letterSpacing: { lg: "-6px", xs: "-1px" },
            }}
          >
            trust line
          </Typography>{" "}
        </Typography>

        <Grid container sx={{ mt: { lg: 7, xs: 3 } }}>
          <Grid size={{ lg: 8, xs: 12 }}>
            <Typography
              sx={{
                fontFamily: surgena.style.fontFamily,
                color: COLORS.GRAY,
                fontSize: { lg: 26, xs: 20 },
                fontWeight: 500,
                lineHeight: "30px",
              }}
            >
              Built for students, professionals, and career switchers who want
              clarity, not guesswork.
            </Typography>
          </Grid>
          <Grid size={{ lg: 4, xs: 12 }} sx={{ textAlign: "right" }}>
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
