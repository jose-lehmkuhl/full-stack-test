const { hash } = require('bcryptjs');
const { User } = require('../db');

const UserController = {
  createUser: async ({
    login, password, name, email,
  }) => {
    try {
      const encryptedPassword = await hash(password, 8);

      const user = await User.create({
        login, password: encryptedPassword, name, email,
      });
      return user;
    } catch (err) {
      throw new Error(err.errors[0].message);
    }
  },

  listUsers: async () => {
    try {
      const users = await User.findAll();

      return users.map(({
        id, email, name, createdAt, login, updatedAt,
      }) => ({
        id, email, name, createdAt, login, updatedAt,
      }));
    } catch (err) {
      throw new Error('Error Fetching users.');
    }
  },
};

module.exports = UserController;
