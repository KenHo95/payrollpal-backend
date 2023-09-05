class ContractsRouter {
  constructor(express, controller, checkJwt, checkScopes) {
    this.express = express;
    this.controller = controller;
    this.checkJwt = checkJwt;
    this.checkScopes = checkScopes;
  }

  routes() {
    const router = this.express.Router();

    router.get("/", this.controller.getAll.bind(this.controller));
    router.get(
      "/pending-approval",
      this.controller.getContractsPendingApproval.bind(this.controller)
    );
    router.post(
      "/",
      this.checkJwt,
      this.checkScopes,
      this.controller.addContract.bind(this.controller)
    );
    router.put(
      "/approve",
      this.checkJwt,
      // this.checkScopes,
      this.controller.approveContract.bind(this.controller)
    );
    return router;
  }
}

module.exports = ContractsRouter;
