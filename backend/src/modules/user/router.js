import express from 'express';

export class UserRouter {
  constructor(userController) {
    this.userController = userController;
  }

  getRouter() {
    const router = express.Router();

    router
      .route('/:id')
      .get((request, response) => this.userController.getUser(request, response));

    router
      .route('/')
      .get((request, response) => this.userController.getUsers(request, response));

    router
      .route('/')
      .post((request, response) => this.userController.createUser(request, response));

    return router;
  }
}
