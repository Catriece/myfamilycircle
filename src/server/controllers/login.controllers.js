import query from "../db/utils";

const loginAuthentication = async (user_info) => {
  const { username, password } = user_info;
  const user = await query(
    "SELECT username, password, email FROM User_Table WHERE username = ?",
    [username]
  );

  if (user.length > 0 && user[0].password === password) {
    //FOR TURNING INTO JSON
    const user_package = {
      username: user[0].username,
      email: user[0].email,
    };

    return JSON.stringify(user_package);
  } else {
    return null;
  }
};

//I UNDERSTAND THERE SHOULD BE A STEP THAT SENDS A LINK TO THE CLIENTS EMAIL, PROMPTING THEM TO UPDATE THEIR PASSWORD. I AM JUST NOT THERE YET :0

// *** NEED TO THINK THROUGH HOW TO GET NEW PASSWORD

const forgotPassword = async (email, new_password) => {
  const user = await query("SELECT username FROM User_Table WHERE email = ?", [
    email,
  ]);

  if (user.length > 0 && user[0].email === email) {
    const password_update = await query(
      "UPDATE User_Table SET password = ? WHERE email = ?",
      [new_password, email]
    );

    return new_password;
  } else {
    return null;
  }
};

// FOR FUTURE REFERENCES: THIS RETURNED NULL BECAUSE EMAIL WAS AN OBJECT NOT A STRING. SO IN ORDER TO ACCESS THE STRING, I NEEDED TO USE OBJECT NOTATION!
const forgotUsername = async (req) => {
  console.log("THIS IS WHAT I RECIEVED", req.email);
  return await query("SELECT username FROM User_Table WHERE email = ?", [
    req.email,
  ]);
};

const newUser = async (new_user) => {
  return await query("INSERT INTO User_Table SET ?", [new_user]);
};

const userNameAvailable = async (username) => {
  const username_found = await query(
    "SELECT username FROM User_Table WHERE username = ?",
    [username]
  );

  if (username_found) {
    console.log("Username already exists");
  } else {
    console.log("Username can be added");
  }
};

export default {
  loginAuthentication,
  forgotPassword,
  forgotUsername,
  newUser,
  userNameAvailable,
};
