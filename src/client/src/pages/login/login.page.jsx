import React from "react";

export function LoginPage() {
  return (
    <div id="main">
      <div id="LI-header-div">
        <h3 id="LI-app-name">My Family Circle</h3>
      </div>
      <div id="LI-form-div">
        <form id="LI-form">
          <label htmlFor="LI-username" className="LI-username">
            Username:
            <input type="text" className="LI-username" placeholder="username" />
          </label>
          <label htmlFor="LI-password" className="LI-password">
            Username:
            <input
              type="password"
              className="LI-password"
              placeholder="password"
            />
          </label>
          <button id="LI-submit-button">LOGIN</button>
        </form>
      </div>
    </div>
  );
}
