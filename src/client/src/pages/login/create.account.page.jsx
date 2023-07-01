import React from "react";

function NewUserPage() {
  return (
    <div id="main">
      <div id="NU-home-div">
        <div id="NU-header-div">
          <h3 id="NU-app-name">My Family Circle</h3>
        </div>
        <div id="NU-form-div">
          <form id="NU-form">
            <label htmlFor="NU-username" className="NU-username NU-label">
              Username:
              <br />
              <input
                type="text"
                className="NU-username NU"
                placeholder="username"
                required
              />
            </label>
            <br />

            <label htmlFor="NU-first-name" className="NU-first-name NU-label">
              First Name:
              <br />
              <input
                type="text"
                className="NU-first-name NU"
                placeholder="first-name"
                required
              />
            </label>
            <br />

            <label htmlFor="NU-last-name" className="NU-last-name NU-label">
              Last Name:
              <br />
              <input
                type="text"
                className="NU-last-name NU"
                placeholder="last-name"
                required
              />
            </label>
            <br />

            <label htmlFor="NU-email" className="NU-email NU-label">
              Email:
              <br />
              <input
                type="email"
                className="NU-email NU"
                placeholder="email"
                autoComplete="email"
                required
              />
            </label>
            <br />

            <label htmlFor="NU-email" className="NU-email NU-label">
              Re-enter Email:
              <br />
              <input
                type="email"
                id="re-enter-email"
                className="NU-email NU"
                placeholder="email"
                autoComplete="email"
                required
              />
            </label>
            <br />

            <label htmlFor="NU-password" className="NU-password NU-label">
              Create Password:
              <br />
              <input
                type="password"
                className="NU-password NU"
                placeholder="password"
                id="password-NU"
                autoComplete="new-password"
                required
              />
            </label>
            <br />
            <div id="NU-p-element">
              <p id="NU-current-user">
                Already have an account? <a href="/login">Log In</a>
              </p>
            </div>
            <div id="NU-button-div">
              <button id="NU-signup-button">Sign up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewUserPage;
