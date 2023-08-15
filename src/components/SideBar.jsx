import { Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import {
  admins,
  logout,
  overview,
  users,
} from "../redux/slices/changeTabSlices";
import { useState } from "react";
import Logout from "./Logout";

/**
 *
 * @returns {JSX.Element} - returns a side bar that is used to change
 * the tabs on the dashboard.
 *
 * Onclick of a tab, the identity of the current tab is registered in
 * changeTabSlices.js so that the appropriate page can be displayed.
 */

export default function SideBar() {
  const sideBar = {
    flexDirection: "column",
    alignItems: "center",
    height: "1024px",
    bg: "#008F8F",
  };

  const logo = {
    width: "117px",
    height: "94px",
    flexShrink: "0px",
    marginTop: "20px",
  };

  const divider = {
    width: "206px",
    flexShrink: "0px",
    strokeWidth: "1px",
    stroke: "#DFDFDF",
    marginY: "30px",
  };

  const tabV = {
    width: "243px",
    height: "48px",
    // flexShrink: "0px",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    // gap: "30px",
    cursor: "pointer",

    _hover: {
      bg: "#51FFFF",
      color: "#303030",
    },
  };

  const text = {
    // color: "#303030",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontStyle: "normal",
    fontweight: "600",
    lineHeight: "24px",
  };

  const icon = {
    width: "24px",
    height: "24px",
    flexShrink: 0,
    color: "white",
    mr: "18px",

    _hover: {
      // bg: "",
      color: "#303030",
      fontweight: "600px",
    },
  };

  const dispatch = useDispatch();
  const { tab } = useSelector((state) => state.changeTab);
  const [logoutStatus, setLogoutStatus] = useState(false);

  return (
    <>
      <Flex sx={sideBar}>
        <Image src={"/logo.png"} sx={logo} />
        <Divider sx={divider} />
        <Flex
          sx={tabV}
          bg={tab === "overview" && "#51FFFF"}
          onClick={() => dispatch(overview())}
        >
          <Image src={"/whiteOverviewIcon.svg"} sx={icon} />
          <Text sx={text}>Overview</Text>
        </Flex>
        <Flex
          sx={tabV}
          onClick={() => dispatch(users())}
          bg={tab === "users" && "#51FFFF"}
        >
          <Image src={"/users.svg"} sx={icon} />
          <Text sx={text} ml={"10px"}>
            Users
          </Text>
        </Flex>
        <Flex
          sx={tabV}
          onClick={() => dispatch(admins())}
          bg={tab === "admins" && "#51FFFF"}
        >
          <Image src={"/Admin.svg"} sx={icon} />
          <Text sx={text}>Admins</Text>
        </Flex>
        <Flex
          sx={tabV}
          onClick={() => dispatch(logout())}
          bg={tab === "logout" && "#51FFFF"}
          color={tab === "logout" && "#303030"}
        >
          <Image src={"/Logout.svg"} sx={icon} />
          <Text sx={text}>Logout</Text>
        </Flex>
      </Flex>
    </>
  );
}
