import React from "react";
import { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function submitForm(e) {
    e.preventDefault();

    console.log("INPUT FIELDS", username, password);

    if (username && password) {
      const user_info = {
        username,
        password,
      };

      console.log("USER INFO SENT", user_info);

      fetch("http://localhost:8080/api/user/login", {
        mode: "cors",
        method: "POST",
        body: user_info,
      })
        .then((res) => {
          return res.json();
        })
        .then((info) => console.log("INFO", info))
        .catch((err) => console.error(err));
    }
  }

  return (
    <div id="LI-form-div">
      <form id="LI-form">
        <div id="login-username">
          <label htmlFor="LI-username" className="LI-username">
            Username:
            <input
              type="text"
              className="LI-username LI"
              autoComplete="username"
              value={username}
              placeholder="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </label>
        </div>
        <div id="login-password">
          <label htmlFor="LI-password" className="LI-password">
            Password:
            <input
              type="password"
              className="LI-password LI"
              autoComplete="current-password"
              value={password}
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
        </div>

        <br />
        <button id="LI-submit-button" onClick={submitForm}>
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
