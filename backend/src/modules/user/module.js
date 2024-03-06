import { UserModel } from './model.js';
import { UserMapper } from './mapper.js';
import { UserService } from './service.js';
import { UserController } from './controller.js';
import { UserRouter } from './router.js';

const userService = new UserService(UserModel, UserMapper);
const userController = new UserController(userService);
const userRouter = new UserRouter(userController);

export const userModule = {
  router: userRouter.getRouter(),
};
