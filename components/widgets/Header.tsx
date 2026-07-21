"use client";
import { COLORS } from "@/utils/enum";
import { Box, Button, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import React, { useState } from "react";
import fav from "@/images/logo/favicon.png";
import { HEADER_LINKS } from "@/utils/constant";
import Link from "next/link";
import { poppins } from "@/utils/fonts";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 20,
          display: "flex",
          justifyContent: "center",
          zIndex: 1100,
        }}
      >
        <Box
          sx={{
            backgroundColor: COLORS.HEADER_BG,
            backdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: { lg: "700px", xs: "auto" },
            padding: "8px 16px",
            borderRadius: "100px",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
            gap: { lg: "20px", xs: "40px" },
          }}
        >
          <Image src={fav} alt="logo" style={{ width: 60, height: 60 }} />
          <Box
            sx={{
              backgroundColor: COLORS.HEADER_DARK_BG,
              borderRadius: "72px",
              px: "20px",
              display: { lg: "flex", xs: "none" },
              alignItems: "center",
              justifyContent: "space-between",
              width: 400,
              height: 60,
              gap: 1,
            }}
          >
            {HEADER_LINKS.map((val, i) => (
              <Link href={val.url} key={i} style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    color: "#DEDEDE",
                    fontSize: 14,
                    fontFamily: poppins.style.fontFamily,
                    border: "1px solid #4E4E4E",
                    borderRadius: "72px",
                    height: 48,
                    width: 120,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {val.label}
                </Typography>
              </Link>
            ))}
          </Box>
          <Button
            sx={{
              display: { lg: "block", xs: "none" },
              textTransform: "initial",
              color: COLORS.BLACK,
              backgroundColor: COLORS.WHITE,
              p: "20px",
              borderRadius: "88px",
              width: 150,
              fontSize: 16,
              fontFamily: poppins.style.fontFamily,
              height: 60,
            }}
          >
            Join Waitlist
          </Button>

          {/* Hamburger Icon for Mobile */}
          <IconButton
            onClick={() => setDrawerOpen(true)}
            sx={{
              display: { lg: "none", xs: "flex" },
              color: COLORS.WHITE,
              backgroundColor: COLORS.HEADER_DARK_BG,
              width: 60,
              height: 60,
              '&:hover': {
                backgroundColor: COLORS.HEADER_DARK_BG,
              }
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: COLORS.HEADER_BG,
              backdropFilter: "blur(20px)",
              zIndex: 1200,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
            }}
          >
            <IconButton
              onClick={() => setDrawerOpen(false)}
              sx={{ position: "absolute", top: 20, right: 20, color: COLORS.WHITE }}
            >
              <CloseIcon fontSize="large" />
            </IconButton>

            {HEADER_LINKS.map((val, i) => (
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                key={i}
              >
                <Link href={val.url} style={{ textDecoration: "none" }} onClick={() => setDrawerOpen(false)}>
                  <Typography
                    sx={{
                      color: COLORS.WHITE,
                      fontSize: 32,
                      fontFamily: poppins.style.fontFamily,
                      fontWeight: 600,
                    }}
                  >
                    {val.label}
                  </Typography>
                </Link>
              </Box>
            ))}
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + HEADER_LINKS.length * 0.1 }}
            >
              <Button
                onClick={() => setDrawerOpen(false)}
                sx={{
                  textTransform: "initial",
                  color: COLORS.BLACK,
                  backgroundColor: COLORS.WHITE,
                  px: 6,
                  py: 2,
                  borderRadius: "88px",
                  fontSize: 18,
                  fontFamily: poppins.style.fontFamily,
                  mt: 4,
                }}
              >
                Join Waitlist
              </Button>
            </Box>
          </Box>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
