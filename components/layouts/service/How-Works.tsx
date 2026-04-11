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
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <Grid container alignItems={"flex-end"} spacing={5}>
          <Grid size={3}>
            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontSize: 36,
                fontWeight: 700,
                lineHeight: "52px",
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
          <Grid size={9}>
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
