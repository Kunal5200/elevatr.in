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
    <Box sx={{ mt: { lg: 10, xs: 4 } }}>
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontSize: { lg: 128, xs: 40 },
            fontWeight: 275,
            fontFamily: poppins.style.fontFamily,
            lineHeight: { lg: "128px", xs: "60px" },
            letterSpacing: { lg: "-7.68px", xs: "-1px" },
          }}
        >
          Career growth is{" "}
          <Typography
            component={"span"}
            sx={{
              fontSize: { lg: 128, xs: 40 },
              fontWeight: 700,
              fontFamily: poppins.style.fontFamily,
              lineHeight: { lg: "128px", xs: "60px" },
              letterSpacing: { lg: "-7.68px", xs: "-1px" },
            }}
          >
            fragmented.
          </Typography>
        </Typography>
        <Grid
          container
          sx={{ mt: { lg: 8, xs: 3 } }}
          spacing={{ lg: 4, xs: 2 }}
        >
          <Grid size={{ lg: 6, xs: 12 }}>
            <Box sx={{ width: { lg: 500, xs: "100%" } }}>
              <Typography
                sx={{
                  fontSize: { lg: 26, xs: 20 },
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
                  fontSize: { lg: 26, xs: 18 },
                  fontWeight: 500,
                  lineHeight: "36px",
                }}
              />
            </Box>
          </Grid>

          <Grid size={{ lg: 6, xs: 12 }}>
            <Typography
              sx={{
                fontSize: { lg: 128, xs: 40 },
                fontWeight: 275,
                fontFamily: poppins.style.fontFamily,
                lineHeight: { lg: "128px", xs: "50px" },
                letterSpacing: { lg: "-7.68px", xs: "-1px" },
                textAlign: "left",
              }}
            >
              Nothing{" "}
              <Typography
                component={"span"}
                sx={{
                  fontSize: { lg: 128, xs: 40 },
                  fontWeight: 700,
                  fontFamily: poppins.style.fontFamily,
                  lineHeight: { lg: "128px", xs: "50px" },
                  letterSpacing: { lg: "-7.68px", xs: "-1px" },
                }}
              >
                connects.
              </Typography>
            </Typography>
            <Typography
              sx={{
                fontFamily: surgena.style.fontFamily,
                fontSize: { lg: 26, xs: 18 },
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
