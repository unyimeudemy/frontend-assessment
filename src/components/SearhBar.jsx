import React from "react";
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

export default function SearchBar({ searchPlaceHolder }) {
  const searchBar = {
    borderRadius: "5px",
    width: " 321.606px",
    height: " 57px",
    flexShrink: 0,
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

  return (
    <InputGroup sx={searchBar}>
      <Flex sx={flex}>
        <Search2Icon color="black" />
        <Input
          sx={input}
          type="text"
          placeholder={searchPlaceHolder}
          _focus={{ boxShadow: "none" }}
          border={"none"}
        />
      </Flex>
    </InputGroup>
  );
}
