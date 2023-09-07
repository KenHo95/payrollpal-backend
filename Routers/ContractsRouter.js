class ContractsRouter {
  constructor(
    express,
    controller,
    checkJwt,
    checkAdminScopes,
    checkContentManagerScopes
  ) {
    this.express = express;
    this.controller = controller;
    this.checkJwt = checkJwt;
    this.checkAdminScopes = checkAdminScopes;
    this.checkContentManagerScopes = checkContentManagerScopes;
  }

  routes() {
    const router = this.express.Router();

    router.get("/", this.controller.getAll.bind(this.controller));
    router.get(
      "/pending-approval",
      this.controller.getContractsPendingApproval.bind(this.controller)
    );
    router.get(
      "/creator-contracts/:email",
      this.controller.getCreatorContracts.bind(this.controller)
    );
    router.post(
      "/",
      this.checkJwt,
      this.checkAdminScopes,
      this.controller.addContract.bind(this.controller)
    );
    router.put(
      "/approve",
      this.checkJwt,
      this.checkContentManagerScopes,
      this.controller.approveContract.bind(this.controller)
    );
    return router;
  }
}

module.exports = ContractsRouter;
