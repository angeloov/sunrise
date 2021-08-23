import React from "react";
import "./styles/Index.sass";

import TextField from "../components/TextField";

export default function Index() {
  return (
    <div className="index-page">
      <div className="left-side">
        <p>Prova</p>
      </div>
      <div className="right-side">
        <h1>Welcome back!</h1>
        <div>
          <TextField placeholder={"Email"} />
          <TextField placeholder={"Password"} />
        </div>
      </div>
    </div>
  );
}
