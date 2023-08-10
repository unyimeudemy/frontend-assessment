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
import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("login clicked");
    navigate("/");

    try {
      const res = await axios.post(
        "https://test.3scorers.com/api/v1/admin/login",
        {
          email,
          password,
        }
      );
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Flex sx={container}>
      <Image src={"/public/logo.png"} sx={logo} />
      <Container sx={innerCard}>
        <Form width={"auto"}>
          <FormControl mb="10px" mt={"70px"}>
            <FormLabel mb={"0"}>Email Address</FormLabel>
            <Input
              type="text"
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
          <Flex justifyContent={"center"} alignItems={"center"} mt={"40px"}>
            <Button sx={button} onClick={handleLogin}>
              Login
            </Button>
          </Flex>
        </Form>
      </Container>
    </Flex>
  );
}
