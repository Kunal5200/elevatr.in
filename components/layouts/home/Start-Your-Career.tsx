import CustomList from "@/components/widgets/CustomList";
import FilledButton from "@/components/widgets/FilledButton";
import { COLORS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import { Circle } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const StartyourCareer = () => {
  const data = [
    "ATS-optimized resumes",
    "Shareable career profile",
    "Role-specific resume versions",
    "Real-time feedback",
  ];
  return (
    <Box
      sx={{
        minHeight: { lg: "100vh", xs: "auto" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 4 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container alignItems="stretch">
          <Grid size={{ lg: 7, xs: 12 }}>
            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontSize: { lg: 28, xs: 18 },
                fontWeight: 500,
                lineHeight: { lg: "37px", xs: "30px" },
              }}
            >
              What You Get (Today)
            </Typography>
            <Box sx={{ display: { lg: "block", xs: "none" } }}>
              <Typography
                sx={{
                  fontFamily: poppins.style.fontFamily,
                  fontSize: { lg: 128, xs: 40 },
                  fontWeight: 700,
                  lineHeight: { lg: "120px", xs: "50px" },
                  letterSpacing: { lg: "-7.68px", xs: "-1px" },
                }}
              >
                Start{"    "}
                <Typography
                  sx={{
                    fontFamily: poppins.style.fontFamily,
                    fontSize: { lg: 128, xs: 40 },
                    fontWeight: 275,
                    lineHeight: { lg: "120px", xs: "50px" },
                    letterSpacing: { lg: "-7.68px", xs: "-1px" },
                  }}
                  component={"span"}
                >
                  with
                </Typography>
              </Typography>
              <Typography
                sx={{
                  fontFamily: poppins.style.fontFamily,
                  fontSize: { lg: 128, xs: 40 },
                  fontWeight: 275,
                  lineHeight: { lg: "120px", xs: "50px" },
                  letterSpacing: { lg: "-7.68px", xs: "-1px" },
                }}
              >
                your{" "}
                <Typography
                  component={"span"}
                  sx={{
                    fontFamily: poppins.style.fontFamily,
                    fontSize: { lg: 128, xs: 40 },
                    fontWeight: 700,
                    lineHeight: { lg: "120px", xs: "50px" },
                    letterSpacing: { lg: "-7.68px", xs: "-1px" },
                  }}
                >
                  career
                </Typography>
              </Typography>
              <Typography
                sx={{
                  fontFamily: poppins.style.fontFamily,
                  fontSize: { lg: 128, xs: 40 },
                  fontWeight: 700,
                  lineHeight: { lg: "120px", xs: "50px" },
                  letterSpacing: { lg: "-7.68px", xs: "-1px" },
                }}
              >
                identity.
              </Typography>
            </Box>
            <Box sx={{ display: { lg: "none", xs: "block" } }}>
              <Typography
                sx={{
                  fontFamily: poppins.style.fontFamily,
                  fontSize: { lg: 128, xs: 40 },
                  fontWeight: 700,
                  lineHeight: { lg: "120px", xs: "50px" },
                  letterSpacing: { lg: "-7.68px", xs: "-1px" },
                }}
              >
                Start{"    "}
                <Typography
                  sx={{
                    fontFamily: poppins.style.fontFamily,
                    fontSize: { lg: 128, xs: 40 },
                    fontWeight: 275,
                    lineHeight: { lg: "120px", xs: "50px" },
                    letterSpacing: { lg: "-7.68px", xs: "-1px" },
                  }}
                  component={"span"}
                >
                  with your
                </Typography>
              </Typography>

              <Typography
                sx={{
                  fontFamily: poppins.style.fontFamily,
                  fontSize: { lg: 128, xs: 40 },
                  fontWeight: 700,
                  lineHeight: { lg: "120px", xs: "50px" },
                  letterSpacing: { lg: "-7.68px", xs: "-1px" },
                }}
              >
                identity.
              </Typography>
            </Box>
          </Grid>
          <Grid
            size={{ lg: 5, xs: 12 }}
            sx={{
              position: "relative",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <CustomList
                data={data}
                typographyStyle={{
                  fontFamily: poppins.style.fontFamily,
                  fontSize: 20,
                  fontWeight: 500,
                  lineHeight: "37px",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                position: { lg: "absolute", xs: "relative" },
                bottom: 0,
                right: 0,
              }}
            >
              <FilledButton
                sx={{
                  borderRadius: "88px",
                  p: 1,
                  px: 2,
                  textTransform: "initial",
                }}
              >
                Build once. Use everywhere.
              </FilledButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default StartyourCareer;
