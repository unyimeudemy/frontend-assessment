import { Container, Divider, Flex, Grid, GridItem } from "@chakra-ui/react";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import Overview from "../components/Overview";
import SearchBar from "./SearhBar";

export default function UserAndAdmin() {
  const container = {
    height: "923px",
    bg: "#F4F4F4",
    flexDirection: "column",
  };

  const top = {
    h: "78px",
    flexShrink: 0,
    bg: "#008F8F",
  };

  const flex = {
    marginX: "40.01px",
    mt: "40.01px",
    mb: "40.01px",
    flexDirection: "column",
    width: "1116.997px",
  };

  return (
    <Flex sx={container}>
      <Flex sx={flex}>
        <Flex sx={top}></Flex>
        <Flex bg={"#FFF"} h={"78px"}>
          <SearchBar />
        </Flex>
        <Divider height={"1px"} />
        <Flex bg={"#FFF"} h={"542px"}></Flex>
      </Flex>
    </Flex>
  );
}
