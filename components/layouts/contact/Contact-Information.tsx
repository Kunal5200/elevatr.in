import { poppins } from "@/utils/fonts";
import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

const ContactInformation = () => {
  return (
    <Box sx={{ mt: 10 }}>
      <Container maxWidth="lg">
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontSize: 24,
                fontWeight: 400,
              }}
            >
              Contact Info
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default ContactInformation;
