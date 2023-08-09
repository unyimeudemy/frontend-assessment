import { Flex, Grid, GridItem, Heading, Spacer, Text } from "@chakra-ui/react";
import SideBar from "../components/SideBar";

export default function NavBar() {
  const flex = {
    flexDirection: "spread-around",
    bg: "#FFF",
    width: "1197px",
    height: "100px",
    flexShrink: 0,
  };

  const right = {
    color: "#008F8F",
    fontFamily: " Roboto",
    fontSize: "32px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "40px",
    marginY: "30px",
    marginX: "40px",
  };

  const left1 = {
    color: "#000",
    fontFamily: " Roboto",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "24px",
    letterSpacing: "0.5px",
  };

  const left2 = {
    color: "#4C5059",
    fontFamily: " Roboto",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "20px",
    letterSpacing: "0.25px",
  };

  return (
    <Flex sx={flex}>
      <Text sx={right}>unyime</Text>
      <Spacer />
      <Flex flexDirection={"column"} m={"27px"}>
        <Text sx={left1}>unyime</Text>
        <Text sx={left2}>ayomide</Text>
      </Flex>
    </Flex>
  );
}
