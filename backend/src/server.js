const express = require('express');

const routes = require('./routes');

const retryAsync = async (n, fn) => {
  try {
    await fn();
  } catch (err) {
    if (n < 0) throw err;
    console.log(n, 'retries left');
    await new Promise((res) => setTimeout(res, 5000));

    await retryAsync(n - 1, fn);
  }
};

const startServer = async () => {
  const db = require('./db');

  const app = express();
  app.use(express.json());
  app.use(routes);

  await retryAsync(5, () => db.sequelize.sync());

  app.listen(3001, () => {
    console.log('server running');
  });
};

startServer();
