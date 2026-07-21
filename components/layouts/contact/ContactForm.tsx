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
    <Box sx={{ mt: { lg: 10, xs: 5 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ lg: 4, xs: 12 }}>
            <TextField label="Your Name*" variant="standard" fullWidth />
          </Grid>
          <Grid size={{ lg: 4, xs: 12 }}>
            <TextField label="Email*" variant="standard" fullWidth />
          </Grid>
          <Grid size={{ lg: 4, xs: 12 }}>
            <MuiTelInput
              label="Phone Number (optional)"
              variant="standard"
              fullWidth
              defaultCountry="IN"
            />
          </Grid>
          <Grid size={{ lg: 12, xs: 12 }}>
            <TextField
              label="Message*"
              variant="standard"
              fullWidth
              multiline
              rows={5}
            />
          </Grid>
        </Grid>
        <Stack
          direction={{ lg: "row", xs: "column" }}
          alignItems={{ lg: "center", xs: "flex-start" }}
          justifyContent={"space-between"}
          sx={{ mt: { lg: 7, xs: 4 } }}
          spacing={{ xs: 4 }}
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
