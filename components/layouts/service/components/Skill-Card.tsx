import { poppins } from "@/utils/fonts";
import { Box, Typography } from "@mui/material";
import React from "react";

const SkillCard = () => {
  return (
    <Box>
      <Box
        sx={{
          width: 380,
          height: 446,
          borderRadius: "18px",
          backgroundColor: "#F5F5F7",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontFamily: poppins.style.fontFamily,
            color: "#1D1D1F",
            fontSize: "24px",
            fontWeight: 700,
            lineHeight: "28px",
          }}
        >
          Career Identity (Live)
        </Typography>
        <Typography sx={{ fontSize: 17, fontFamily: poppins.style.fontFamily }}>
          Your foundation, done right.
        </Typography>
      </Box>
    </Box>
  );
};

export default SkillCard;
