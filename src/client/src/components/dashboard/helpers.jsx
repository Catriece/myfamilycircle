import React from "react";
import { useNavigate } from "react-router-dom";

export function ForgotUsernamePage() {
  let navigate = useNavigate();

  const toFUNPage = (e) => {
    e.preventDefault();
    navigate("/");
    navigate("/getusername");
  };

  return toFUNPage;
}
