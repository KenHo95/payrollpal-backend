class PostsRouter {
  constructor(express, controller) {
    this.express = express;
    this.controller = controller;
  }

  routes() {
    const router = this.express.Router();

    router.get("/", this.controller.getAll.bind(this.controller));
    router.post("/", this.controller.addPostLink.bind(this.controller));
    return router;
  }
}

module.exports = PostsRouter;
