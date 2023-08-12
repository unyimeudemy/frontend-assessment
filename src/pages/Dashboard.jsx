import { Container, Grid, GridItem, Text } from "@chakra-ui/react";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import Overview from "../components/Overview";
import UserAndAdmin from "../components/UserAndAdmin";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Axios from "../lib/api/axios";
import Logout from "../components/Logout";
import { useState } from "react";

export default function Dashboard() {
  ////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////

  //   const dispatch = useDispatch();
  const { tab } = useSelector((state) => state.changeTab);
  const { currentUser } = useSelector((state) => state.user);
  const [logoutStatus, setLogoutStatus] = useState(false);

  if (tab === "overview") {
    return (
      <Grid templateColumns={"repeat(6, 1fr)"}>
        <GridItem colSpan={1} bg={"#008F8F"} h={"100vh"}>
          <SideBar />
        </GridItem>
        <GridItem>
          <Overview
            navBarTitle="Overview"
            adminUsername={currentUser.data.username}
            status={currentUser.data.role === "admin" ? "Administrator" : ""}
          />
        </GridItem>
      </Grid>
    );
  } else if (tab === "admins") {
    return (
      <Grid templateColumns={"repeat(6, 1fr)"}>
        <GridItem colSpan={1} bg={"#008F8F"} h={"100vh"}>
          <SideBar />
        </GridItem>
        <GridItem>
          <UserAndAdmin
            searchPlaceHolder="Search for Admins"
            navBarTitle="Admins"
            adminUsername={currentUser.data.username}
            status={currentUser.data.role === "admin" ? "Administrator" : ""}
            listTitle="Admin’s Name"
          />
        </GridItem>
      </Grid>
    );
  } else if (tab === "users") {
    return (
      <Grid templateColumns={"repeat(6, 1fr)"}>
        <GridItem colSpan={1} bg={"#008F8F"} h={"100vh"}>
          <SideBar />
        </GridItem>
        <GridItem>
          <UserAndAdmin
            searchPlaceHolder="Search for Users"
            navBarTitle="Users"
            adminUsername={currentUser.data.username}
            status={currentUser.data.role === "admin" ? "Administrator" : ""}
            listTitle="User’s Name"
          />
        </GridItem>
      </Grid>
    );
  } else if (tab === "logout") {
    return (
      <Grid templateColumns={"repeat(6, 1fr)"}>
        <GridItem colSpan={1} bg={"#008F8F"} h={"100vh"}>
          <SideBar />
        </GridItem>
        <GridItem>
          <Logout />
        </GridItem>
      </Grid>
    );
  }
}
