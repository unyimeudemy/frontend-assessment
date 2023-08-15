import {
  Center,
  Divider,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import Overview from "../components/Overview";

/**
 *
 * @param {string} firstName - this gotten from UserAndAdmin.jsx component
 * @param {string} lastname -this gotten from UserAndAdmin.jsx component
 * @param {string} imageSrc -this gotten from UserAndAdmin.jsx component
 * @returns {JSX.Element} - returns a react component that is used to diplay
 * all the users and admins in the users and admins tab of the dashboard respectively.
 */

export default function UserListItem1({ firstName, lastName, imageSrc }) {
  const left = {
    colSpan: 1,
    h: "56px",
    w: "56px",
    flexShrink: 1,
    borderRadius: "10px",
    bg: " lightgray 50% / cover no-repeat, #C4C4C4",
  };

  const middle = {
    color: "#333",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "24px",
  };

  const right = {
    color: "#008F8F",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "24px",
    textAlign: "right",
  };

  const detailButton = {
    alignItems: "center",
    height: "36px",
    display: "inline-flex",
    padding: "8px",
    justifyContent: "center",
    gap: "10px",
    mr: "80px",
    borderRadius: "5px",
    bg: "#51FFFF",
  };

  const text = {
    color: "#1F1F1F",
    fontFamily: "Roboto",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "20px",
    lineSpacing: "0.1px",
  };

  return (
    <Flex flexDirection={"column"}>
      <Grid templateColumns={"repeat(9, 1fr)"} marginY={"18px"} ml={"30px"}>
        <GridItem sx={left}>
          <Image src={imageSrc} />
        </GridItem>
        <GridItem colSpan={6} h={"30px"}>
          <Flex alignItems={"center"} h={"56px"}>
            <Text sx={middle} pl={"16px"}>
              {`${firstName}  ${lastName}`}
            </Text>
          </Flex>
        </GridItem>
        <GridItem colSpan={2} sx={right}>
          <Flex sx={detailButton}>
            <Text sx={text}>View Details</Text>
          </Flex>
        </GridItem>
      </Grid>
      <Divider />
    </Flex>
  );
}
