import React from "react";
import "../styles/defualt.css";
import "../styles/login.css";
import { Link } from "react-router-dom";
const SignIn = () => {
  return (
    <div class="d-flex justify-content-center align-items-center vh-100 bg_color">
      <form className=" p-3 rounded shadow bg_login_form ">
        <div className="d-flex justify-content-center">
          <h3>Sign in</h3>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" class="btn btn-info ">
            Submit
          </button>
        </div>
        <Link className="" to="/signin">
          Don't have a user account? Sign up here
        </Link>
      </form>
    </div>
  ); //comment
};

export default SignIn;
