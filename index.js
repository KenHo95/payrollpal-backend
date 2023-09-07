const express = require("express");
const cors = require("cors");
const { auth, requiredScopes } = require("express-oauth2-jwt-bearer");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const app = express();
const checkJwt = auth({
  audience: process.env.API_AUDIENCE,
  issuerBaseURL: process.env.API_ISSUERBASEURL,
});
const checkAdminScopes = requiredScopes("write:contract");
const checkContentManagerScopes = requiredScopes("write:approve-contract");

const CreatorsRouter = require("./Routers/CreatorsRouter");
const CreatorsController = require("./Controllers/CreatorsController");
const PaymentsRouter = require("./Routers/PaymentsRouter");
const PaymentsController = require("./Controllers/PaymentsController");
const PostsRouter = require("./Routers/PostsRouter");
const PostsController = require("./Controllers/PostsController");
const ContractsRouter = require("./Routers/ContractsRouter");
const ContractsController = require("./Controllers/ContractsController");

const db = require("./db/models/index");
const { creator, payment, post, contract } = db;

const creatorsController = new CreatorsController(creator);
const creatorsRouter = new CreatorsRouter(
  express,
  creatorsController,
  checkJwt,
  checkAdminScopes
).routes();
const paymentsController = new PaymentsController(payment);
const paymentsRouter = new PaymentsRouter(express, paymentsController).routes();
const postsController = new PostsController(post, contract);
const postsRouter = new PostsRouter(express, postsController).routes();
const contractsController = new ContractsController(contract, creator);
const contractsRouter = new ContractsRouter(
  express,
  contractsController,
  checkJwt,
  checkAdminScopes,
  checkContentManagerScopes
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
