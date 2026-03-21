import { COLORS } from "@/utils/enum";
import { poppins, surgena } from "@/utils/fonts";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const CareersUncertain = () => {
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
              Careers shouldn’t feel this uncertain
            </Typography>
            <Typography
              sx={{
                color: COLORS.BLACK,
                fontFamily: poppins.style.fontFamily,
                fontSize: 16,
                fontWeight: 500,
                lineHeight: "28px",
                textAlign: "center",
                margin: "auto",
              }}
            >
              Most people don’t struggle because they lack talent. They struggle
              because the system gives no direction. One Streamlined System for
              Your Entire Career Journey{" "}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CareersUncertain;
