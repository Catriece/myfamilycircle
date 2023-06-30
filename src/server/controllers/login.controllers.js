import query from "../db/utils";

const loginAuthentication = async (user_info) => {
  const { username, password } = user_info;
  const user = await query(
    "SELECT username, password, email FROM User_Table WHERE username = ?",
    [username]
  );

  if (user.length > 0 && user[0].password === password) {
    return {
      username: user[0].username,
      email: user[0].email,
    };
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

// THIS RETURNS NULL AND I AM UNSURE WHY
const forgotUsername = async (email) => {
  const user = await query("SELECT username FROM User_Table WHERE email = ?", [
    email,
  ]);

  if (user.length > 0 && user[0].email === email) {
    return {
      username: user[0].username,
    };
  } else {
    return null;
  }
};

export default {
  loginAuthentication,
  forgotPassword,
  forgotUsername,
};
