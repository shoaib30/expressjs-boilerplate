import express from "express";
import logger from "morgan";

import { router as indexRouter } from "./routes/index.js";
import { router as usersRouter } from "./routes/users.js";

export const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/users", usersRouter);
