import { Router } from "express";
const router = Router();

router.get("/health", function (req, res, next) {
  var param = { result: "success" };
  res.header("Content-Type", "application/json; charset=utf-8");
  res.send(param);
});

export default router;