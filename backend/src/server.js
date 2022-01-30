const express = require('express');

const startServer = async () => {
  const db = require('./db');

  const app = express();
  app.use(express.json());

  await db.sequelize.sync();
  app.listen(3001, () => {
    console.log('server running');
  });
};

startServer();
