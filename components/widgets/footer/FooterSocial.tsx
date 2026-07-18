import { Stack, Typography } from "@mui/material";
import React from "react";
import FilledButton from "../FilledButton";
import { poppins } from "@/utils/fonts";
import { ArrowForward } from "@mui/icons-material";
import { COLORS } from "@/utils/enum";
import Link from "next/link";

const FooterSocial = () => {
  const socialLinks = [
    {
      label: "Instagram",
      url: "#",
    },
    {
      label: "Facebook",
      url: "#",
    },
    {
      label: "X",
      url: "#",
    },
  ];
  return (
    <Stack
      direction={{ lg: "row", xs: "column" }}
      alignItems={"center"}
      justifyContent={"space-between"}
      spacing={{ xs: 3 }}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={3}>
        <FilledButton
          sx={{
            padding: "8px 19px",
            borderRadius: "88px",
            lineHeight: "19.6px",
            fontWeight: 500,
            fontSize: 14,
          }}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Typography
              sx={{
                fontSize: 14,
                fontFamily: poppins.style.fontFamily,
                color: COLORS.BLACK,
                textTransform: "initial",
              }}
            >
              Telegram
            </Typography>
            <ArrowForward
              sx={{
                color: COLORS.BLACK,
                transform: "rotate(-45deg)",
                fontSize: 20,
              }}
            />
          </Stack>
        </FilledButton>
        <FilledButton
          sx={{
            padding: "8px 19px",
            borderRadius: "88px",
            lineHeight: "19.6px",
            fontWeight: 500,
            fontSize: 14,
          }}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Typography
              sx={{
                fontSize: 14,
                fontFamily: poppins.style.fontFamily,
                color: COLORS.BLACK,
                textTransform: "initial",
              }}
            >
              Whatsapp
            </Typography>
            <ArrowForward
              sx={{
                color: COLORS.BLACK,
                transform: "rotate(-45deg)",
                fontSize: 20,
              }}
            />
          </Stack>
        </FilledButton>
      </Stack>
      <Stack direction={"row"} alignItems={"center"} spacing={2}>
        {socialLinks.map((val, i) => (
          <Link href={val.url} style={{ textDecoration: "none" }} key={i}>
            <Typography
              sx={{
                fontSize: 14,
                fontFamily: poppins.style.fontFamily,
                color: COLORS.WHITE,
                textTransform: "initial",
              }}
            >
              {val.label}
            </Typography>
          </Link>
        ))}
      </Stack>
    </Stack>
  );
};

export default FooterSocial;
