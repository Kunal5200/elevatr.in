"use client";
import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import { Box, Container, Grid, Typography } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { poppins, surgena } from "@/utils/fonts";

const COLLAPSED_HEIGHT = 100;

export interface AnimatedStepProps {
  largeTitleLine1: string;
  largeTitleLine2: string;
  largeDesc: string;
  smallTitle: string;
  smallDesc1: string;
  smallDesc2: string;
  index: number;
  totalSteps: number;
  scrollYProgress: MotionValue<number>;
  isLastStep: boolean;
}

export default function AnimatedStep({
  largeTitleLine1,
  largeTitleLine2,
  largeDesc,
  smallTitle,
  smallDesc1,
  smallDesc2,
  index,
  totalSteps,
  scrollYProgress,
  isLastStep,
}: AnimatedStepProps) {
  const sectionSize = 1 / totalSteps;
  const rangeStart = index * sectionSize;

  // The scroll point where collapsed header replaces the large content
  const switchPoint = rangeStart + sectionSize * 0.8;

  // ── Collapsed header: appears smoothly at the very end of the shrink ──
  const smallOpacity = useTransform(
    scrollYProgress,
    [switchPoint - 0.05, switchPoint],
    [0, 1]
  );
  const smallY = useTransform(
    scrollYProgress,
    [switchPoint - 0.05, switchPoint],
    [10, 0]
  );

  // ── Large content: Shrinks and moves up to the header position ──
  // We want it to be fully visible as it scrolls up, so no enter animation.
  // It only starts animating out after scrolling past rangeStart.
  const startShrink = rangeStart + sectionSize * 0.2;
  
  const largeOpacity = useTransform(
    scrollYProgress,
    [startShrink, switchPoint - 0.02, switchPoint],
    [1, 1, 0]
  );

  // Shrink from 1 down to a small size matching the header (approx 0.3)
  const largeScale = useTransform(
    scrollYProgress,
    [startShrink, switchPoint],
    [1, 0.3]
  );
  
  // Move up towards the header position
  const largeTranslateY = useTransform(
    scrollYProgress,
    [startShrink, switchPoint],
    [0, -300]
  );

  return (
    <Box
      sx={{
        position: "sticky",
        top: { xs: `${index * 70}px`, md: `${index * 100}px` },
        zIndex: index + 1,
        backgroundColor: "#fff",
        height: {
          xs: `calc(100vh - ${index * 70}px)`,
          md: `calc(100vh - ${index * 100}px)`,
        },
        overflow: "hidden",
      }}
    >
      {/* ───── Collapsed Header ───── */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          pointerEvents: "none",
          zIndex: 2,
          backgroundColor: "#fff",
          opacity: smallOpacity,
          y: smallY,
        }}
      >
        <Container 
          maxWidth="lg" 
          sx={{ 
            height: { xs: 70, md: 100 }, 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "center" 
          }}
        >
          <Typography
            sx={{
              color: COLORS.BLACK,
              fontFamily: poppins.style.fontFamily,
              fontSize: { xs: 16, md: 22 },
              fontWeight: 600,
              lineHeight: { xs: "22px", md: "28px" },
            }}
          >
            {smallTitle}
          </Typography>
          <Typography
            sx={{
              fontFamily: surgena.style.fontFamily,
              color: COLORS.GRAY,
              fontSize: { xs: 12, md: 14 },
              fontWeight: 500,
              lineHeight: { xs: "16px", md: "20px" },
              mt: { xs: 0, md: 0.5 },
            }}
          >
            {smallDesc1} {smallDesc2}
          </Typography>
        </Container>
      </motion.div>

      {/* ───── Active Large Content ───── */}
      <Box
        component={motion.div}
        style={{
          opacity: largeOpacity,
          scale: largeScale,
          y: largeTranslateY,
          transformOrigin: "top left",
        }}
        sx={{
          height: "100%",
          display: "flex",
          alignItems: { xs: "flex-start", md: "center" },
          pt: { xs: 15, md: 0 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container alignItems="flex-end" rowSpacing={2} columnSpacing={3}>
            <Grid size={12}>
              <Typography
                sx={{
                  color: COLORS.BLACK,
                  fontFamily: poppins.style.fontFamily,
                  fontSize: {
                    xs: "42px",
                    sm: "80px",
                    md: "100px",
                    lg: "125px",
                  },
                  fontWeight: 500,
                  lineHeight: {
                    xs: "46px",
                    sm: "80px",
                    md: "95px",
                    lg: "105px",
                  },
                  letterSpacing: {
                    xs: "-1px",
                    sm: "-4px",
                    md: "-6px",
                    lg: "-7.68px",
                  },
                }}
              >
                {largeTitleLine1}
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                sx={{
                  color: COLORS.BLACK,
                  fontFamily: poppins.style.fontFamily,
                  fontSize: {
                    xs: "42px",
                    sm: "80px",
                    md: "100px",
                    lg: "125px",
                  },
                  fontWeight: 500,
                  lineHeight: {
                    xs: "46px",
                    sm: "80px",
                    md: "95px",
                    lg: "105px",
                  },
                  letterSpacing: {
                    xs: "-1px",
                    sm: "-4px",
                    md: "-6px",
                    lg: "-7.68px",
                  },
                }}
              >
                {largeTitleLine2}
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                sx={{
                  fontSize: { xs: 14, sm: 20, md: 24 },
                  fontFamily: surgena.style.fontFamily,
                  fontWeight: 600,
                  lineHeight: { xs: "22px", sm: "30px", md: "36px" },
                  color: COLORS.GRAY,
                  mb: { xs: 1, sm: 2, md: 3 },
                }}
              >
                {largeDesc}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
