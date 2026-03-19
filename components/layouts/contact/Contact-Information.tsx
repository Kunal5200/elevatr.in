import { COLORS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import logo from "@/images/logo/logo.png";
import Image from "next/image";

const ContactInformation = () => {
  return (
    <Box sx={{ mt: 30 }}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid size={8}>
            <Typography
              sx={{
                fontSize: 24,
                fontFamily: poppins.style.fontFamily,
                lineHeight: "36px",
              }}
            >
              Contact Info
            </Typography>
            <Typography
              sx={{
                fontSize: 64,
                fontFamily: poppins.style.fontFamily,
                fontWeight: 500,
                lineHeight: "84px",
                letterSpacing: "-3.84px",
              }}
            >
              We are always <br /> happy to assist you
            </Typography>
          </Grid>
          <Grid size={3}>
            <Typography
              sx={{ fontSize: 22, fontFamily: poppins.style.fontFamily }}
            >
              Email Address
            </Typography>
            <Divider
              sx={{ borderColor: COLORS.BLACK, width: 40, borderWidth: 2 }}
            />
            <Typography
              sx={{
                fontSize: 22,
                fontFamily: poppins.style.fontFamily,
                fontWeight: 600,
                mt: 2,
              }}
            >
              info@elevatr.in
            </Typography>
            <Typography
              sx={{
                fontSize: 22,
                fontFamily: poppins.style.fontFamily,
              }}
            >
              Assistance hours:
            </Typography>
            <Typography
              sx={{
                fontSize: 22,
                fontFamily: poppins.style.fontFamily,
              }}
            >
              Monday - Friday 6 am to 8 pm IST{" "}
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ mt: 20 }}>
          <Grid container alignItems="center" spacing={4}>
            <Grid size={8}>
              <Divider sx={{ borderColor: COLORS.BLACK, borderWidth: 1 }} />
              <Typography
                sx={{
                  fontSize: 40,
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 500,
                  mt: 2,
                  letterSpacing: "-2.4px",
                }}
              >
                Career infrastructure, Just got reimagined.
              </Typography>
            </Grid>
            <Grid size={2}>
              <Image
                src={logo}
                alt="logo"
                style={{ width: "100%", height: "auto" }}
              />
            </Grid>
            <Grid size={2}>
              <Divider sx={{ borderColor: COLORS.BLACK, borderWidth: 1 }} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactInformation;
