import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

import { attachModules } from './loaders.js';

dotenv.config();

const app = express();

app.use(cors({
  origin: [
    'http://localhost:8080',
  ],
}))
app.use(bodyParser.json());

attachModules(app);

export default app;
