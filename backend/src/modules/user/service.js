export class UserService {
  constructor(userModel, userMapper) {
    this.userModel = userModel;
    this.userMapper = userMapper;
  }

  async getUsers() {
    const documents = await this.userModel.find({});
    const users = this.userMapper.toObjects(documents);

    return users;
  }

  async getUser(id) {
    const document = await this.userModel.findById(id);
    const user = this.userMapper.toObject(document);

    return user;
  }

  async addUser(name, age) {
    const document = await this.userModel.create({ name, age });
    const user = this.userMapper.toObject(document);

    return user;
  }
}
