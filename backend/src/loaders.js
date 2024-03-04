import { modules } from './modules/index.js';

export const attachModules = (app) => {
  Object
    .keys(modules)
    .forEach((key) => {
      app.use(key, modules[key].router);
    });
};
