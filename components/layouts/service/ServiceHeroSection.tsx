import FilledButton from "@/components/widgets/FilledButton";
import OutlinedButton from "@/components/widgets/OutlinedButton";
import { COLORS } from "@/utils/enum";
import { poppins, surgena } from "@/utils/fonts";
import { Circle } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const ServiceHeroSection = () => {
  const data = [
    "Build your identity.",
    "Understand your skills.",
    "Move toward the right opportunities.",
  ];
  return (
    <Box>
      <Box
        sx={{
          height: { lg: "100vh", xs: "auto" },
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          py: { xs: 6 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container>
            <Grid size={{ lg: 10, xs: 12 }}>
              <Typography
                sx={{
                  fontSize: { lg: 120, xs: 40 },
                  fontFamily: poppins.style.fontFamily,
                  lineHeight: { lg: "100px", xs: "40px" },
                  letterSpacing: { lg: "-7.68px", xs: "-1px" },
                  fontWeight: 500,
                }}
              >
                One platform. Your entire career system.
              </Typography>

              <List sx={{ mt: 4 }}>
                {data.map((val, i) => (
                  <ListItem key={i} disablePadding>
                    <ListItemText
                      primary={val}
                      slotProps={{
                        primary: {
                          fontSize: { lg: 24, xs: 18 },
                          fontFamily: surgena.style.fontFamily,
                          lineHeight: "36px",
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
              <Stack
                direction={{ lg: "row", xs: "column" }}
                alignItems={{ lg: "center", xs: "flex-start" }}
                spacing={4}
                mt={4}
              >
                <FilledButton
                  sx={{
                    borderRadius: "50px",
                    p: "0px 32px 0px 26px",
                    // width: "20px",
                    width: { lg: "auto", xs: "100%" },
                  }}
                >
                  <Stack direction={"row"} alignItems={"center"} spacing={2}>
                    <Circle sx={{ color: COLORS.WHITE, fontSize: 10 }} />
                    <Typography
                      sx={{
                        color: COLORS.WHITE,
                        fontFamily: poppins.style.fontFamily,
                        fontSize: 16,
                        fontWeight: 600,
                        lineHeight: "60px",
                        textTransform: "initial",
                      }}
                    >
                      Start with your career identity
                    </Typography>
                  </Stack>
                </FilledButton>
                <OutlinedButton
                  sx={{
                    borderRadius: "50px",
                    p: "0px 11px 0 12px",
                    width: { lg: 250, xs: "100%" },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: poppins.style.fontFamily,
                      fontSize: 16,
                      fontWeight: 600,
                      lineHeight: "60px",
                      textTransform: "initial",
                      color: COLORS.PRIMARY,
                    }}
                  >
                    Explore how it works
                  </Typography>
                </OutlinedButton>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default ServiceHeroSection;
