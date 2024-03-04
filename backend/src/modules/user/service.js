import { User } from './entity.js'

export class UserService {
  constructor() {
    this.users = [];
  }

  getUsers() {
    return this.users;
  }

  getUser(id) {
    return this.users.find((user) => user.id === id);
  }

  addUser(name, age) {
    const user = new User(name, age);

    this.users.push(user);

    return user;
  }
}
