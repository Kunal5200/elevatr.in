import { surgena } from "@/utils/fonts";
import { Box, Typography } from "@mui/material";
import React from "react";

const DashedBorder = ({ title }: { title: string }) => {
  return (
    <Box
      sx={{
        border: "1px dashed #000000",
        width: "302px",
        height: "40px",
        borderRadius: "15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: 20,
          fontFamily: surgena.style.fontFamily,
          fontWeight: 600,
          lineHeight: "36px",
          textAlign: "center",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default DashedBorder;
