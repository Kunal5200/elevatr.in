"use client";
import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Box, Container, Grid, Typography } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { poppins, surgena } from "@/utils/fonts";

export interface AnimatedStepProps {
  largeTitleLine1: string;
  largeTitleLine2: string;
  largeDesc: string;
  smallTitle: string;
  smallDesc1: string;
  smallDesc2: string;
  isActive?: boolean;
  onFocus?: () => void;
}

export default function AnimatedStep({
  largeTitleLine1,
  largeTitleLine2,
  largeDesc,
  smallTitle,
  smallDesc1,
  smallDesc2,
  isActive,
  onFocus,
}: AnimatedStepProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Reverted back to native Window tracking so you can scroll freely on the page
  const isInView = useInView(ref, { margin: "-50% 0px -49% 0px" });

  useEffect(() => {
    if (isInView && onFocus) {
      onFocus();
    }
  }, [isInView]);

  const currentlyActive = isActive !== undefined ? isActive : isInView;

  return (
    <Box
      ref={ref}
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "1fr",
        placeItems: "center",
        position: "relative",
        height: "60vh",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "1fr",
        }}
      >
        <motion.div
          initial={false}
          animate={{
            opacity: currentlyActive ? 1 : 0,
            scale: currentlyActive ? 1 : 0.9,
            y: currentlyActive ? 0 : 20,
            pointerEvents: currentlyActive ? "auto" : "none",
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            gridRow: 1,
            gridColumn: 1,
            width: "100%",
            alignSelf: "center",
          }}
        >
          <Grid container alignItems="flex-end" spacing={3}>
            <Grid size={12}>
              <Typography
                sx={{
                  color: COLORS.BLACK,
                  fontFamily: poppins.style.fontFamily,
                  fontSize: "125px",
                  fontWeight: 500,
                  lineHeight: "100px",
                  letterSpacing: "-7.68px",
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
                  fontSize: "125px",
                  fontWeight: 500,
                  lineHeight: "100px",
                  letterSpacing: "-7.68px",
                }}
              >
                {largeTitleLine2}
              </Typography>
            </Grid>
            <Grid size={6}>
              <Typography
                sx={{
                  fontSize: 24,
                  fontFamily: surgena.style.fontFamily,
                  fontWeight: 600,
                  lineHeight: "36px",
                  color: COLORS.GRAY,
                }}
              >
                {largeDesc}
              </Typography>
            </Grid>
          </Grid>
        </motion.div>

        <motion.div
          initial={false}
          animate={{
            opacity: !currentlyActive ? 1 : 0,
            scale: !currentlyActive ? 1 : 0.9,
            pointerEvents: !currentlyActive ? "auto" : "none",
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{
            gridRow: 1,
            gridColumn: 1,
            width: "100%",
            alignSelf: "center",
          }}
        >
          <Grid container>
            <Grid size={12}>
              <Typography
                sx={{
                  color: COLORS.BLACK,
                  fontFamily: poppins.style.fontFamily,
                  fontSize: 48,
                  fontWeight: 700,
                  lineHeight: "60px",
                }}
              >
                {smallTitle}
              </Typography>
              <Typography
                sx={{
                  fontFamily: surgena.style.fontFamily,
                  color: COLORS.GRAY,
                  fontSize: 24,
                  fontWeight: 600,
                  lineHeight: "36px",
                  mt: 2,
                }}
              >
                {smallDesc1}
              </Typography>
              <Typography
                sx={{
                  fontFamily: surgena.style.fontFamily,
                  color: COLORS.GRAY,
                  fontSize: 24,
                  fontWeight: 600,
                  lineHeight: "36px",
                  mt: 2,
                }}
              >
                {smallDesc2}
              </Typography>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
