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
        height: { lg: "100vh", xs: "auto" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 4 },
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
            fontSize: { lg: 128, xs: 40 },
            fontFamily: poppins.style.fontFamily,
            fontWeight: 275,
            lineHeight: { lg: "100px", xs: "50px" },
            letterSpacing: { lg: "-7.68px", xs: "-1px" },
            mt: 2,
          }}
        >
          Understand where
        </Typography>
        <Grid container sx={{ alignItems: "flex-end" }}>
          <Grid size={{ lg: 7, xs: 12 }}>
            <Typography
              sx={{
                fontSize: { lg: 128, xs: 40 },
                fontFamily: poppins.style.fontFamily,
                fontWeight: 600,
                lineHeight: { lg: "100px", xs: "50px" },
                letterSpacing: { lg: "-7.68px", xs: "-1px" },
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
        <Box sx={{ mt: { lg: 5, xs: 2 } }}>
          <CustomList
            data={data}
            typographyStyle={{
              color: COLORS.GRAY,
              fontFamily: poppins.style.fontFamily,
              fontSize: { lg: 28, xs: 16 },
              fontWeight: 500,
              lineHeight: { lg: "37px", xs: "24px" },
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Understand;
