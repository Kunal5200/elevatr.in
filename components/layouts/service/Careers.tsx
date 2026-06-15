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
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontFamily: surgena.style.fontFamily,
            fontSize: 24,
            fontWeight: 600,
            lineHeight: "36px",
          }}
        >
          “Elevatr brings structure to the entire journey.”
        </Typography>
        <Typography
          sx={{
            fontSize: 128,
            fontFamily: poppins.style.fontFamily,
            letterSpacing: "-7.68px",
            fontWeight: 500,
            lineHeight: "130px",
          }}
        >
          Careers aren’t built in one step.
        </Typography>
        <Typography
          sx={{
            fontSize: 128,
            fontFamily: poppins.style.fontFamily,
            letterSpacing: "-7.68px",
            fontWeight: 500,
            lineHeight: "130px",
          }}
        >
          They’re built in
        </Typography>
        <Stack direction={"row"} alignItems={"flex-end"} spacing={3}>
          <Typography
            sx={{
              fontSize: 128,
              fontFamily: poppins.style.fontFamily,
              letterSpacing: "-7.68px",
              fontWeight: 500,
              lineHeight: "130px",
            }}
          >
            systems.
          </Typography>
          <Stack direction={"row"} alignItems={"flex-end"} spacing={3}>
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
