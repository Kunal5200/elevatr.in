import { COLORS } from "@/utils/enum";
import { poppins, surgena } from "@/utils/fonts";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import WhyElevatrCard from "./Why-Elevatr-Card";
import { WHY_ELEVATR_CARD_DATA } from "@/utils/constant";

const WhyElevatr = () => {
  return (
    <Box
      sx={{
        mt: { lg: 20, xs: 10 },
        height: { lg: "100vh", xs: "auto" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pb: { xs: 5 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container>
          <Grid size={{ lg: 4, xs: 12 }}>
            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontSize: { lg: 36, xs: 24 },
                fontWeight: 700,
                lineHeight: "52px",
              }}
            >
              Why Elevatr
            </Typography>
            <Typography
              sx={{
                color: COLORS.GRAY,
                fontSize: { lg: 24, xs: 18 },
                fontWeight: 600,
                lineHeight: { lg: "36px", xs: "25px" },
                fontFamily: surgena.style.fontFamily,
              }}
            >
              Most platforms help you apply. We help you progress.
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ mt: 3 }}>
          {WHY_ELEVATR_CARD_DATA.map((val, i) => (
            <Grid size={{ lg: 6, xs: 12 }}>
              <WhyElevatrCard
                isEven={val.isEven}
                title={val.title}
                data={val.data}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyElevatr;
