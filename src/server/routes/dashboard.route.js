import express from "express";
import dashboard from "../controllers/dashboard.controllers";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    let { user_id } = req.body;
    console.log("REQBODY", req.body);
    let data = await dashboard.getProfilePicture(user_id);

    res.json(data);
  } catch (err) {
    next(err);
  }
});

export default router;
