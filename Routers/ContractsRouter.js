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

    router.get("/", this.controller.getAllContracts.bind(this.controller));
    router.get(
      "/pending-approval",
      this.controller.getContractsPendingApproval.bind(this.controller)
    );
    router.get(
      "/creator-contracts/:contractStatusFilter/:email",
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
    // cron job for automated batch creators payment
    router.post(
      "/pay-approved-contracts",
      this.controller.payApprovedContracts.bind(this.controller)
    );
    router.get(
      "/monthly-contract-payment/:fiscalYear",
      this.controller.getMthlyContractPaymentAmt.bind(this.controller)
    );

    return router;
  }
}

module.exports = ContractsRouter;
