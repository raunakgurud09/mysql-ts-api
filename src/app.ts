import express, { Request, Response } from "express";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 8080;

app.use("/health", (req, res) => {
  res.status(200).json({ message: "API is working fine" });
});

import notes from "./routes/note.routes";
import users from "./routes/user.routes";

app.use("/api/v1/user", users);
app.use("/api/v1/note", notes);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}...`);
});
