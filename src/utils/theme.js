import { extendTheme } from "@chakra-ui/react";

const fonts = {
  body: "system-ui, sans-serif",
  heading: "Georgia, serif",
  mono: "Menlo, monospace",
  //   myRobo: "Roboto",
};

const breakpoints = {
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
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
