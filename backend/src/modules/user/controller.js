export class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  async createUser(request, response) {
    const { name, age } = request.body;
    const user = await this.userService.addUser(name, age);

    return response.status(201).json({ user });
  }

  async getUsers(_, response) {
    const users = await this.userService.getUsers();

    return response.status(200).json({ users });
  }

  async getUser(request, response) {
    const { id } = request.params;
    const user = await this.userService.getUser(id);

    if (user) {
      return response.status(200).json({ user });
    }

    return response.status(404).json({ error: { message: 'User not found' } });
  }
}
