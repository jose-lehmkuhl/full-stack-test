const express = require('express');

const startServer = async () => {
  const app = express();
  app.use(express.json());

  app.listen(3001, () => {
    console.log('server running');
  });
};

startServer();
