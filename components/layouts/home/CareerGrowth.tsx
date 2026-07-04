import CustomList from "@/components/widgets/CustomList";
import { COLORS } from "@/utils/enum";
import { poppins, surgena } from "@/utils/fonts";
import { Circle } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const CareerGrowth = () => {
  const listItems = [
    "Resume builders",
    "Job boards",
    "Skill trackers",
    "Interview notes",
    "Learning platforms",
  ];
  return (
    <Box sx={{ mt: 10 }}>
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontSize: 128,
            fontWeight: 275,
            fontFamily: poppins.style.fontFamily,
            lineHeight: "128px",
            letterSpacing: "-7.68px",
          }}
        >
          Career growth is{" "}
          <Typography
            component={"span"}
            sx={{
              fontSize: 128,
              fontWeight: 700,
              fontFamily: poppins.style.fontFamily,
              lineHeight: "128px",
              letterSpacing: "-7.68px",
            }}
          >
            fragmented.
          </Typography>
        </Typography>
        <Grid container sx={{ mt: 8 }} spacing={4}>
          <Grid size={6}>
            <Box sx={{ width: 500 }}>
              <Typography
                sx={{
                  fontSize: 26,
                  fontFamily: surgena.style.fontFamily,
                  color: COLORS.GRAY,
                  fontWeight: 500,
                  lineHeight: "36px",
                }}
              >
                Today, your career lives across dozens of tools.
              </Typography>
              <CustomList
                data={listItems}
                typographyStyle={{
                  fontFamily: surgena.style.fontFamily,
                  color: COLORS.GRAY,
                  fontSize: 26,
                  fontWeight: 500,
                  lineHeight: "36px",
                }}
              />
            </Box>
          </Grid>

          <Grid size={6}>
            <Typography
              sx={{
                fontSize: 128,
                fontWeight: 275,
                fontFamily: poppins.style.fontFamily,
                lineHeight: "128px",
                letterSpacing: "-7.68px",
                textAlign: "left",
              }}
            >
              Nothing{" "}
              <Typography
                component={"span"}
                sx={{
                  fontSize: 128,
                  fontWeight: 700,
                  fontFamily: poppins.style.fontFamily,
                  lineHeight: "128px",
                  letterSpacing: "-7.68px",
                }}
              >
                connects.
              </Typography>
            </Typography>
            <Typography
              sx={{
                fontFamily: surgena.style.fontFamily,
                fontSize: 26,
                fontWeight: 500,
                lineHeight: "36px",
                color: COLORS.GRAY,
                textAlign: "right",
              }}
            >
              So people spend more time managing their careers than growing
              them.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CareerGrowth;
