const { verify } = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) throw new Error('Not Authorized.');

    const [, token] = authHeader.split(' ');
    const {
      id, name, email, login,
    } = verify(token, 'mytapp');

    req.userInfo = {
      id, name, email, login,
    };

    return next();
  } catch ({ message }) {
    return res.json({ err: message });
  }
};
