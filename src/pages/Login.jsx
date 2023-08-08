import {
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Image,
  Input,
} from "@chakra-ui/react";
import { Form } from "react-router-dom";

export default function Login() {
  const container = {
    bg: " #008F8F",
    height: "100vh",
    alignItems: "center",
    flexDirection: "column",
  };

  const logo = {
    width: "117px",
    height: "94px",
    flexShrink: "0px",
    marginTop: "20px",
  };

  const innerCard = {
    width: "388px",
    height: "458px",
    flexShrink: "0",
    borderRadius: "20px",
    background: "#FFF",
  };

  const button = {
    color: "#FFF",
    fontFamily: "Roboto",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "24px",
    width: "257px",
    height: "55px",
    flexShrink: 0,
    borderRadius: "10px",
    bg: "#008F8F",

    //     border-radius: 10px;
    // background: #008F8F;
  };

  return (
    <Flex sx={container}>
      <Image src={"/public/logo.png"} sx={logo} />
      <Container sx={innerCard}>
        <Form width={"auto"}>
          <FormControl mb="10px" mt={"70px"}>
            <FormLabel mb={"0"}>Email Address</FormLabel>
            <Input type="text" name="title" />
          </FormControl>
          <FormControl mb="10px">
            <FormLabel mb={"0"}>Password</FormLabel>
            <Input type="text" name="title" />
          </FormControl>
          <Flex justifyContent={"center"} alignItems={"center"} mt={"40px"}>
            <Button sx={button}>Login</Button>
          </Flex>
        </Form>
      </Container>
    </Flex>
  );
}
