const {hash} = require("bcryptjs");
const users = [
  {
    username: "newuser0",
    password: "123456",
  },
];

module.exports = {
  createUser: async (req, res) => {
    try {
      let { username, password } = req.body;
      users.map((user) => {
        if (user.username === username) {
          return res.send({
            response: "user already exists",
          });
        }
      });
      password = await hash(password, 10);
      users.push({ username, password });
      return res.send({
        response: {
          username,
          password,
        },
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  getAllUsers: (req, res) => {
    try {
      return res.send({
        response: users,
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },

  getUser: (req, res) => {
    try {
      const { username } = req.query;
      users.map((user) => {
        if (user.username === username) {
          return res.send({
            response: user,
          });
        }
      });
      return res.send({
        response: "User does't exists",
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },

  deleteUser: (req, res) => {
    try {
      return res.send({
        response: "User's Data is deleted successfully",
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
