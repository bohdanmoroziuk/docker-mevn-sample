import app from './app.js';
import { Database } from './database.js'

const db = new Database(process.env.MONGODB_URI);

db
  .connect()
  .then(() => {
    app.listen(3000, () => {
      console.log('Server is listening on port 3000');
    });
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
