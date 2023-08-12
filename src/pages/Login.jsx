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
import axios from "axios";
import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  loginFailure,
  loginSuccess,
  loginStart,
} from "../redux/slices/userSlice";
import Axios from "../lib/api/axios";
import { overview } from "../redux/slices/changeTabSlices";

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
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log("login clicked");
    // console.log(email, password);
    dispatch(loginStart());

    try {
      console.log(email, password);
      const res = await Axios.post("/admin/login", {
        email,
        password,
      });
      dispatch(loginSuccess(res.data));
      localStorage.setItem("AccessToken", `Bearer ${res.data.accessToken}`);
      dispatch(overview());
      navigate("/");
    } catch (err) {
      dispatch(loginFailure());
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

// {
//     "success": true,
//     "data": {
//         "id": 125,
//         "firstName": "unyime",
//         "lastName": "udoh",
//         "email": "unyimeudoh20@gmail.com",
//         "username": "unyime",
//         "role": "admin",
//         "createdAt": "2023-08-11T10:01:51.643Z",
//         "updatedAt": "2023-08-11T10:01:51.643Z"
//     },
//     "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTI1LCJlbWFpbCI6InVueWltZXVkb2gyMEBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2OTE3NTA4MjIsImV4cCI6MTY5MTc1NDQyMn0.k8DoZpFT0b1EaUnPTbdJkOu7jewAvC2QRJrSwgR7gPA",
//     "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTI1LCJlbWFpbCI6InVueWltZXVkb2gyMEBnbWFpbC5jb20iLCJpYXQiOjE2OTE3NTA4MjIsImV4cCI6MTY5MTkyMzYyMn0.FD3YFlKFJV0ROzCXbJxhmIloGp3LS62k7HXzH4yV86E"
// }

// "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTI1LCJlbWFpbCI6InVueWltZXVkb2gyMEBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2OTE4NTMwMDksImV4cCI6MTY5MTg1NjYwOX0.7wMtZcMaaIwmCad6C6deH25Eg9T59ndNDEZhxW-Px9M",
