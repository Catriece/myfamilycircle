import React from "react";
import fetch from "isomorphic-fetch";
import { useState } from "react";

const ProfilePicture = () => {
  const [profilePicture, setProfilePicture] = useState("");

  if (profilePicture) {
    const url = {
      profilePicture,
    };
  }

  fetch("http://localhost:8080/api/dashboard", {
    mode: "cors",
    method: "GET",
    headers: {
      "Content-Type": "image/png",
    },
    body: profilePicture,
  });
};
