
const initMigrations = require('./lib/migrations');
const initModels = require('./lib/model');
initMigrations();
initModels();
