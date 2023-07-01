import React from "react";

function ForgotUsernamePage() {
  return (
    <div id="main">
      <div id="FUN-header-div">
        <h3 id="FUN-app-name">My Family Circle</h3>
      </div>
      <div id="FUN-form-div">
        <form id="FUN-form">
          <label htmlFor="FUN-email" className="FUN-email">
            Email:
            <input type="email" className="FUN-email" placeholder="username" />
          </label>

          <button id="FUN-submit-email">Show Me My Username</button>
        </form>
      </div>
    </div>
  );
}

export default ForgotUsernamePage;
