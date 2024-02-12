import express, { Request, Response } from "express";
import mysql from "mysql";

const app = express();

const PORT = process.env.PORT || 8080;

app.get("/api/char", (req: Request, res: Response) => {
  res.send("It works");
});

app.get("/api/char/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res.send("It works for id " + id);
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}...`);
});
