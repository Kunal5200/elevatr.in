import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import product1 from "@/images/products/the_product.png";
import Image from "next/image";
import { poppins } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
const ProductSlide = () => {
  return (
    <Box
      sx={{
        height: { lg: "100vh", xs: "auto" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 4 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems={"flex-end"}>
          <Grid size={{ lg: 8, xs: 12 }}>
            <Image
              src={product1}
              alt="product1"
              style={{ width: "100%", height: "auto", borderRadius: "20px" }}
            />
          </Grid>{" "}
          <Grid size={{ lg: 4, xs: 12 }}>
            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontSize: { lg: 36, xs: 24 },
                fontWeight: 700,
                lineHeight: "52px",
              }}
            >
              The Product, Simply Explained
            </Typography>
            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontSize: { lg: 20, xs: 18 },
                fontWeight: 400,
                lineHeight: "30px",
                color: COLORS.PRIMARY,
              }}
            >
              Learn more
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductSlide;
