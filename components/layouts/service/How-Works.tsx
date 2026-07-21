import { COLORS } from "@/utils/enum";
import { poppins, surgena } from "@/utils/fonts";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import works_banner from "@/images/products/how_elevatr_works.png";
import Image from "next/image";
const HowWorks = () => {
  return (
    <Box
      sx={{
        height: { lg: "100vh", xs: "auto" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pt: { xs: 4 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container alignItems={"flex-end"} spacing={5}>
          <Grid size={{ lg: 3, xs: 12 }}>
            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontSize: { lg: 36, xs: 24 },
                fontWeight: 700,
                lineHeight: { lg: "52px", xs: "30px" },
              }}
            >
              How Elevatr Works
            </Typography>
            <Typography
              sx={{
                color: COLORS.GRAY,
                fontFamily: surgena.style.fontFamily,
                fontSize: 24,
              }}
            >
              A career, step by step.
            </Typography>
          </Grid>
          <Grid size={{ lg: 9, xs: 12 }}>
            <Image
              src={works_banner}
              alt="works_banner"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HowWorks;
