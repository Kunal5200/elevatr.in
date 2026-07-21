import FilledButton from "@/components/widgets/FilledButton";
import OutlinedButton from "@/components/widgets/OutlinedButton";
import { COLORS } from "@/utils/enum";
import { poppins, surgena } from "@/utils/fonts";
import { ArrowRight, ArrowRightAlt, Circle } from "@mui/icons-material";
import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

const Careers = () => {
  return (
    <Box
      sx={{
        height: { lg: "100vh", xs: "auto" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pb: { xs: 5 },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontFamily: surgena.style.fontFamily,
            fontSize: { lg: 24, xs: 18 },
            fontWeight: 600,
            lineHeight: { lg: "36px", xs: "25px" },
          }}
        >
          “Elevatr brings structure to the entire journey.”
        </Typography>
        <Typography
          sx={{
            fontSize: { lg: 128, xs: 40 },
            fontFamily: poppins.style.fontFamily,
            letterSpacing: { lg: "-7.68px", xs: "-1px" },
            fontWeight: 500,
            lineHeight: { lg: "130px", xs: "45px" },
          }}
        >
          Careers aren’t built in one step.
        </Typography>
        <Typography
          sx={{
            fontSize: { lg: 128, xs: 40 },
            fontFamily: poppins.style.fontFamily,
            letterSpacing: { lg: "-7.68px", xs: "-1px" },
            fontWeight: 500,
            lineHeight: { lg: "130px", xs: "45px" },
          }}
        >
          They’re built in
        </Typography>
        <Stack
          direction={{ lg: "row", xs: "column" }}
          alignItems={{ lg: "flex-end", xs: "flex-start" }}
          spacing={3}
        >
          <Typography
            sx={{
              fontSize: { lg: 128, xs: 40 },
              fontFamily: poppins.style.fontFamily,
              letterSpacing: { lg: "-7.68px", xs: "-1px" },
              fontWeight: 500,
              lineHeight: { lg: "130px", xs: "45px" },
            }}
          >
            systems.
          </Typography>
          <Stack
            direction={{ lg: "row", xs: "column" }}
            alignItems={{ lg: "flex-end", xs: "flex-start" }}
            spacing={3}
          >
            <FilledButton
              sx={{
                borderRadius: "128px",
                height: "48px",
                px: 3,
                display: "flex",
                alignItems: "center",
                fontFamily: poppins.style.fontFamily,
                fontSize: "16px",
                fontWeight: 600,
                color: COLORS.WHITE,
                textTransform: "initial",
                whiteSpace: "nowrap",
                width: { lg: "auto", xs: "100%" },
              }}
            >
              <Circle sx={{ fill: COLORS.WHITE, fontSize: 8, mr: 1.5 }} />
              Start your career journey
            </FilledButton>
            <OutlinedButton
              sx={{
                borderRadius: "128px",
                height: "48px",
                px: 3,
                display: "flex",
                alignItems: "center",
                fontFamily: poppins.style.fontFamily,
                fontSize: "16px",
                fontWeight: 600,
                color: COLORS.PRIMARY,
                textTransform: "initial",
                whiteSpace: "nowrap",
              }}
            >
              Get early access to what’s next
              <ArrowRightAlt sx={{ ml: 1 }} />
            </OutlinedButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Careers;
