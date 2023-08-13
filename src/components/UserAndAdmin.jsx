import {
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Select,
  Spacer,
  Text,
  Stack,
  Image,
  useSlider,
} from "@chakra-ui/react";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import Overview from "../components/Overview";
import SearchBar from "./SearhBar";
import SelectDropDown from "./SelectDropDown";
import UserListItem1 from "./UserListItem1";
import { useState } from "react";
import Axios from "../lib/api/axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { all } from "../redux/slices/popUpStatusSlice";

/**
 *
 * @param {string} navBarTitle - This is gotten when component was called in  dashboard
 * @param {string} adminUsername- This is gotten when component was called in  dashboard
 * @param {string} status  - This is gotten when component was called in  dashboard
 * @param {string} searchPlaceHolder - This is gotten when component was called in  dashboard
 * @param {string} listTitle - This is gotten when component was called in  dashboard
 *
 * @returns {JSX.Element} - returns a react component that serves as the
 * the list container for users and admins list in both users and admins
 * tab of the dashboard respectively. This is done by using the component in
 *  userListItem1.jsx.
 *
 */

export default function UserAndAdmin({
  navBarTitle,
  adminUsername,
  status,
  searchPlaceHolder,
  listTitle,
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

  const popUp = {
    width: "169.426px",
    height: "40px",
    flexShrink: 0,
    borderRadius: "5px",
    border: "1px solid #B3B3B3",
    bg: "#FFF",
    mt: "14px",
    mr: "66.9px",
    alignItems: "center",
    justifyContent: "space-around",
    cursor: "pointer",
  };

  const arrowDown = {
    width: "13.819px",
    height: "8px",
    flexShrink: 0,
    fill: "#353A45",
  };

  const popUpText = {
    color: "#828282",
    fontFamily: " Roboto",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "24px",
    lineSpacing: "0.5px",
  };

  const [usersAndAdmins, setUsersAndAdmins] = useState([]);
  const [popUpStatus, setPopUpStatus] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /**
   * In the react hook, a request is made to backend and the data
   * gotten is filtered by those with "role = admin" and "role = user"
   * separately. The filtered data is stored in a useState hook and then
   * used to update the UI.
   *
   * If the fetching process is unsuccessful due to authentication issue,
   * user is redirected to login page.
   *
   * The filter option popup is also rendered here outside the main component
   */

  useEffect(() => {
    const func = async () => {
      try {
        if (navBarTitle === "Admins") {
          const res = await Axios.get("/admin/get-users");
          const filteredAdmins = res.data.data.filter(
            (item) => item.role === "admin"
          );
          setUsersAndAdmins(filteredAdmins);
        } else {
          const res = await Axios.get("/admin/get-users");
          const filteredUsers = res.data.data.filter(
            (item) => item.role === "user"
          );
          setUsersAndAdmins(filteredUsers);
        }
      } catch (err) {
        navigate("/login");
        console.log("error: ", err.message);
      }
    };
    func();
  }, [navBarTitle]);

  const { txt } = useSelector((state) => state.popUpStatus);

  return (
    <>
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
              <Flex sx={popUp} onClick={() => setPopUpStatus(!popUpStatus)}>
                <Text sx={popUpText}>{txt}</Text>
                <Image src={"/public/arrowDown.svg"} sx={arrowDown} />
              </Flex>
            </Flex>
            <Flex bg={"#FFF"} h={"78px"}>
              <Text sx={text}>{listTitle}</Text>
            </Flex>
            <Divider height={"1px"} />
            <Flex sx={flexList}>
              {usersAndAdmins.length == 0 ? (
                <Stack mt={"25px"} mr={"20px"} ml={"20px"}>
                  <Skeleton height="56px" />
                  <Skeleton height="56px" />
                  <Skeleton height="56px" />
                  <Skeleton height="56px" />
                  <Skeleton height="56px" />
                  <Skeleton height="56px" />
                  <Skeleton height="56px" />
                  <Skeleton height="56px" />
                </Stack>
              ) : (
                usersAndAdmins?.map((userOrAdmin, i) => (
                  <UserListItem1
                    key={i}
                    firstName={userOrAdmin.firstName}
                    lastName={userOrAdmin.lastName}
                    imageSrc={"/public/profilePic.png"}
                  />
                ))
              )}
            </Flex>
          </Flex>
        </Flex>
      </>
      {popUpStatus && (
        <SelectDropDown
          popUpStatus={popUpStatus}
          setPopUpStatus={setPopUpStatus}
        />
      )}
    </>
  );
}
