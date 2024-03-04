import express from 'express';
import bodyParser from 'body-parser';

import { attachModules } from './loaders.js';

const app = express();

app.use(bodyParser.json());

attachModules(app);

export default app;
