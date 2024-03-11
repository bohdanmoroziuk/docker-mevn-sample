import { Router } from 'express';

export class UserRouter {
  constructor(userController) {
    this.userController = userController;
  }

  getRouter() {
    const router = Router();

    router.get('/', (request, response) => this.userController.getUsers(request, response));
    router.post('/', (request, response) => this.userController.createUser(request, response));
    router.get('/:id', (request, response) => this.userController.getUser(request, response));

    return router;
  }
}
