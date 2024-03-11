import app from './app.js';
import { Database } from './database.js'

const db = new Database(process.env.MONGODB_URI);

db
  .connect()
  .then(() => {
    console.log('Database connection established.');

    app.listen(3000, () => {
      console.log('Server is listening on port 3000');
    });
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

process.on('SIGINT', async () => {
  try {
    await db.disconnect();
  } finally {
    console.log('The connection to the database has been lost due to an application termination.');
    process.exit(0);
  }
});
