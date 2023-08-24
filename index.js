const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./db/models/index");
const { creator } = db;

const CreatorsRouter = require("./Routers/CreatorsRouter");
const CreatorsController = require("./Controllers/CreatorsController");

const PORT = process.env.PORT || 3000;

const app = express();

const creatorsController = new CreatorsController(creator);
const creatorsRouter = new CreatorsRouter(express, creatorsController).routes();

app.use(cors());
app.use(express.json());

app.use("/creators", creatorsRouter);

app.listen(PORT, () => {
  console.log("Application listening to port 3000");
});
