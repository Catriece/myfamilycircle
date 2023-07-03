import express from "express";
import loginRouter from "./login.routes";
import dashboardRouter from "./dashboard.route";

const router = express.Router();

router.get("/test", (req, res, next) => {
  res.send("Hello World!");
});

router.use("/login", loginRouter);

router.use("/dashboard", dashboardRouter);

export default router;
