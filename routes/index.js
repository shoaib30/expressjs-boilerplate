import { Router } from "express";
export const router = Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.end("Hello World");
});
