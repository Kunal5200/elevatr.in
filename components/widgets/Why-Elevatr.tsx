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
        mt: 20,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <Grid container>
          <Grid size={4}>
            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontSize: 36,
                fontWeight: 700,
                lineHeight: "52px",
              }}
            >
              Why Elevatr
            </Typography>
            <Typography
              sx={{
                color: COLORS.GRAY,
                fontSize: 24,
                fontWeight: 600,
                lineHeight: "36px",
                fontFamily: surgena.style.fontFamily,
              }}
            >
              Most platforms help you apply. We help you progress.
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ mt: 3 }}>
          {WHY_ELEVATR_CARD_DATA.map((val, i) => (
            <Grid size={6}>
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
