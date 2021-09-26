import React from "react";
import "./styles/Index.sass";

import sunriseLogo from "../assets/sunset-logo.svg";

import TextField from "../components/TextField";
import PrimaryButton from "../components/PrimaryButton";

export default function Index() {
  return (
    <div className="index-page">
      <div className="left-side"></div>

      <div className="right-side">
        <div className="logo-container">
          <img src={sunriseLogo} alt="sunrise logo" className="logo" />
        </div>

        <div className="login-container">
          <h1 className="welcome-title">Welcome back!</h1>
          <form className="login-form">
            <TextField placeholder={"Email"} />
            <TextField placeholder={"Password"} type="password" />
            <PrimaryButton text="Login" />
          </form>

          <p className="register-link">Don't have an account? <a href="/register">Register</a></p>
        </div>
      </div>
    </div>
  );
}
