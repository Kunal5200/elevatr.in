"use client";
import { Box } from "@mui/material";
import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import AnimatedStep from "./components/AnimatedStep";

const stepsData = [
  {
    largeTitleLine1: "1.Build your career",
    largeTitleLine2: "identity",
    largeDesc:
      "Create a structured profile, not just a resume. Everything about your work, skills, and experience in one place.",
    smallTitle: "1. Build your career identity",
    smallDesc1: "Create a structured profile, not just a resume.",
    smallDesc2:
      "Everything about your work, skills, and experience in one place.",
  },
  {
    largeTitleLine1: "2.Understand where",
    largeTitleLine2: "you stand",
    largeDesc:
      "See your strengths, gaps, and role readiness. No more guessing what to improve.",
    smallTitle: "2. Understand where you stand",
    smallDesc1: "See your strengths, gaps, and role readiness.",
    smallDesc2: "No more guessing what to improve.",
  },
  {
    largeTitleLine1: "3.Build your career",
    largeTitleLine2: "identity",
    largeDesc:
      "Create a structured profile, not just a resume. Everything about your work, skills, and experience in one place.",
    smallTitle: "3. Build your career identity",
    smallDesc1: "Create a structured profile, not just a resume.",
    smallDesc2:
      "Everything about your work, skills, and experience in one place.",
  },
  {
    largeTitleLine1: "4.Understand where",
    largeTitleLine2: "you stand",
    largeDesc:
      "See your strengths, gaps, and role readiness. No more guessing what to improve.",
    smallTitle: "4. Understand where you stand",
    smallDesc1: "See your strengths, gaps, and role readiness.",
    smallDesc2: "No more guessing what to improve.",
  },
];

const Steps = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <Box
      ref={containerRef}
      sx={{
        position: "relative",
        height: `${(stepsData.length + 1) * 100}vh`,
      }}
    >
      {stepsData.map((step, index) => (
        <AnimatedStep
          key={index}
          {...step}
          index={index}
          totalSteps={stepsData.length}
          isLastStep={index === stepsData.length - 1}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </Box>
  );
};

export default Steps;
