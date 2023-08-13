import React, { useState } from "react";
import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Select,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useLocation } from "react-router-dom";

/**
 *
 * @param {string} searchPlaceHolder - gotten from UserAndAdmin.jsx
 * @returns {JSX.Element} - returns a search component that is used for
 * searching users and admins in users and admin panel that are listed on
 * dashboard.
 */

export default function SearchBar({ searchPlaceHolder }) {
  const searchBar = {
    borderRadius: "5px",
    width: " 321.606px",
    height: " 57px",
    bg: "#FFF",
    mt: "11px",
    mb: "10px",
    ml: "32.46px",
    flexShrink: 0,
  };

  const flex = {
    gap: "8.12px",
    alignItems: "center",
    justifyContent: "center",
    ml: "16.23px",
  };

  const input = {
    w: "260px",
  };

  const [searchQ, setSearchQ] = useState("");

  const handleSearch = () => {
    console.log("search clicked: ");
  };

  return (
    <InputGroup sx={searchBar}>
      <Flex sx={flex}>
        <Search2Icon
          color="black"
          cursor={"pointer"}
          onClick={() => handleSearch}
        />
        <Input
          sx={input}
          type="text"
          placeholder={searchPlaceHolder}
          _focus={{ boxShadow: "none" }}
          border={"none"}
          onChange={(e) => {
            setSearchQ(e.target.value);
          }}
        />
      </Flex>
    </InputGroup>
  );
}
