import { Container, Flex, Select, Text } from "@chakra-ui/react";

export default function SelectDropDown() {
  const container = {
    w: "169.426px",
    h: "40px",
    flexShrink: 0,
    borderRadius: "5px",
    border: "1px solid #B3B3B3",
    bg: "#FFF",
    color: "#828282",
    fontFamily: " Roboto",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "24px",
    letterSpacing: "0.5px",
    mr: "66.96px",
  };

  const flex = {
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Flex sx={flex}>
      <Select placeholder="Select option" sx={container}>
        <option value="option1">option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </Flex>
  );
}
