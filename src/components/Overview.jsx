import { Container, Flex, Image, Stack, Text } from "@chakra-ui/react";
import UserListItem from "./UserListItem";
import NavBar from "./NavBar";
import axios from "axios";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import Axios from "../lib/api/axios";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allUsersSuccess } from "../redux/slices/allUsersSlice";
import { useNavigate } from "react-router-dom";

export default function Overview({ navBarTitle, adminUsername, status }) {
  const container = {
    // width: "1440px",
    height: "124vh",
    bg: "#F4F4F4",
    flexDirection: "column",
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
  };

  const textDown = {
    color: "#1F1F1F",
    fontFamily: "Roboto",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeightt: "600",
    lineHeight: "32px",
  };

  const [users, setUsers] = useState([]);
  const [admins, setAdmins] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const func = async () => {
    try {
      const res = await Axios.get("/admin/get-users");
      const filteredUsers = res.data.data.filter(
        (item) => item.role === "user"
      );
      const filteredAdmins = res.data.data.filter(
        (item) => item.role === "admin"
      );

      setUsers(filteredUsers);
      setAdmins(filteredAdmins);
    } catch (error) {
      navigate("/login");
      console.log(error.message);
    }
  };
  func();

  //   if (users?.length == 0) {
  //     console.log("entered");
  //     dispatch(allUsersSuccess());
  //     const { loading } = useSelector((state) => state.allUsers);

  //     console.log(loading);
  //   }

  //   console.log("users: ", users);

  return (
    <>
      <NavBar
        navBarTitle={navBarTitle}
        adminUsername={adminUsername}
        status={status}
      />
      <Flex sx={container}>
        <Flex p={"39px"} justifyContent={"flex-start"} gap={"39px"}>
          <Flex sx={topRightCard} justifyContent={"flex-start"}>
            <Flex flexDirection={"column"} width={"438px"}>
              <Text sx={text}>TOTAL NUMBER OF USERS</Text>
              <Text sx={number}>1,000,000</Text>
            </Flex>
            <Flex alignItems={"center"}>
              <Flex sx={icon}>
                <Image src={"/public/usersIcon.svg"} />
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
                <Image src={"/public/adminIcon.svg"} />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex h={"122px"} ml={"39px"} gap={"37px"}>
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
                  <UserListItem key={i} username={admin.username} />
                ))
              )}
            </Container>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
