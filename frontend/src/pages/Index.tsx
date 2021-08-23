import React from "react";
import "./styles/Index.sass";

import sunriseLogo from "../assets/sunset-logo.svg";
import workingGirlImage from "../assets/images/index-image.svg";

import TextField from "../components/TextField";
import PrimaryButton from "../components/PrimaryButton";

export default function Index() {
  return (
    <div className="index-page">
      <div className="left-side">
        <div className="title-container">
          <h1 className="landing-title">You are awesome,</h1>
          <h1 className="landing-title">don't give up!</h1>
        </div>
        
        <img src={workingGirlImage} alt="Working girl image" className="index-image" />
      </div>

      <div className="right-side">
        <div className="logo-container">
          <img src={sunriseLogo} alt="sunrise logo" className="logo" />
        </div>

        <div className="login-container">
          <h1 className="welcome-title">Welcome back!</h1>
          <form className="login-form">
            <TextField placeholder={"Email"} />
            <TextField placeholder={"Password"} />
            <PrimaryButton text="Login" />
          </form>
        </div>
      </div>
    </div>
  );
}
