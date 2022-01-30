const { compare } = require('bcryptjs');
const { sign } = require('jsonwebtoken');
const { User } = require('../db');

const SessionController = {
  login: async ({ login, password }) => {
    try {
      const user = await User.findOne({ where: { login } });
      if (!user) throw new Error('Invalid Login.');

      const pwMatch = await compare(password, user.password);
      if (!pwMatch) throw new Error('Wrong password.');

      const token = sign({ name: user.name, email: user.email, login: user.login }, 'mytapp', {
        subject: `${user.id}`,
        expiresIn: '1h',
      });
      return token;
    } catch (err) {
      throw new Error(err.message);
    }
  },
};

module.exports = SessionController;
