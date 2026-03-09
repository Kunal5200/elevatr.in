import { COLORS } from "@/utils/enum";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import fav from "@/images/logo/favicon.png";
import { HEADER_LINKS } from "@/utils/constant";
import Link from "next/link";
import { poppins } from "@/utils/fonts";
const Header = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 20,
        display: "flex",
        justifyContent: "center",
        zIndex: 1100,
      }}
    >
      <Box
        sx={{
          backgroundColor: COLORS.HEADER_BG,
          backdropFilter: "blur(12px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "600px",
          padding: "8px 16px",
          borderRadius: "100px",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
          gap: "20px",
        }}
      >
        <Image src={fav} alt="logo" style={{ width: 60, height: 60 }} />
        <Box
          sx={{
            backgroundColor: COLORS.HEADER_DARK_BG,
            borderRadius: "72px",
            px: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: 350,
            height: 60,
          }}
        >
          {HEADER_LINKS.map((val, i) => (
            <Link href={val.url} key={i} style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  color: "#DEDEDE",
                  fontSize: 14,
                  fontFamily: poppins.style.fontFamily,
                }}
              >
                {val.label}
              </Typography>
            </Link>
          ))}
        </Box>
        <Button
          sx={{
            textTransform: "initial",
            color: COLORS.BLACK,
            backgroundColor: COLORS.WHITE,
            p: "20px",
            borderRadius: "88px",
            width: 150,
            fontSize: 16,
            fontFamily: poppins.style.fontFamily,
            height: 60,
          }}
        >
          Contact Us
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
