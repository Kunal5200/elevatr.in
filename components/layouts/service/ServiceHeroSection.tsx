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
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Container maxWidth="lg">
          <Grid container>
            <Grid size={10}>
              <Typography
                sx={{
                  fontSize: 120,
                  fontFamily: poppins.style.fontFamily,
                  lineHeight: "100px",
                  letterSpacing: "-7.68px",
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
                          fontSize: 24,
                          fontFamily: surgena.style.fontFamily,
                          lineHeight: "36px",
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
              <Stack direction={"row"} alignItems={"center"} spacing={4} mt={4}>
                <FilledButton
                  sx={{
                    borderRadius: "50px",
                    p: "0px 32px 0px 26px",
                    // width: "20px",
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
                    width: 250,
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
