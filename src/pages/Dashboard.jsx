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

/**
 *
 * @returns {JSX.Element} - Returns a react component that is
 * displayed based on the tab that is clicked on the side
 * bar.
 */

export default function Dashboard() {
  /**
   *@property {tab} - Is the value of tab from changeTabSlices.js
   * which depends on the tab just clicked.
   */
  const { tab } = useSelector((state) => state.changeTab);

  /**
   * @property {currenUser} - Is the detail of the currently logged in users
   */
  const { currentUser } = useSelector((state) => state.user);

  if (tab === "overview") {
    return (
      <Grid templateColumns={"repeat(6, 1fr)"}>
        <GridItem colSpan={1} bg={"#008F8F"} h={"100vh"}>
          <SideBar />
        </GridItem>
        <GridItem>
          <Overview
            navBarTitle="Overview"
            adminUsername={currentUser?.data?.username}
            status={currentUser?.data?.role === "admin" ? "Administrator" : ""}
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
            adminUsername={currentUser?.data?.username}
            status={currentUser?.data?.role === "admin" ? "Administrator" : ""}
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
            adminUsername={currentUser?.data?.username}
            status={currentUser?.data?.role === "admin" ? "Administrator" : ""}
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
