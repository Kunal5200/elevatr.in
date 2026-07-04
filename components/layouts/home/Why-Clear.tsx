import WhyElevatrCard from "@/components/widgets/Why-Elevatr-Card";
import { WHY_ELEVATR_CARD_DATA } from "@/utils/constant";
import { COLORS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const WhyClear = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Grid container alignItems={"center"} spacing={2}>
          <Grid size={7}>
            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontSize: 125,
                fontWeight: 275,
                lineHeight: "128px",
                letterSpacing: "-7.68px",
              }}
            >
              Why{" "}
              <Typography
                sx={{
                  fontFamily: poppins.style.fontFamily,
                  fontSize: 125,
                  fontWeight: 700,
                  lineHeight: "128px",
                  letterSpacing: "-7.68px",
                }}
                component={"span"}
              >
                Elevatr
              </Typography>
            </Typography>
          </Grid>
          <Grid size={5}>
            <Typography
              sx={{
                fontSize: 28,
                fontFamily: poppins.style.fontFamily,
                color: COLORS.GRAY,
                fontWeight: 400,
              }}
            >
              Most platforms help you apply. We help you progress.
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mt: 3 }}>
          {WHY_ELEVATR_CARD_DATA.map((val, i) => (
            <Grid size={6} key={i}>
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

export default WhyClear;
