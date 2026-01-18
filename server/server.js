//TODO: set up server api
import express, { response } from "express";
import cors from "cors";
import { db } from "./dbConnection.js";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 8080;
app.listen(PORT, () => {
  console.info(`server running on port:${PORT}`);
});

//set up routing system with at least 1 GET route and one POST route
app.get("/", (req, res) => {
  res.json(`Welcome to the root route!`);
});

app.get("/get-reviews", async (req, res) => {
  const query = await db.query(
    `SELECT username, book_title, author, date_started, date_finished, review, stars FROM reviews`,
  );
  res.json(query.rows);
});

//POST route for form

app.post("/create-review", (req, res) => {
  try {
    //recieve data
    const data = req.body.formValues;
    console.log(data);
    //insert into table
    const query = db.query(
      `INSERT INTO reviews (username, book_title, author, date_started, date_finished, review, stars) VALUES ($1,$2,$3,$4,$5,$6,$7)`,
      [
        data.username,
        data.bookTitle,
        data.author,
        data.dateStarted,
        data.dateFinished,
        data.review,
        data.stars,
      ],
    );
    res.status(200).json({ request: "success" });
  } catch (error) {
    console.error(error, "Request failed.");
    res.status(500).json({ request: "fail" });
  }
});

//todo: delete or update route

app.get("/top-rated", async (req, res) => {
  const query = await db.query(`SELECT * FROM top_rated_books`);
  res.json(query.rows);
});
