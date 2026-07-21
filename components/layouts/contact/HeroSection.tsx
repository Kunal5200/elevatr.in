"use client";

import { SOCIAL_ICONS } from "@/utils/constant";
import { COLORS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const HeroSection = () => {
  return (
    <Box sx={{ mt: { lg: 10, xs: 4 } }}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid size={{ lg: 10, xs: 12 }} spacing={{ xs: 5 }}>
            <Typography
              sx={{
                fontSize: { lg: 24, xs: 16 },
                fontFamily: poppins.style.fontFamily,
              }}
            >
              Get Started
            </Typography>
            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontSize: { lg: 64, xs: 40 },
                fontWeight: 500,
              }}
            >
              Questions, feedback, ideas we’re always open.
            </Typography>
          </Grid>
          <Grid
            size={{ lg: 2, xs: 12 }}
            sx={{
              textAlign: "end",
              display: { lg: "block", xs: "flex" },
              justifyContent: { xs: "space-between" },
            }}
          >
            <Stack
              spacing={2}
              justifyContent={"flex-end"}
              alignItems={"flex-end"}
              direction={"row"}
            >
              {SOCIAL_ICONS.map((val, i) => (
                <IconButton
                  sx={{
                    border: "1px solid #B7B7B7",
                    height: 64,
                    width: 64,
                    "& svg": {
                      color: COLORS.BLACK,
                    },
                  }}
                  key={i}
                >
                  <val.icon />
                </IconButton>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
