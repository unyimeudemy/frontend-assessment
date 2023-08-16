import {
  Button,
  Card,
  Center,
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
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, useNavigate } from "react-router-dom";
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "../redux/slices/userSlice";
import { overview } from "../redux/slices/changeTabSlices";
import { Field, Formik } from "formik";

/**
 *
 * @returns {JSX.Element} - returns the signup page and on
 * successful signup, user is redirected to dashboard.
 */

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
    // justifyContent: "center",
    // alignItems: "center",
    flexDirection: "column",
    margin: 0,
    height: "50vh",
    mt: "30px",
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
    ml: "150px",
    mb: "10px",
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
    ml: "100px",
    pt: "10px",
    color: "#008F8F",
    cursor: "pointer",
  };

  const [ErrorMessage, setErrorMessage] = useState("");
  const [errorCard, setErrorCard] = useState(false);
  const [password, setPassword] = useState("");
  const [padding, setPadding] = useState("60px");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  /**
   * on success signup,
   * -> current user's data is stored in userSlice.js
   * -> value of tab to display in  changeTabSlices.js is changed
   *    to overview
   * -> user is redirected to dashboard.
   *
   */

  const handleSignUp = async ({
    firstName,
    lastName,
    email,
    username,
    password,
    passwordConfirm,
  }) => {
    let repeat_password = passwordConfirm;
    console.log(
      firstName,
      lastName,
      email,
      username,
      password,
      repeat_password
    );
    dispatch(loginStart());
    try {
      const res = await axios.post(
        "https://test.3scorers.com/api/v1/admin/sign-up/?adminId=1",
        {
          firstName,
          lastName,
          email,
          username,
          password,
          repeat_password,
        }
      );
      dispatch(loginSuccess(res.data));
      localStorage.setItem("AccessToken", `Bearer ${res.data.token}`);

      dispatch(overview());
      navigate("/dashboard");
    } catch (err) {
      dispatch(loginFailure());
      console.log("error", err.message);
      setPadding("30px");
      setErrorCard(true);
      if (err.message == "Network Error") {
        setErrorMessage("Check your internet connection");
      }
    }
  };

  return (
    <>
      {/* <Flex h={"70px"} bg={"red"} w={"auto"}></Flex> */}
      <Grid templateColumns={"repeat(6, 1fr)"}>
        <GridItem
          colSpan={3}
          bg={"#008F8F"}
          h={{ base: "100vh", md: "120vh" }}
          display={{ base: "none", md: "block" }}
        >
          <Flex sx={contentFlexRight}>
            <Image src={"/logo.png"} sx={logo} mb={"40px"} />
            <Text sx={loginText1}>Create Account</Text>
            <Text sx={loginText2}>
              Join the community and have fun predicting!
            </Text>
          </Flex>
        </GridItem>
        <GridItem
          colSpan={3}
          h={"100vh"}
          ml={{ base: "20px", sm: "60px" }}
          mr={{ base: "20px", sm: "60px" }}
          //   bg={"red"}
          mt={{ md: "60px" }}
        >
          <Flex sx={contentFlexLeft} color={"black"}>
            {errorCard && (
              <Flex sx={errorMessage}>
                <Text sx={errorText}>{ErrorMessage}</Text>
              </Flex>
            )}
            <Formik
              width={"auto"}
              initialValues={{
                firstName: "",
                lastName: "",
                username: "",
                email: "",
                password: "",
                passwordConfirm: "",
              }}
              onSubmit={(values) => {
                //   console.log("valuesssssssssss: ", values);
                handleSignUp(values);
              }}
            >
              {({ handleSubmit, errors, touched, isSubmitting }) => (
                <Container sx={rightCard}>
                  <form onSubmit={handleSubmit}>
                    <FormControl
                      isRequired
                      mb="10px"
                      isInvalid={!!errors.firstName && touched.firstName}
                    >
                      <FormLabel htmlFor="FirstName" mb={"0"}>
                        First Name
                      </FormLabel>
                      <Field
                        as={Input}
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        variant="filled"
                        validate={(value) => {
                          let error;
                          if (!value) {
                            error = "First name is required";
                          }
                          return error;
                        }}
                      />
                      <FormErrorMessage>{errors.firstName}</FormErrorMessage>
                    </FormControl>
                    <FormControl
                      isRequired
                      mb="10px"
                      isInvalid={!!errors.lastName && touched.lastName}
                    >
                      <FormLabel htmlFor="lastName" mb={"0"}>
                        Last Name
                      </FormLabel>
                      <Field
                        as={Input}
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        variant="filled"
                        validate={(value) => {
                          let error;
                          if (!value) {
                            error = "Last name is required";
                          }
                          return error;
                        }}
                      />
                      <FormErrorMessage>{errors.lastName}</FormErrorMessage>
                    </FormControl>
                    <FormControl
                      isRequired
                      mb="10px"
                      isInvalid={!!errors.username && touched.username}
                    >
                      <FormLabel htmlFor="username" mb={"0"}>
                        Username
                      </FormLabel>
                      <Field
                        as={Input}
                        id="username"
                        name="username"
                        type="text"
                        placeholder="Username"
                        variant="filled"
                        validate={(value) => {
                          let error;
                          if (!value) {
                            error = "Username is required";
                          }
                          return error;
                        }}
                      />
                      <FormErrorMessage>{errors.username}</FormErrorMessage>
                    </FormControl>
                    <FormControl
                      isRequired
                      mb="10px"
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
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                              value
                            )
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
                        placeholder="Password "
                        variant="filled"
                        validate={(value) => {
                          let error;
                          console.log("error: ", error);
                          if (value.length < 6) {
                            error =
                              "Password must contain at least 6 characters";
                          }
                          setPassword(value);

                          return error;
                        }}
                      />
                      <FormErrorMessage>{errors.password}</FormErrorMessage>
                    </FormControl>
                    <FormControl
                      isRequired
                      mb="10px"
                      isInvalid={
                        !!errors.passwordConfirm && touched.passwordConfirm
                      }
                    >
                      <FormLabel htmlFor="password" mb={"0"}>
                        Password Confirm
                      </FormLabel>
                      <Field
                        as={Input}
                        id="repeat_password"
                        name="passwordConfirm"
                        type="password"
                        placeholder="Password Confirm"
                        variant="filled"
                        validate={(value) => {
                          let error;
                          console.log("error: ", error);
                          if (value !== password) {
                            error = "Passwords do not match";
                          }

                          return error;
                        }}
                      />
                      <FormErrorMessage>
                        {errors.passwordConfirm}
                      </FormErrorMessage>
                    </FormControl>
                    <Flex marginX={"100px"}>
                      <Button sx={button} type="submit" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <Spinner size="md" />
                        ) : (
                          <div>Signup</div>
                        )}
                      </Button>
                    </Flex>
                    <Text
                      sx={link}
                      onClick={() => {
                        navigate("/login");
                      }}
                    >
                      Already have an account? Click here to login
                    </Text>
                  </form>
                </Container>
              )}
            </Formik>
          </Flex>
        </GridItem>
      </Grid>
    </>
  );
}
