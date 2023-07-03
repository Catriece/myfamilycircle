import query from "../db/utils";

const getProfilePicture = async (user_id) => {
  const url = await query(
    "SELECT pic.image_url FROM User_Table AS user INNER JOIN User_Profile_Picture AS pic ON user.user_id = pic.user_id WHERE user.user_id = ? ORDER BY user.user_id LIMIT 1",
    [user_id]
  );

  console.log("URL", url);

  if (url) {
    return url[0].image_url;
  } else {
    return null;
  }
};

const getUsername = async (e) => {
  e.preventDefault();

  return await query(`SELECT user.username
    FROM User_Table AS user
    INNER JOIN User_Profile_Picture AS pic
    ON user.user_id = pic.user_id
    ORDER BY user.user_id `);
};
const getUsersName = async (e) => {
  e.preventDefault();

  return await query(`SELECT CONCAT(user.first_name, " ", user.last_name)
    FROM User_Table AS user
    INNER JOIN User_Profile_Picture AS pic
    ON user.user_id = pic.user_id
    ORDER BY user.user_id `);
};

export default {
  getProfilePicture,
  getUsername,
  getUsersName,
};
