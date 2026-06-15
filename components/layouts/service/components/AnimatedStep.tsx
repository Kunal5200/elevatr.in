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
  const switchPoint = rangeStart + sectionSize * 0.80;

  // ── Collapsed header: appears at switch point (last step: never) ──
  const smallOpacity = useTransform(scrollYProgress, (v) =>
    v >= switchPoint ? 1 : 0
  );
  // Subtle slide-up just before the switch for polish
  const smallY = useTransform(scrollYProgress, (v) => {
    const slideStart = switchPoint - 0.015;
    if (v >= switchPoint) return 0;
    if (v < slideStart) return 8;
    return 8 * (1 - (v - slideStart) / 0.015);
  });

  // ── Large content: hidden at switch point (last step: always visible) ──
  const largeOpacity = useTransform(scrollYProgress, (v) =>
    v >= switchPoint ? 0 : 1
  );

  // ── Subtle depth animation on large content before it switches ──
  const largeScale = useTransform(scrollYProgress, (v) => {
    const start = rangeStart + sectionSize * 0.50;
    if (v < start) return 1;
    if (v >= switchPoint) return 0.97;
    return 1 - 0.03 * ((v - start) / (switchPoint - start));
  });
  const largeTranslateY = useTransform(scrollYProgress, (v) => {
    const start = rangeStart + sectionSize * 0.50;
    if (v < start) return 0;
    if (v >= switchPoint) return -15;
    return -15 * ((v - start) / (switchPoint - start));
  });

  return (
    <Box
      sx={{
        position: "sticky",
        top: `${index * COLLAPSED_HEIGHT}px`,
        zIndex: index + 1,
        backgroundColor: "#fff",
        height: `calc(100vh - ${index * COLLAPSED_HEIGHT}px)`,
        overflow: "hidden",
        boxShadow:
          index > 0
            ? "0 -4px 20px rgba(0, 0, 0, 0.06), 0 -1px 4px rgba(0, 0, 0, 0.04)"
            : "none",
      }}
    >
      {/* ───── Collapsed Header ───── */}
      <motion.div
        initial={{ opacity: 0 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: COLLAPSED_HEIGHT,
          display: "flex",
          alignItems: "center",

          pointerEvents: "none",
          zIndex: 2,
          backgroundColor: "#fff",
          opacity: smallOpacity,
          y: smallY,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            sx={{
              color: COLORS.BLACK,
              fontFamily: poppins.style.fontFamily,
              fontSize: 22,
              fontWeight: 600,
              lineHeight: "28px",
            }}
          >
            {smallTitle}
          </Typography>
          <Typography
            sx={{
              fontFamily: surgena.style.fontFamily,
              color: COLORS.GRAY,
              fontSize: 14,
              fontWeight: 500,
              lineHeight: "20px",
              mt: 0.5,
            }}
          >
            {smallDesc1} {smallDesc2}
          </Typography>
        </Container>
      </motion.div>

      {/* ───── Active Large Content ───── */}
      <motion.div
        initial={{ opacity: 1 }}
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          opacity: largeOpacity,
          scale: largeScale,
          y: largeTranslateY,
        }}
      >
        <Container maxWidth="lg">
          <Grid container alignItems="flex-end" spacing={3}>
            <Grid size={12}>
              <Typography
                sx={{
                  color: COLORS.BLACK,
                  fontFamily: poppins.style.fontFamily,
                  fontSize: {
                    xs: "48px",
                    sm: "80px",
                    md: "100px",
                    lg: "125px",
                  },
                  fontWeight: 500,
                  lineHeight: {
                    xs: "52px",
                    sm: "80px",
                    md: "95px",
                    lg: "105px",
                  },
                  letterSpacing: {
                    xs: "-1.5px",
                    sm: "-4px",
                    md: "-6px",
                    lg: "-7.68px",
                  },
                }}
              >
                {largeTitleLine1}
              </Typography>
            </Grid>
            <Grid size={6}>
              <Typography
                sx={{
                  color: COLORS.BLACK,
                  fontFamily: poppins.style.fontFamily,
                  fontSize: {
                    xs: "48px",
                    sm: "80px",
                    md: "100px",
                    lg: "125px",
                  },
                  fontWeight: 500,
                  lineHeight: {
                    xs: "52px",
                    sm: "80px",
                    md: "95px",
                    lg: "105px",
                  },
                  letterSpacing: {
                    xs: "-1.5px",
                    sm: "-4px",
                    md: "-6px",
                    lg: "-7.68px",
                  },
                }}
              >
                {largeTitleLine2}
              </Typography>
            </Grid>
            <Grid size={6}>
              <Typography
                sx={{
                  fontSize: { xs: 16, sm: 20, md: 24 },
                  fontFamily: surgena.style.fontFamily,
                  fontWeight: 600,
                  lineHeight: { xs: "24px", sm: "30px", md: "36px" },
                  color: COLORS.GRAY,
                  mb: { xs: 1, sm: 2, md: 3 },
                }}
              >
                {largeDesc}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </motion.div>
    </Box>
  );
}
