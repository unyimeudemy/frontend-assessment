import { Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function SideBar() {
  const sideBar = {
    flexDirection: "column",
    alignItems: "center",
    height: "1024px",
  };

  const logo = {
    width: "117px",
    height: "94px",
    flexShrink: "0px",
    marginTop: "20px",
  };

  const divider = {
    width: "206px",
    flexShrink: "0px",
    strokeWidth: "1px",
    stroke: "#DFDFDF",
    marginY: "30px",
  };

  const tab = {
    width: "243px",
    height: "48px",
    flexShrink: "0px",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    gap: "30px",

    _hover: {
      bg: "#51FFFF",
      color: "#303030",
    },
  };

  const text = {
    // color: "#303030",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontStyle: "normal",
    fontweight: "600",
    lineHeight: "24px",
  };

  const icon = {
    width: "24px",
    height: "24px",
    flexShrink: 0,
    color: "white",

    _hover: {
      // bg: "#51FFFF",
      color: "#303030",
    },
  };

  return (
    <Flex sx={sideBar}>
      <Image src={"/public/logo.png"} sx={logo} />
      <Divider sx={divider} />
      <Flex sx={tab}>
        <Image src={"/public/overview.svg"} sx={icon} />
        <Text sx={text}>Overview</Text>
      </Flex>
      <Flex sx={tab}>
        <Image src={"/public/users.svg"} sx={icon} />
        <Text sx={text}>Users</Text>
      </Flex>
      <Flex sx={tab}>
        <Image src={"/public/Admin.svg"} sx={icon} />
        <Text sx={text}>Admins</Text>
      </Flex>
      <Flex sx={tab}>
        <Image src={"/public/Logout.svg"} sx={icon} />
        <Text sx={text}>Logout</Text>
      </Flex>
    </Flex>
  );
}
