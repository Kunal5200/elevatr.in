import { COLORS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import { Circle } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import FilledButton from "@/components/widgets/FilledButton";
import { SkillCardType } from "@/utils/types";

const SkillCard = ({
  title,
  description,
  buttonText,
  image,
}: SkillCardType) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: { lg: "100%", xs: "250px" },
        height: { lg: 446, xs: 300 },
        borderRadius: "28px",
        backgroundColor: "#F5F5F7",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: "40px",
        px: "24px",
        mx: { xs: "auto" },
      }}
    >
      <Typography
        sx={{
          fontFamily: poppins.style.fontFamily,
          color: "#1D1D1F",
          fontSize: { lg: "26px", xs: "18px" },
          fontWeight: 700,
          lineHeight: { lg: "32px", xs: "20px" },
          textAlign: "center",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: { lg: "16px", xs: "12px" },
          fontFamily: poppins.style.fontFamily,
          color: COLORS.PRIMARY,
          mt: "8px",
          fontWeight: 500,
          textAlign: "center",
        }}
      >
        {description}
      </Typography>

      <FilledButton
        sx={{
          backgroundColor: COLORS.PRIMARY,
          color: COLORS.WHITE,
          display: "flex",
          alignItems: "center",
          gap: "10px",
          p: "10px 24px",
          borderRadius: "100px",
          fontFamily: poppins.style.fontFamily,
          fontSize: { lg: "15px", xs: "12px" },
          fontWeight: 600,
          mt: { lg: "20px", xs: "10px" },
          textTransform: "none",
          boxShadow: "none",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            backgroundColor: "#6345d6",
            boxShadow: "0 4px 12px rgba(124, 93, 250, 0.2)",
          },
        }}
      >
        <Circle sx={{ width: 8, height: 8, color: COLORS.WHITE }} />
        {buttonText}
      </FilledButton>

      <Box
        sx={{
          position: "absolute",
          bottom: "-15px",
          left: 0,
          right: 0,
          height: { lg: "220px", xs: "150px" },
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          pointerEvents: "none",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <Image
            src={image}
            alt={title}
            fill
            sizes="380px"
            style={{
              objectFit: "contain",
              objectPosition: "bottom center",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SkillCard;
