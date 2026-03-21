import { COLORS } from "@/utils/enum";
import { poppins, surgena } from "@/utils/fonts";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const CareerDeserve = () => {
  return (
    <Box sx={{ mt: 20 }}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid size={10} margin="auto">
            <Typography
              sx={{
                fontFamily: surgena.style.fontFamily,
                textAlign: "center",
                fontSize: 35,
                fontWeight: 500,
              }}
            >
              We think careers deserve better guidance than guesswork.
            </Typography>
            <Typography
              sx={{
                width: "350px",
                color: COLORS.BLACK,
                fontFamily: poppins.style.fontFamily,
                fontSize: 16,
                fontWeight: 500,
                lineHeight: "28px",
                textAlign: "center",
                margin: "auto",
              }}
            >
              Resumes. Scores. Applications. Silence. No feedback. No clarity.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CareerDeserve;
