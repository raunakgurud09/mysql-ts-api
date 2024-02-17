import { Router } from "express";

const user = Router();

user.route("/").get((req, res) => {
  return res.status(200).json({ message: " fine" });
});

export default user