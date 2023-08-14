import { Container, Flex, Select, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { active, all, inActive } from "../redux/slices/popUpStatusSlice";

/**
 *
 * @param {string} popUpStatus - this is from UserAndAdmin.jsx
 * @returns {JSX.Element} - returns a popup component that is used
 * to filter the users or admins by those still active or inactive in
 * the users and admins panel respectively.
 *
 * Here on click of any option, the popUpStatus hook is updated in
 * UserAndAdmin.jsx to close the popup. The UI of the dropdown
 * button is updated to reflect the option just chosen in the list by
 * calling the corresponding function in the popUpStatusSlice.js
 */

export default function SelectDropDown({ popUpStatus, setPopUpStatus }) {
  const container = {
    flexDirection: "column",
    bg: "#FFF",
    borderRadius: "5px",
    width: "190px",
    height: "178px",
    flexShrink: 0,
    // gap: "31px",
    position: "absolute",
    // right: "80px",
    right: "5px",
    top: "213px",
    zIndex: 1,
    boxShadow: "0px 4px 24px 0px rgba(172, 172, 172, 0.25)",
  };

  const innerFlex = {
    color: "#4F4F4F",
    fontFamily: " Roboto",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "24px",
    mr: "13px",
    ml: "10px",
    bg: "#FFF",
    cursor: "pointer",
    alignItems: "center",
    borderRadius: "5px",
    h: "50px",

    _hover: {
      bg: "#51FFFF",
      color: "#303030",
    },
  };

  const text = {
    ml: "13px",
  };

  const dispatch = useDispatch();

  return (
    <Flex sx={container}>
      <Flex
        sx={innerFlex}
        mt={"22px"}
        onClick={() => {
          setPopUpStatus(!popUpStatus);
          dispatch(all());
        }}
      >
        <Text sx={text}>All</Text>
      </Flex>
      <Flex
        sx={innerFlex}
        onClick={() => {
          setPopUpStatus(!popUpStatus);
          dispatch(active());
        }}
      >
        <Text sx={text}> Active</Text>
      </Flex>
      <Flex
        sx={innerFlex}
        onClick={() => {
          setPopUpStatus(!popUpStatus);
          dispatch(inActive());
        }}
      >
        <Text sx={text}>Inactive</Text>
      </Flex>
    </Flex>
  );
}
