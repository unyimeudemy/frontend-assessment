import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { overview } from "../redux/slices/changeTabSlices";

/**
 *
 * @returns {JSX.Element} - This is returns a logout prompt that popups.
 * The cancel button redirects to overview tab while logout button clears the
 * token on the local storage , redirects the overview tab which at this point
 * will redirect the login page since the overview component is protected.
 */

export default function Logout() {
  const container = {
    width: "100%",
    height: "100vh",
    position: "absolute",
    top: 0,
    left: 0,
    bg: "#d9d9d95b",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 5,
    p: "10px",
  };

  const wrapper = {
    width: "450px",
    height: "360px",
    backgroundColor: "#008F8F",
    color: "black",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    position: "relative",
    borderRadius: "5px",
    border: "#333 solid 1px",
    /* top: 150px, */
    right: "0px",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "10px 4px 24px 0px rgba(172, 172, 172, 0.25)",
  };

  const text = {
    color: "#E0E0E0",
    fontFamily: " Roboto",
    fontSize: "30px",
    fontStyle: "normal",
    fontWeight: "900",
  };

  const dispatch = useDispatch();

  return (
    <Flex sx={container}>
      <Flex sx={wrapper}>
        <Image src={"/logo.png"} />
        <Text sx={text}>Sure you want to logout?</Text>
        <Flex gap={"30px"}>
          <Button
            onClick={() => {
              localStorage.removeItem("AccessToken");
              dispatch(overview());
            }}
          >
            Logout
          </Button>
          <Button
            onClick={() => {
              dispatch(overview());
            }}
          >
            Cancel
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
// sx={logo}
