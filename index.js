const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./connectionDB");
const todoRouter = require("./src/router/TodoRouter");

dotenv.config();

const app = express();

app.use(express.json());
app.use("/api/todo",todoRouter)

app.get("/", (req, res) => {
  return res.status(200).json({ message: "hello world" });
});

connectDB()

app.listen(5000, async () => {
    console.log("server is running on port 5000")
});
