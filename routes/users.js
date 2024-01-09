import { Router } from "express";
import { User } from "../models/user.model.js";
export const router = Router();

/* GET users listing. */
router.get("/", async (req, res, next) => {
  const users = await User.findAll();
  res.send(JSON.stringify(users));
});

router.post("/", async (req, res, next) => {
  const userJson = req.body;
  const user = await User.create(userJson);
  return res.end(JSON.stringify(user));
});
