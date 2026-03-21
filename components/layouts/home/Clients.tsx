import { Box, Container, Grid, Typography } from "@mui/material";
import { poppins } from "@/utils/fonts";
import { Clients as clientData } from "@/utils/constant";
import SlidingLogoMarquee from "@/components/widgets/Sliding-Logo";
import Image from "next/image";
import React from "react";

const Clients = () => {
  const marqueeItems = clientData.map((client, index) => ({
    id: `client-${index}`,
    content: (
      <Box sx={{ px: 4 }}>
        <Image
          src={client.img}
          alt={`client-${index}`}
          style={{
            height: "20px",
            width: "auto",
            filter: "grayscale(100%) opacity(0.5)",
            transition: "all 0.3s ease",
          }}
          className="hover:filter-none hover:opacity-100"
        />
      </Box>
    ),
  }));

  return (
    <Box sx={{ mt: 10 }}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid size={12} margin={"auto"}>
            <Typography
              sx={{
                fontSize: 22,
                textAlign: "center",
                fontFamily: poppins.style.fontFamily,
                color: "#646464",
                mb: 6,
              }}
            >
              It comes from moving with clarity. Replace chaos with structure,
              intelligence, and confidence.
            </Typography>
            <SlidingLogoMarquee
              items={marqueeItems}
              speed={10}
              //   height="80px"
              pauseOnHover={true}
              showControls={false}
              enableBlur={true}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Clients;
