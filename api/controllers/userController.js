const UserService = require('../services/userService');

const userService = new UserService();

class UserController {
  static async createUser(req, res) {
    try {
      const { name, email, password } = req.body;
      const user = await userService.create({ name, email, password });
      res.status(201).send(user);
    } catch (error) {
      res.status(400).send({ message: error.message });      
    }
  }
}

module.exports = UserController;