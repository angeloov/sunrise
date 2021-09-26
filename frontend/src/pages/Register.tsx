import React from "react";
import TextField from "../components/TextField";
import PrimaryButton from "../components/PrimaryButton";
import "./styles/Register.sass";

export default function Register() {
  return (
    <div className="register-page">
      <div className="register-page-container">
        <h1 className="title-1">Join us</h1>
        <p className="title-2">We just need few information</p>

        <form action="">
          <div>
            <TextField className="left-text-field" placeholder="Firstname" />
            <TextField placeholder="Email" />
          </div>
          <div>
            <TextField className="left-text-field" placeholder="Password" />
            <TextField placeholder="Confirm password" />
          </div>

          <PrimaryButton text="Register" />
        </form>
      </div>
    </div>
  );
}
