import React from "react";
import LoginForm from "../../hooks/loginform";
import { ForgotUsernamePage } from "../../components/dashboard/helpers";

function LoginPage() {
  return (
    <div id="main-login">
      <div id="LI-home-div">
        <div id="LI-header-div">
          <h3 id="LI-app-name">My Family Circle</h3>
          <LoginForm />
          <div className="LI-forgot-link-div">
            <a href="/getusername" className="LI-forgot-link">
              forgot username
            </a>
            <br />
            <a href="/updatepassword" className="LI-forgot-link">
              forgot password
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
