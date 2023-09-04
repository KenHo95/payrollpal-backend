class CreatorsRouter {
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
      "/nameAndTiktokHandle",
      this.controller.getCreatorNameAndTiktokHandle.bind(this.controller)
    );
    router.post(
      "/",
      this.checkJwt,
      this.checkScopes,
      this.controller.addCreator.bind(this.controller)
    );
    return router;
  }
}

module.exports = CreatorsRouter;
