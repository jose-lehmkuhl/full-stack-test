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
};

module.exports = UserController;
