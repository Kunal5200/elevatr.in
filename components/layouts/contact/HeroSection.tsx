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
    <Box sx={{ mt: 10 }}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid size={10}>
            <Typography
              sx={{ fontSize: 24, fontFamily: poppins.style.fontFamily }}
            >
              Get Started
            </Typography>
            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontSize: 64,
                fontWeight: 500,
              }}
            >
              Questions, feedback, ideas we’re always open.
            </Typography>
          </Grid>
          <Grid size={2} sx={{ textAlign: "end" }}>
            <Stack
              spacing={2}
              justifyContent={"flex-end"}
              alignItems={"flex-end"}
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
