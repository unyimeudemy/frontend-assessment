import { Center, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import Overview from "../components/Overview";

/**
 *
 * @param {string} firstName - this is gotten from overview
 * @param {string} lastName - this is gotten from overview
 * @returns {JSX.Element} - returns a react component that is used to display
 * users and admins in the overview tab of the dashboard.
 */

export default function UserListItem({ firstName, lastName }) {
  const left = {
    colSpan: 1,
    h: "56px",
    flexShrink: 1,
    borderRadius: "10px",
    bg: " lightgray 50% / cover no-repeat, #C4C4C4",
  };

  const middle = {
    color: "#333",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeightt: 500,
    lineHeight: "24px",
  };

  const right = {
    color: "#008F8F",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeightt: 400,
    lineHeight: "24px",
    textAlign: "right",
    cursor: "pointer",
  };

  return (
    <Grid templateColumns={"repeat(9, 1fr)"} marginY={"24px"} ml={"41px"}>
      <GridItem sx={left}>
        <Image src="/profilePic.png" />
      </GridItem>
      <GridItem colSpan={6} h={"30px"}>
        <Flex alignItems={"center"} h={"56px"}>
          <Text sx={middle} pl={"16px"}>
            {`${firstName}  ${lastName}`}
          </Text>
        </Flex>
      </GridItem>
      <GridItem colSpan={2} sx={right}>
        <Flex alignItems={"center"} h={"56px"}>
          <Text>View Details</Text>
        </Flex>
      </GridItem>
    </Grid>
  );
}
