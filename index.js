const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./db/models/index");
const { creator, payment, post, contract } = db;

const CreatorsRouter = require("./Routers/CreatorsRouter");
const CreatorsController = require("./Controllers/CreatorsController");
const PaymentsRouter = require("./Routers/PaymentsRouter");
const PaymentsController = require("./Controllers/PaymentsController");
const PostsRouter = require("./Routers/PaymentsRouter");
const PostsController = require("./Controllers/PostsController");
const ContractsRouter = require("./Routers/ContractsRouter");
const ContractsController = require("./Controllers/ContractsController");

const PORT = process.env.PORT || 3000;
const app = express();

const creatorsController = new CreatorsController(creator);
const creatorsRouter = new CreatorsRouter(express, creatorsController).routes();
const paymentsController = new PaymentsController(payment);
const paymentsRouter = new PaymentsRouter(express, paymentsController).routes();
const postsController = new PostsController(post);
const postsRouter = new PostsRouter(express, postsController).routes();
const contractsController = new ContractsController(contract);
const contractsRouter = new ContractsRouter(
  express,
  contractsController
).routes();

app.use(cors());
app.use(express.json());

app.use("/creators", creatorsRouter);
app.use("/payments", paymentsRouter);
app.use("/posts", postsRouter);
app.use("/contracts", contractsRouter);

app.listen(PORT, () => {
  console.log("Application listening to port 3000");
});
