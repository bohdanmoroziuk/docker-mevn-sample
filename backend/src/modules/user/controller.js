export class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  createUser(request, response) {
    const { name, age } = request.body;
    const user = this.userService.addUser(name, age);

    return response.status(201).json({ user });
  }

  getUsers(_, response) {
    const users = this.userService.getUsers();

    return response.status(200).json({ users });
  }

  getUser(request, response) {
    const { id } = request.params;
    const user = this.userService.getUser(id);

    if (user) {
      return response.status(200).json({ user });
    }

    return response.status(404).json({ error: { message: 'User not found' } });
  }
}
