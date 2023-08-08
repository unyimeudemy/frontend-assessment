import {
  Button,
  Card,
  Center,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { Form } from "react-router-dom";

export default function SignUp() {
  const loginText1 = {
    color: "#FFF",
    fontSize: "40px",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "24px",
  };

  const loginText2 = {
    color: "#C8C8C8",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "24px",
    width: "248px",
    height: "45px",
    flexShrink: "0px",
  };

  const logo = {
    width: "137px",
    height: "99px",
    flexShrink: "0px",
  };

  const rightCard = {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "10px",
    // bg: "#008F8F",
    height: "40px",
    width: "auto",
    // height: "auto",
  };

  const contentFlexRight = {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: 0,
    height: "100vh",
  };
  const contentFlexLeft = {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: 0,
    height: "50vh",
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
    <Grid templateColumns={"repeat(6, 1fr)"}>
      <GridItem colSpan={3} bg={"#008F8F"} h={"100vh"}>
        <Flex sx={contentFlexRight}>
          <Image src={"/public/logo.png"} sx={logo} />
          <Text sx={loginText1}>Create Account</Text>
          <Text sx={loginText2}>
            Join the community and have fun predicting!
          </Text>
        </Flex>
      </GridItem>
      <GridItem colSpan={3} h={"100vh"}>
        <Flex sx={contentFlexLeft} color={"black"}>
          <Container sx={rightCard}>
            <Form width={"auto"}>
              <FormControl mb="10px" width={"450px"}>
                <FormLabel mb={"0"}>First Name</FormLabel>
                <Input type="text" name="title" />
              </FormControl>
              <FormControl mb="10px">
                <FormLabel mb={"0"}>Last Name</FormLabel>
                <Input type="text" name="title" />
              </FormControl>
              <FormControl mb="10px">
                <FormLabel mb={"0"}>Username</FormLabel>
                <Input type="text" name="title" />
              </FormControl>
              <FormControl mb="10px">
                <FormLabel mb={"0"}>Email Address</FormLabel>
                <Input type="text" name="title" />
              </FormControl>
              <FormControl mb="10px">
                <FormLabel mb={"0"}>Password</FormLabel>
                <Input type="text" name="title" />
              </FormControl>
              <FormControl mb="10px">
                <FormLabel mb={"0"}>Paword Confirm</FormLabel>
                <Input type="text" name="title" />
              </FormControl>
            </Form>
            <Flex justifyContent={"center"} alignItems={"center"} flex={1}>
              <Button sx={button}>Sign up</Button>
            </Flex>
          </Container>
        </Flex>
      </GridItem>
    </Grid>
  );
}
