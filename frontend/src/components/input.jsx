import React from "react";

const Input = (props) => {
  return (
    <div class="loginForm" className="form-group">
      <label for={props.name}>{props.label}</label>
      <input
        class="form-control"
        value={props.value}
        // onChange={props.onChange}
        autoFocus
        type={props.type}
        id={props.name}
        name={props.name}></input>
    </div>
  );
};

export default Input;
