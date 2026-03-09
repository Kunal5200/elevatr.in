import { Poppins } from "next/font/google";
import localFont from "next/font/local";
export const surgena = localFont({
  src: [
    {
      path: "../public/fonts/surgena/Surgena-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/surgena/Surgena-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/surgena/Surgena-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/surgena/Surgena-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
});

export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  subsets: ["latin"],
});
