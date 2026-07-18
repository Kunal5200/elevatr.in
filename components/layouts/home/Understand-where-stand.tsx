import CustomList from "@/components/widgets/CustomList";
import { COLORS } from "@/utils/enum";
import { poppins, surgena } from "@/utils/fonts";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";

const Understand = () => {
  const data = [
    "Skill intelligence",
    "Role readiness",
    "Career recommendations",
    "Learning guidance",
  ];
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            color: COLORS.GRAY,
            fontSize: 26,
            fontWeight: 500,
            lineHeight: "36px",
            fontFamily: surgena.style.fontFamily,
          }}
        >
          Stop guessing, Start improving.
        </Typography>
        <Typography
          sx={{
            fontSize: { lg: 128, xs: 60 },
            fontFamily: poppins.style.fontFamily,
            fontWeight: 275,
            lineHeight: { lg: "100px", xs: "60px" },
            letterSpacing: "-7.68px",
            mt: 2,
          }}
        >
          Understand where
        </Typography>
        <Grid container sx={{ alignItems: "flex-end" }}>
          <Grid size={{ lg: 7, xs: 12 }}>
            <Typography
              sx={{
                fontSize: { lg: 128, xs: 60 },
                fontFamily: poppins.style.fontFamily,
                fontWeight: 600,
                lineHeight: { lg: "100px", xs: "60px" },
                letterSpacing: "-7.68px",
              }}
            >
              you stand.
            </Typography>
          </Grid>
          <Grid size={{ lg: 5, xs: 12 }}>
            <Typography
              sx={{
                color: COLORS.GRAY,
                fontSize: { lg: 28, xs: 16 },
                fontFamily: poppins.style.fontFamily,
                fontWeight: 400,
                lineHeight: "37px",
              }}
            >
              Know your strengths, gaps, & next steps.
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ mt: 5 }}>
          <CustomList
            data={data}
            typographyStyle={{
              color: COLORS.GRAY,
              fontFamily: poppins.style.fontFamily,
              fontSize: 28,
              fontWeight: 500,
              lineHeight: "37px",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Understand;
