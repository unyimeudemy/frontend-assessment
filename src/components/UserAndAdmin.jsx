import {
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Select,
  Spacer,
  Text,
} from "@chakra-ui/react";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import Overview from "../components/Overview";
import SearchBar from "./SearhBar";
import SelectDropDown from "./SelectDropDown";
import UserListItem1 from "./UserListItem1";

export default function UserAndAdmin({
  navBarTitle,
  adminUsername,
  status,
  searchPlaceHolder,
  listTitle,
  username = "Adelanke Adelanke",
  imageSrc = "/public/profilePic.png",
}) {
  const container = {
    height: "923px",
    bg: "#F4F4F4",
    flexDirection: "column",
  };

  const top = {
    h: "78px",
    flexShrink: 0,
    bg: "#008F8F",
    justify: "space-around",
  };

  const flex = {
    marginX: "40.01px",
    mt: "40.01px",
    mb: "40.01px",
    flexDirection: "column",
    width: "1116.997px",
  };

  const text = {
    color: "#303030",
    fontFamily: " Roboto",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "28px",
    marginY: "24px",
    ml: "30px",
  };

  const flexList = {
    bg: "#FFF",
    height: "542px",
    flexDirection: "column",

    overflow: "scroll",

    "&::-webkit-scrollbar-thumb": {
      background: "#008F8F", // Changes the scrollbar thumb color to green
      borderRadius: "24px",
    },
    "&::-webkit-scrollbar": {
      width: "6px", // Adjusts the width of the scrollbar
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-track": {
      width: "6px", // Adjusts the width of the scrollbar track
      borderRadius: "10px",
    },
  };

  return (
    <>
      <NavBar
        status={status}
        navBarTitle={navBarTitle}
        adminUsername={adminUsername}
      />
      <Flex sx={container}>
        <Flex sx={flex}>
          <Flex sx={top}>
            <SearchBar searchPlaceHolder={searchPlaceHolder} />
            <Spacer />
            <SelectDropDown />
          </Flex>
          <Flex bg={"#FFF"} h={"78px"}>
            <Text sx={text}>{listTitle}</Text>
          </Flex>
          <Divider height={"1px"} />
          <Flex sx={flexList}>
            <UserListItem1 name={username} imageSrc={imageSrc} />
            <UserListItem1 name={username} imageSrc={imageSrc} />
            <UserListItem1 name={username} imageSrc={imageSrc} />
            <UserListItem1 name={username} imageSrc={imageSrc} />
            <UserListItem1 name={username} imageSrc={imageSrc} />
            <UserListItem1 name={username} imageSrc={imageSrc} />
            <UserListItem1 name={username} imageSrc={imageSrc} />
            <UserListItem1 name={username} imageSrc={imageSrc} />
            <UserListItem1 name={username} imageSrc={imageSrc} />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
