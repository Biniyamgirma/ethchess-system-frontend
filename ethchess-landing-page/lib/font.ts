import localFont from "next/font/local";

//we Define our local font

export const customFont = localFont({
  src: [
    {
      path: "../fonts/Inter-VariableFont_opsz,wght.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Inter-VariableFont_opsz,wght.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "../fonts/Inter-VariableFont_opsz,wght.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});
