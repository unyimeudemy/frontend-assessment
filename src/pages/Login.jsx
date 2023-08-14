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
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  loginFailure,
  loginSuccess,
  loginStart,
} from "../redux/slices/userSlice";
import Axios from "../lib/api/axios";
import { overview } from "../redux/slices/changeTabSlices";

/**
 * @returns {JSX.Element} - Returns the login page and on login successful,
 * user is redirected to dashboard ( overview tab )
 */

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

    dispatch(loginStart());

    try {
      const res = await Axios.post("/admin/login", {
        email,
        password,
      });

      /**
       * on successful login,
       * -> current user detail is stored in userSlice.js
       * -> accessToken is stored to keep user logged in.
       * -> tabStatus is set to overview so that user will be redirected
       *    overview page on login complete.
       */
      dispatch(loginSuccess(res.data));
      localStorage.setItem("AccessToken", `Bearer ${res.data.accessToken}`);
      dispatch(overview());
      console.log("loading: ", loading);
      navigate("/");
    } catch (err) {
      /**
       * If any error occurs, loginFailure is called to ensure user is redirected
       * to login to login page to try login again.
       */
      dispatch(loginFailure());
      console.log(err.message);
    }
  };

  const { loading } = useSelector((state) => state.user);

  return (
    <Flex sx={container}>
      <Image src={"/logo.png"} sx={logo} />
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
              {loading ? <Spinner size="md" /> : <div>Login</div>}
            </Button>
          </Flex>
        </Form>
      </Container>
    </Flex>
  );
}
