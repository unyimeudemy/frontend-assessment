import { extendTheme } from "@chakra-ui/react";

const fonts = {
  body: "system-ui, sans-serif",
  heading: "Georgia, serif",
  mono: "Menlo, monospace",
  //   myRobo: "Roboto",
};

const breakpoints = {
  sm: "425px", // tablet
  md: "768px", // small laptops
  lg: "1024px", // large laptops
  xl: "1440px", // small desktop
  "2xl": "2560px", // large desktop
};

const colors = {
  black: "#16161D",
  myGreen: "#00b300",
};

const theme = extendTheme({
  colors,
  fonts,
  breakpoints,
});

export default theme;
