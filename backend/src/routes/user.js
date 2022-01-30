const { Router } = require('express');
const {
  createUser, listUsers, updateUser, deleteUser,
} = require('../controllers/UserController');
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

userRouter.patch('/', authMiddleware, async (req, res) => {
  try {
    if (req.body.login !== req.userInfo.login) throw new Error('Invalid login');
    const user = await updateUser(req.body);
    return res.json(user);
  } catch (err) {
    return res.json({ err: err.message });
  }
});

userRouter.delete('/', authMiddleware, async (req, res) => {
  try {
    if (req.body.login !== req.userInfo.login) throw new Error('Invalid login');
    const user = await deleteUser(req.body);
    return res.json(user);
  } catch (err) {
    return res.json({ err: err.message });
  }
});

module.exports = userRouter;
