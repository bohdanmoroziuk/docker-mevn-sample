import mongoose from 'mongoose';

export class Database {
  constructor(uri, options = {}) {
    this.uri = uri;
    this.options = options;
  }

  async connect() {
    await mongoose.connect(this.uri, this.options);
    console.log('Database connected');
  }
}
