const express = require("express");
const cors = require("cors");
const { auth, requiredScopes } = require("express-oauth2-jwt-bearer");
require("dotenv").config();
const axios = require("axios");

const PORT = process.env.PORT || 3000;
const app = express();
const checkJwt = auth({
  audience: process.env.API_AUDIENCE,
  issuerBaseURL: process.env.API_ISSUERBASEURL,
});
// auth0 scopes
const checkAdminScopes = requiredScopes("write:contract");
const checkContentManagerScopes = requiredScopes("write:approve-contract");

// router and controllers
const CreatorsRouter = require("./Routers/CreatorsRouter");
const CreatorsController = require("./Controllers/CreatorsController");
// const PaymentsRouter = require("./Routers/PaymentsRouter");
// const PaymentsController = require("./Controllers/PaymentsController");
const PostsRouter = require("./Routers/PostsRouter");
const PostsController = require("./Controllers/PostsController");
const ContractsRouter = require("./Routers/ContractsRouter");
const ContractsController = require("./Controllers/ContractsController");
const CategoriesRouter = require("./Routers/CategoriesRouter");
const CategoriesController = require("./Controllers/CategoriesController");

const db = require("./db/models/index");
const { creator, payment, post, contract, category } = db;
// console.log(db.payment);

const creatorsController = new CreatorsController(creator);
const creatorsRouter = new CreatorsRouter(
  express,
  creatorsController,
  checkJwt,
  checkAdminScopes
).routes();
// const paymentsController = new PaymentsController(payment);
// const paymentsRouter = new PaymentsRouter(express, paymentsController).routes();
const postsController = new PostsController(post, contract);
const postsRouter = new PostsRouter(express, postsController).routes();
const categoriesController = new CategoriesController(category, contract);
const categoriesRouter = new CategoriesRouter(
  express,
  categoriesController
).routes();
const contractsController = new ContractsController(
  contract,
  creator,
  payment,
  category
);
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
// app.use("/payments", paymentsRouter);
app.use("/posts", postsRouter);
app.use("/contracts", contractsRouter);
app.use("/categories", categoriesRouter);

app.listen(PORT, () => {
  console.log(`Application listening to port ${PORT}`);
  // getApprovedContract();
});

///////////////////////////////////////////////////
// Cron to make batch payment at 830 pm every day//
///////////////////////////////////////////////////

var CronJob = require("cron").CronJob;

const payApprovedContracts = async () => {
  const res = await axios.post(
    `http://localhost:3000/contracts/pay-approved-contracts`
  );

  console.log("Success");
  return res.data;
};
// implement try except

var job = new CronJob(
  "30 20 * * *", //"30 20 * * *" // "* * * * * *",
  async function () {
    const res = await payApprovedContracts();
    // console.log(res);
  },
  null,
  true, // starts job on creation
  "Asia/Singapore" // "America/Los_Angeles"
);
