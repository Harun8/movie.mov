import React, { useState, useEffect } from "react";
import "../styles/defualt.css";
import "../styles/login.css";
import { Link, useNavigate } from "react-router-dom";
import Form from "../components/Form";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useCookies } from "react-cookie";
const SignIn = () => {
  const [inputFields, setInputFields] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  // validation

  const validateValues = (inputValues) => {
    let errors = {};
    if (inputValues.username.length < 5) {
      errors.email = "Username is too short";
    }
    if (inputValues.password.length < 8) {
      errors.password = "Password is too short";
    }
    if (inputValues.email.length < 4) {
      errors.password = "email is not valid";
    }
    console.log("errors", errors);
    return errors;
  };

  const handleChange = (e) => {
    e.preventDefault();
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  const errorToast = (text) =>
    toast.error(text, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const successToast = (text) => {
    toast.success(text, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validateValues(inputFields));

    if (Object.keys(errors).length != 0) {
      console.log("The errors", Object.values(errors));
      const test = Object.values(errors);
      test.map((item) => {
        return errorToast(item);
      });
    } else {
      console.log("no errros");
    }
    setSubmitting(true);
  };

  const finishSubmit = async () => {
    console.log(inputFields);
    successToast("Welcome");

    try {
      const response = await axios.post("http://localhost:5000/api/v1/signup", {
        username: inputFields.username,
        email: inputFields.email,
        password: inputFields.password,
      });
      if (response.ok) {
        console.log("response", response);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      finishSubmit();
    }
  }, [errors]);

  return (
    <>
      <ToastContainer></ToastContainer>
      <Form
        inputFields={inputFields}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        title="Sign in"
        navigateTo="/login"
        linkText="Already have an account? Log in here"></Form>
    </>
  ); //comment
};

export default SignIn;
