import React from "react";

function ForgotPasswordPage() {
  return (
    <div id="main">
      <div id="FUN-header-div">
        <h3 id="FUN-app-name">My Family Circle</h3>
      </div>
      <div id="FUN-form-div">
        <form id="FUN-form">
          <label htmlFor="FUN-password" className="FUN-password">
            Password:
            <input
              type="password"
              className="FUN-password"
              placeholder="username"
            />
          </label>
          <label
            htmlFor="FUN-password-reentry"
            className="FUN-password-reentry"
          >
            Re-enter Password:
            <input
              type="password"
              className="FUN-password-reentry"
              placeholder="Re-enter password"
            />
          </label>
          <button id="FUN-submit-password">Reset My Password</button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
