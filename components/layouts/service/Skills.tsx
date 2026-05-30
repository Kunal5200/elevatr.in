"use client";
import { COLORS } from "@/utils/enum";
import { poppins, surgena } from "@/utils/fonts";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import SkillCard from "./components/Skill-Card";
import { SKILLS_CARD_DATA } from "@/utils/constant";
import { useRef } from "react";

const Skills = () => {
  const swiperRef = useRef<any>(null);

  return (
    <Box
      sx={{
        mt: 20,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
            <IconButton
              onClick={() => swiperRef.current?.slidePrev()}
              sx={{ border: "1px solid #000" }}
            >
              <ChevronLeft />
            </IconButton>
            <IconButton
              onClick={() => swiperRef.current?.slideNext()}
              sx={{ border: "1px solid #000" }}
            >
              <ChevronRight />
            </IconButton>
          </Stack>
        </Stack>
        <Box sx={{ mt: 4 }}>
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={80}
            slidesPerView={3}
          >
            {SKILLS_CARD_DATA.map((val, i) => (
              <SwiperSlide key={i}>
                <SkillCard
                  image={val.image}
                  title={val.title}
                  description={val.description}
                  buttonText={val.buttonText}
                  key={i}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;
