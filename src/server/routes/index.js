import express from "express";
import loginRouter from "./login.routes";

const router = express.Router();

router.get("/test", (req, res, next) => {
  res.send("Hello World!");
});

router.use("/user", loginRouter);

export default router;
