import React, { useState, useEffect } from "react";
import "../styles/defualt.css";
import "../styles/login.css";
import { Link } from "react-router-dom";
import Form from "../components/Form";
import Input from "../components/input";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
const LogIn = (props) => {
  const [inputFields, setInputFields] = useState({
    username: "",
    password: "",
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
    console.log(inputFields.username);

    await axios
      .post("http://localhost:5000/api/v1/login", {
        username: inputFields.username,
        password: inputFields.password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      finishSubmit();
    }
  }, [errors]);
  return (
    <>
      <ToastContainer />

      <Form
        inputFields={inputFields}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        title="Log in"
        navigateTo="/signin"
        linkText="Dont have a user account? Sign up here"></Form>
    </>
    // <div class="d-flex justify-content-center align-items-center vh-100 bg_color">

    //   <Input
    //     label="username"
    //     name="username"
    //     type="Text"
    //     id="username"
    //     value={inputFields.username}></Input>
    // </div>
  );
};

export default LogIn;
