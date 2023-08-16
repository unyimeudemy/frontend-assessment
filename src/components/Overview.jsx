import { Container, Flex, Image, Stack, Text } from "@chakra-ui/react";
import UserListItem from "./UserListItem";
import NavBar from "./NavBar";
import axios from "axios";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import Axios from "../lib/api/axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allUsersSuccess } from "../redux/slices/allUsersSlice";
import { useNavigate } from "react-router-dom";

/**
 *
 * @param {string} navBarTitle - this is from Dashboard.jsx
 * @param {string} adminUsername  - this is from Dashboard.jsx
 * @param {string} status  - this is from Dashboard.jsx
 * @returns {JSX.Element} - returns a component that displays two
 * different list. One for users and the other for admins. Each of this list
 * uses the component from UserListItem.jsx and it also has a loading
 * screen to reduce load time frustration for users.
 */

export default function Overview({ navBarTitle, adminUsername, status }) {
  const container = {
    width: "auto",
    height: "924px",
    bg: "#F4F4F4",
    flexDirection: "column",
    // bg: "red",
  };

  const topRightCard = {
    width: "346px",
    height: "168px",
    // flexShrink: 0,
    borderRadius: "20px",
    background: "#004F4F",
    gap: "10px",
    padding: "20px",
    justifyContent: "flex-start",
  };

  const topLeftCard = {
    width: "346px",
    height: "168px",
    flexShrink: 0,
    borderRadius: "20px",
    background: "#007575",
    gap: "10px",
    padding: "20px",
  };

  const text = {
    color: "#E0E0E0",
    fontFamily: " Roboto",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "24px",
    letterSpacing: "0.15px",
    width: "138px",
    // bg: "red",
  };

  const number = {
    color: "#FFF",
    fontFamily: " Roboto",
    fontSize: "28px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "36px",
    width: "138px",
    mt: "8px",
    // bg: "blue",
  };

  const icon = {
    width: "58px",
    height: "58px",
    flexShrink: "0",
    bg: "#FFFFFF",
    borderRadius: "100%",
    alignItems: "center",
    justifyContent: "center",
  };

  const cardList = {
    width: "540px",
    width: { base: "460px" },
    height: "512px",
    bg: "#FFF",
    mb: "83px",
    mt: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 24px 0px rgba(172, 172, 172, 0.25)",
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

  const outSideRight = {
    height: "570px",
    // width: { sm: "300px" },
    // height: "570px",
    // bg: "red",
  };

  const textDown = {
    color: "#1F1F1F",
    fontFamily: "Roboto",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "32px",
    ml: { base: "120px", md: "0px" },
  };

  const [users, setUsers] = useState([]);
  const [admins, setAdmins] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /**
   * Here we get all the user and then filter by "role = user"
   * and "role = admin". Then we send each filtered data to the
   * appropriate card and then use <UserAndAdmin/> component to
   * display them as a list.
   */

  useEffect(() => {
    (async () => {
      try {
        const res = await Axios.get("/admin/get-users");
        const filteredUsers = res?.data?.data.filter(
          (item) => item.role === "user"
        );
        const filteredAdmins = res?.data?.data.filter(
          (item) => item.role === "admin"
        );

        setUsers(filteredUsers);
        setAdmins(filteredAdmins);
      } catch (error) {
        if (error.message == "Request failed with status code 401") {
          console.log("not authenticated");
          navigate("/login");
        }
      }
    })();
  }, []);
  //   func();
  //   console.log("admins: ", admins);

  return (
    <>
      <NavBar
        navBarTitle={navBarTitle}
        adminUsername={adminUsername}
        status={status}
      />
      <Flex sx={container}>
        <Flex
          p={"39px"}
          justifyContent={"flex-start"}
          gap={"39px"}
          flexDirection={{ base: "column", sm: "row" }}
        >
          <Flex sx={topRightCard} justifyContent={"flex-start"}>
            <Flex flexDirection={"column"} width={"438px"}>
              <Text sx={text}>TOTAL NUMBER OF USERS</Text>
              <Text sx={number}>1,000,000</Text>
            </Flex>
            <Flex alignItems={"center"}>
              <Flex sx={icon}>
                <Image src={"/usersIcon.svg"} />
              </Flex>
            </Flex>
          </Flex>
          <Flex sx={topLeftCard}>
            <Flex flexDirection={"column"} width={"438px"}>
              <Text sx={text}>TOTAL NUMBER OF ADMINS</Text>
              <Text sx={number}>970</Text>
            </Flex>
            <Flex alignItems={"center"}>
              <Flex sx={icon}>
                <Image src={"/adminIcon.svg"} />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          h={"122px"}
          ml={"39px"}
          gap={"37px"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Flex flexDirection={"column"} sx={outSideRight}>
            <Text sx={textDown}>List Of Users</Text>
            <Container sx={cardList}>
              {users.length == 0 ? (
                <Stack mt={"25px"}>
                  <Skeleton height="56px" />
                  <Skeleton height="56px" />
                  <Skeleton height="56px" />
                  <Skeleton height="56px" />
                  <Skeleton height="56px" />
                  <Skeleton height="56px" />
                </Stack>
              ) : (
                users?.map((user, i) => (
                  <UserListItem
                    key={i}
                    firstName={user.firstName}
                    lastName={user.lastName}
                  />
                ))
              )}
            </Container>
          </Flex>
          <Flex flexDirection={"column"} sx={outSideRight}>
            <Text sx={textDown}>List Of Admins</Text>
            <Container sx={cardList}>
              {users.length == 0 ? (
                <Stack mt={"25px"}>
                  <Skeleton height="56px" />
                  <Skeleton height="56px" />
                  <Skeleton height="56px" />
                  <Skeleton height="56px" />
                  <Skeleton height="56px" />
                  <Skeleton height="56px" />
                </Stack>
              ) : (
                admins?.map((admin, i) => (
                  <UserListItem
                    key={i}
                    firstName={admin.firstName}
                    lastName={admin.lastName}
                  />
                ))
              )}
            </Container>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
