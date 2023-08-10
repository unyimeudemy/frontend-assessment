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
import axios from "axios";
import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeat_password, setPasswordConfirm] = useState("");

  const navigate = useNavigate();

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
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log("login clicked");
    console.log("res.data: ", username, firstName);
    navigate("/");

    try {
      const res = await axios.post(
        "https://test.3scorers.com/api/v1/admin/sign-up/?adminId=1",
        {
          firstName,
          lastName,
          username,
          email,
          password,
          repeat_password,
        }
      );
    } catch (err) {
      console.log(err.message);
    }
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
                <Input
                  type="text"
                  name="firstName"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </FormControl>
              <FormControl mb="10px">
                <FormLabel mb={"0"}>Last Name</FormLabel>
                <Input
                  type="text"
                  name="lastName"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </FormControl>
              <FormControl mb="10px">
                <FormLabel mb={"0"}>Username</FormLabel>
                <Input
                  type="text"
                  name="username"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </FormControl>
              <FormControl mb="10px">
                <FormLabel mb={"0"}>Email Address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl mb="10px">
                <FormLabel mb={"0"}>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <FormControl mb="10px">
                <FormLabel mb={"0"}>Password Confirm</FormLabel>
                <Input
                  type="password"
                  name="passwordConfirm"
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                />
              </FormControl>
            </Form>
            <Flex justifyContent={"center"} alignItems={"center"} flex={1}>
              <Button sx={button} onClick={handleSignUp}>
                Sign up
              </Button>
            </Flex>
          </Container>
        </Flex>
      </GridItem>
    </Grid>
  );
}
