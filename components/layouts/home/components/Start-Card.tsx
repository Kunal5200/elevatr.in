import { poppins, surgena } from "@/utils/fonts";
import { Box, Typography } from "@mui/material";
import React from "react";

const StartCard = () => {
  return (
    <Box>
      <Box
        sx={{
          background: "rgba(255, 255, 255, 0.90)",
          boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.09)",
          borderRadius: "10px",
          p: "30px",
        }}
      >
        <Typography
          sx={{
            textAlign: "right",
            fontFamily: surgena.style.fontFamily,
            fontWeight: 600,
            color: "#272B27",
            fontSize: 26,
          }}
        >
          Start with Elevatr
        </Typography>
        <Typography
          sx={{
            color: "#4E4E4E",
            fontSize: 21,
            fontFamily: poppins.style.fontFamily,
            width: 432,
            marginLeft: "auto",
            textAlign: "right",
          }}
        >
          It comes from moving with clarity, And replace it with structure,
          intelligence, and confidence.
        </Typography>
      </Box>
    </Box>
  );
};

export default StartCard;
