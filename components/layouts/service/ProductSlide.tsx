import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import product1 from "@/images/products/product_first_look.png";
import Image from "next/image";
import { poppins } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
const ProductSlide = () => {
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
        <Grid container spacing={5} alignItems={"flex-end"}>
          <Grid size={8}>
            <Image
              src={product1}
              alt="product1"
              style={{ width: "100%", height: "auto", borderRadius: "20px" }}
            />
          </Grid>{" "}
          <Grid size={4}>
            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontSize: 36,
                fontWeight: 700,
                lineHeight: "52px",
              }}
            >
              The Product, Simply Explained
            </Typography>
            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontSize: 20,
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
