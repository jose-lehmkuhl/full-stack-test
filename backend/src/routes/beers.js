const { Router } = require('express');
const getBeers = require('../services/punkAPI');
const authMiddleware = require('../middlewares/auth');

const beerRouter = Router();

beerRouter.get('/', authMiddleware, async (req, res) => {
  try {
    const { page = 1, perPage = 10 } = req.query;
    const beers = await getBeers(page, perPage);
    return res.json(beers);
  } catch (err) {
    return res.json({ err: err.message });
  }
});

module.exports = beerRouter;
