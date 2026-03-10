"use client";

import { COLORS } from "@/utils/enum";
import { caveat, poppins } from "@/utils/fonts";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import React from "react";

const ContactForm = () => {
  return (
    <Box sx={{ mt: 10 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} rowSpacing={20}>
          <Grid size={4}>
            <TextField label="Your Name" variant="standard" fullWidth />
          </Grid>
          <Grid size={4}>
            <TextField label="Email" variant="standard" fullWidth />
          </Grid>
          <Grid size={4}>
            <MuiTelInput
              label="Phone Number (optional)"
              variant="standard"
              fullWidth
              defaultCountry="IN"
            />
          </Grid>
          <Grid size={12}>
            <TextField label="Email" variant="standard" fullWidth multiline />
          </Grid>
        </Grid>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ mt: 7 }}
        >
          <Button
            sx={{
              backgroundColor: COLORS.PRIMARY,
              borderRadius: "88px",
              //   p: "36px",
              width: 200,
              height: 64,
              fontFamily: poppins.style.fontFamily,
              fontSize: 16,
              fontWeight: 600,
              color: COLORS.WHITE,
            }}
          >
            Contact Us
          </Button>
          <Typography
            sx={{
              fontFamily: caveat.style.fontFamily,
              fontSize: 26,
              textAlign: "right",
              width: 350,
            }}
          >
            We’re building Elevatr in public, and every message helps us make it
            better.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default ContactForm;
