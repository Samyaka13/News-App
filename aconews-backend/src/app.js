import express from "express";
import userRouter from "./routes/user.routes.js";
import axios from "axios";

const app = express();
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use("/api/v1/acowale", userRouter);
export { app };
