import express, { Request, Response } from "express";
import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const connectionString = process.env.DATABASE_URL || "";
const connection = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "password",
});
connection.connect();

const PORT = process.env.PORT || 8080;

app.get("/api/char", (req: Request, res: Response) => {
  const query = "SELECT * FROM Characters";
  connection.query(query, (err, rows) => {
    if (err) throw err;

    const retVal = {
      data: rows,
      message: "",
    };
    if (rows.length === 0) {
      retVal.message = "No records found";
    }
    res.send(rows);
  });
});

app.get("/api/char/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res.send("It works for id " + id);
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}...`);
});
