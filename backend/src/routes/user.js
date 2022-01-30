const { Router } = require('express');
const { createUser, listUsers } = require('../controllers/UserController');
const authMiddleware = require('../middlewares/auth');

const userRouter = Router();

userRouter.post('/', async (req, res) => {
  try {
    const {
      id, login, name, email,
    } = await createUser(req.body);
    return res.json({
      id, login, name, email,
    });
  } catch (err) {
    return res.json({ err: err.message });
  }
});

userRouter.get('/', authMiddleware, async (req, res) => {
  try {
    const users = await listUsers();
    return res.json(users);
  } catch (err) {
    return res.json({ err: err.message });
  }
});

module.exports = userRouter;
