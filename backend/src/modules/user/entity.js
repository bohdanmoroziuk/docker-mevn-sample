import crypto from 'crypto';

export class User {
  constructor(name, age) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.age = age;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      age: this.age,
    };
  }
}
