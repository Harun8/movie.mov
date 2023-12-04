import React from "react";
import "../styles/defualt.css";
import "../styles/login.css";
import { Link } from "react-router-dom";
import Form from "../components/Form";

const LogIn = () => {
  return (
    <Form
      title="Log in"
      navigateTo="/signin"
      linkText="Dont have a user account? Sign up here"></Form>
  );
};

export default LogIn;
