import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import FooterSocial from "./footer/FooterSocial";
import Image from "next/image";
import star from "@/images/icons/home/footer_star.png";
import { poppins } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import logo from "@/images/logo/logo_white.png";
const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1A1A1A",
        height: "100vh",
        py: 4,
        position: "relative",
        // mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <FooterSocial />
        <Box sx={{ width: { lg: 500, xs: "100%" }, mt: 10 }}>
          <Stack
            direction={{ lg: "row", xs: "column" }}
            alignItems={"center"}
            spacing={2}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Image src={star} alt="Star" width={20} height={20} />
              <Typography
                sx={{
                  fontFamily: poppins.style.fontFamily,
                  fontSize: 12,
                  color: COLORS.GRAY,
                }}
              >
                Any questions?
              </Typography>
            </Stack>
            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontSize: { lg: 40, xs: 24 },
                color: COLORS.WHITE,
                letterSpacing: "-1.6px",
                lineHeight: "36px",
              }}
            >
              Just leave your
            </Typography>
          </Stack>
          <Typography
            sx={{
              fontSize: { lg: 40, xs: 24 },
              fontFamily: poppins.style.fontFamily,
              color: COLORS.WHITE,
              letterSpacing: "-1.6px",
              lineHeight: "36px",
            }}
          >
            phone number and we will contact you shortly
          </Typography>
          <Typography
            sx={{
              fontFamily: poppins.style.fontFamily,
              fontSize: { lg: 60, xs: 30 },
              color: COLORS.GRAY,
              letterSpacing: "-1.6px",
              lineHeight: { lg: "36px", xs: "40px" },
              mt: 10,
            }}
          >
            +91 (9810343289)
          </Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Image src={logo} alt="" style={{ width: "100%", height: "100%" }} />
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
