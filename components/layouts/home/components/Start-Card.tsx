"use client";
import { poppins, surgena } from "@/utils/fonts";
import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import motion from "@/images/banner/motion.png";
import Image from "next/image";
const StartCard = () => {
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <Box>
      <Box
        sx={{
          background: "rgba(255, 255, 255, 0.90)",
          boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.09)",
          borderRadius: "10px",
          // p: "30px",
          display: { lg: "flex", xs: "block" },
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Image src={motion} alt="motion" style={{ width: "100%" }} />
        </Box>
        <Box sx={{ pr: { lg: 3, xs: 1 }, p: { xs: 2 } }}>
          <Typography
            sx={{
              textAlign: "right",
              fontFamily: surgena.style.fontFamily,
              fontWeight: 600,
              color: "#272B27",
              fontSize: { lg: 26, xs: 15 },
            }}
          >
            Start with Elevatr
          </Typography>
          <Typography
            sx={{
              color: "#4E4E4E",
              fontSize: { lg: 21, xs: 12 },
              fontFamily: poppins.style.fontFamily,
              width: { lg: 432, xs: "100%" },
              marginLeft: "auto",
              textAlign: "right",
            }}
          >
            It comes from moving with clarity, And replace it with structure,
            intelligence, and confidence.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StartCard;
