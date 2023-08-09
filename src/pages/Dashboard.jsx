import { Grid, GridItem } from "@chakra-ui/react";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import Overview from "../components/Overview";
import UserAndAdmin from "../components/UserAndAdmin";

export default function Dashboard() {
  return (
    <Grid templateColumns={"repeat(6, 1fr)"}>
      <GridItem colSpan={1} bg={"#008F8F"} h={"100vh"}>
        <SideBar />
      </GridItem>
      <GridItem>
        <NavBar />
        {/* <Overview /> */}
        <UserAndAdmin />
      </GridItem>
    </Grid>
  );
}
