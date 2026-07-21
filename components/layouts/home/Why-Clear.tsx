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
          <Grid size={{ lg: 7, xs: 12 }}>
            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontSize: { lg: 125, xs: 40 },
                fontWeight: 275,
                lineHeight: { lg: "128px", xs: "50px" },
                letterSpacing: { lg: "-7.68px", xs: "-1px" },
              }}
            >
              Why{" "}
              <Typography
                sx={{
                  fontFamily: poppins.style.fontFamily,
                  fontSize: { lg: 125, xs: 40 },
                  fontWeight: 700,
                  lineHeight: { lg: "128px", xs: "50px" },
                  letterSpacing: { lg: "-7.68px", xs: "-1px" },
                }}
                component={"span"}
              >
                Elevatr
              </Typography>
            </Typography>
          </Grid>
          <Grid size={{ lg: 5, xs: 12 }}>
            <Typography
              sx={{
                fontSize: { lg: 28, xs: 16 },
                fontFamily: poppins.style.fontFamily,
                color: COLORS.GRAY,
                fontWeight: 400,
              }}
            >
              Most platforms help you apply. We help you progress.
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ my: 3 }}>
          {WHY_ELEVATR_CARD_DATA.map((val, i) => (
            <Grid size={{ lg: 6, xs: 12 }} key={i}>
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
