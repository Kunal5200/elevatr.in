"use client";
import { COLORS } from "@/utils/enum";
import { poppins, surgena } from "@/utils/fonts";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import SkillCard from "./components/Skill-Card";

const Skills = () => {
  return (
    <Box
      sx={{
        mt: 20,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        jusifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={"row"}
          alignItems={"flex-end"}
          justifyContent={"space-between"}
        >
          <Box>
            <Typography
              sx={{
                fontSize: 36,
                fontWeight: 700,
                fontFamily: poppins.style.fontFamily,
                width: 237,
              }}
            >
              Product Breakdown
            </Typography>
            <Typography
              sx={{
                fontSize: 24,
                fontWeight: 600,
                color: COLORS.GRAY,
                lineHeight: "36px",
                fontFamily: surgena.style.fontFamily,
              }}
            >
              what we’hv built so far & what’s on the way
            </Typography>
          </Box>
          <Stack direction="row" alignItems={"center"} spacing={2}>
            <IconButton sx={{ border: "1px solid #000" }}>
              <ChevronLeft />
            </IconButton>
            <IconButton sx={{ border: "1px solid #000" }}>
              <ChevronRight />
            </IconButton>
          </Stack>
        </Stack>
        <Swiper>
          <SwiperSlide>
            <SkillCard />
          </SwiperSlide>
        </Swiper>
      </Container>
    </Box>
  );
};

export default Skills;
