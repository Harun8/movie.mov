import React from "react";
import "../styles/defualt.css";
import "../styles/login.css";
import { Link } from "react-router-dom";
import Form from "../components/Form";
const SignIn = () => {
  return (
    <Form
      title="Sign in"
      navigateTo="/login"
      linkText="Already have an account? Log in here"></Form>
  ); //comment
};

export default SignIn;
