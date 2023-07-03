import React from "react";
import fetch from "isomorphic-fetch";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  function submitForm(e) {
    e.preventDefault();

    if (username && password) {
      const user_info = {
        username,
        password,
      };

      fetch("http://localhost:8080/api/login", {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user_info),
      })
        .then((res) => res.json())
        .then((info) => {
          console.log("INFO", info);
          //CREATE CONTROLLER / ROUTE
          //NAVIGATES TO DASHBOARD BUT WHAT IS RENDERED ON PAGE DEPENDS ON USER THAT LOGGED IN
        })
        .catch((err) => console.error(err));
    }

    setUsername("");
    setPassword("");
  }

  return (
    <div id="LI-form-div">
      <form id="LI-form" onSubmit={submitForm}>
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
        <button id="LI-submit-button">LOGIN</button>
      </form>
    </div>
  );
};

export default LoginForm;
