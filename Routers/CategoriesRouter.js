class CategoriesRouter {
  constructor(express, controller) {
    this.express = express;
    this.controller = controller;
  }

  routes() {
    const router = this.express.Router();
    router.get("/", this.controller.getAll.bind(this.controller));
    router.get(
      "/monthly-categories-data/:fiscalYear",
      this.controller.getMthlyCategoriesData.bind(this.controller)
    );
    router.post("/", this.controller.createCategory.bind(this.controller));

    return router;
  }
}

module.exports = CategoriesRouter;
