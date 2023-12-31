import { Link } from "react-router-dom";
import "../styles/login.css";
import { useState, useEffect } from "react";
import Joi, { validate } from "joi-browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Form = (props) => {
  return (
    <div class="d-flex justify-content-center align-items-center vh-100 bg_color">
      {/* <ToastContainer /> */}{" "}
      <form
        className=" p-4 rounded shadow bg_login_form form_width "
        onSubmit={props.handleSubmit}>
        <div className="d-flex justify-content-center">
          <h3>{props.title}</h3>
        </div>

        {props.title === "Sign in" && (
          <>
            <div class="mb-3">
              <label for="username" class="form-label">
                Username{" "}
              </label>
              <input
                type="text"
                class="form-control"
                id="username"
                name="username"
                value={props.inputFields.username}
                onChange={props.handleChange}
              />
            </div>
          </>
        )}

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            name="email" // Added name property
            value={props.inputFields.email}
            onChange={props.handleChange}
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            name="password" // Added name property
            value={props.inputFields.password}
            onChange={props.handleChange}
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <div className="d-flex flex-column mb-3">
          <button
            type="submit"
            // disabled={validate()} // Execute the function to get the boolean value
            class="btn btn-info my-3 rounded-4 ">
            {props.title}
          </button>
          <button className="btn btn-dark  p-2 rounded-4">
            <span className="mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="16"
                viewBox="0 0 384 512">
                <path
                  fill="#ffffff"
                  d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                />
              </svg>
            </span>
            <span className="">Log in with apple</span>
          </button>

          <button className="btn btn-light mt-3 p-2 rounded-4">
            <span className="mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="15.25"
                viewBox="0 0 488 512">
                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
              </svg>
            </span>
            <span>Log in with Google</span>
          </button>
        </div>
        <Link className="" to={props.navigateTo}>
          {props.linkText}
        </Link>
      </form>
    </div>
  );
};

export default Form;
