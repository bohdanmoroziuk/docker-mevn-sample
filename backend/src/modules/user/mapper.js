export class UserMapper {
  static toObject(document) {
    return {
      id: document._id,
      name: document.name,
      age: document.age,
    };
  }

  static toObjects(documents) {
    return documents.map((document) => {
      return UserMapper.toObject(document);
    });
  }
}
