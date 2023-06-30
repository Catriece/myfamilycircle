import express from "express";
import login from "../controllers/login.controllers";

const router = express.Router();

// LOGS INTO ACCOUNT

router.post("/login", async (req, res, next) => {
  try {
    let user_info = req.body;
    let data = await login.loginAuthentication(user_info);

    res.json(data);
  } catch (err) {
    next(err);
  }
});

router.get("/getusername", async (req, res, next) => {
  try {
    let user_info = req.body;
    console.log("USERINFO", user_info);
    let data = await login.forgotUsername(user_info);

    res.json(data);
  } catch (err) {
    next(err);
  }
});

export default router;
