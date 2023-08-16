import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  GridItem,
  Image,
  Input,
  Spinner,
  Text,
} from "@chakra-ui/react";
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
import { Field, Formik } from "formik";

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

  const errorMessage = {
    height: "40px",
    width: "330px",
    bg: "#ffe6e6",
    m: "10px",
    borderRadius: "5px",
    border: "1px solid red",

    alignItems: "center",
    justifyContent: "center",
  };

  const errorText = {
    fontFamily: "roboto",
    fontSize: "sm",
    color: "#cc0000",
  };

  const link = {
    fontSize: "smaller",
    // ml: "100px",
    pt: "10px",
    color: "#008F8F",
    cursor: "pointer",
  };

  const [ErrorMessage, setErrorMessage] = useState("");
  const [errorCard, setErrorCard] = useState(false);
  const [padding, setPadding] = useState("60px");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async ({ email, password }) => {
    console.log("valuesssssssssss: ", email, password);

    dispatch(loginStart());
    try {
      const res = await Axios.post("/admin/login", {
        email,
        password,
      });
      console.log("resssssss: ", res);

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
      navigate("/dashboard");
    } catch (err) {
      /**
       * If any error occurs, loginFailure is called to ensure user is redirected
       * to login to login page to try login again.
       */
      dispatch(loginFailure());
      console.log("errorrr", err.message);
      setPadding("30px");
      setErrorCard(true);
      if (err.message == "Network Error") {
        setErrorMessage("Check your internet connection");
      } else if (err.message == "Request failed with status code 401") {
        setErrorMessage("Email or password not correct");
      }
    }
  };

  return (
    <Flex sx={container}>
      <Image src={"/logo.png"} sx={logo} />
      <Container sx={innerCard}>
        {errorCard && (
          <Flex sx={errorMessage}>
            <Text sx={errorText}>{ErrorMessage}</Text>
          </Flex>
        )}
        <Formik
          width={"auto"}
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            handleLogin(values);
            console.log("valuesssssssssss: ", values);
          }}
        >
          {({ handleSubmit, errors, touched, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <FormControl
                isRequired
                mb="10px"
                mt={padding}
                isInvalid={!!errors.email && touched.email}
              >
                <FormLabel htmlFor="email" mb={"0"}>
                  Email Address
                </FormLabel>
                <Field
                  as={Input}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  variant="filled"
                  validate={(value) => {
                    console.log("isSubmitting: ", isSubmitting);
                    let error;
                    if (!value) {
                      error = "Email is required";
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                    ) {
                      error = "Invalid email address";
                    }
                    return error;
                  }}
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl
                isRequired
                mb="10px"
                isInvalid={!!errors.password && touched.password}
              >
                <FormLabel htmlFor="password" mb={"0"}>
                  Password
                </FormLabel>
                <Field
                  as={Input}
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  variant="filled"
                  validate={(value) => {
                    let error;
                    console.log("error: ", error);
                    if (value.length < 6) {
                      error = "Password must contain at least 6 characters";
                    }

                    return error;
                  }}
                  //   onChange={(e) => setPassword(e.target.value)}
                />
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              </FormControl>
              <Flex
                justifyContent={"center"}
                alignItems={"center"}
                mt={"40px"}
                flexDirection={"column"}
              >
                <Button type="submit" sx={button} disabled={isSubmitting}>
                  {isSubmitting ? <Spinner size="md" /> : <div>Login</div>}
                </Button>
                <Text
                  sx={link}
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  You don't have an account? Click here to signup
                </Text>
              </Flex>
            </form>
          )}
        </Formik>
      </Container>
    </Flex>
  );
}
