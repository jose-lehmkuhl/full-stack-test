const express = require('express');

const routes = require('./routes');

const startServer = async () => {
  const db = require('./db');

  const app = express();
  app.use(express.json());
  app.use(routes);

  await db.sequelize.sync();
  app.listen(3001, () => {
    console.log('server running');
  });
};

startServer();
