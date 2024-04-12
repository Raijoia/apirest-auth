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

  static async findAllUsers(req, res) {
    try {
      const users = await userService.findAll();

      res.status(200).send(users);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async findById(req, res) {
    try {
      const { id } = req.params;
      const user = await userService.findById(id);

      res.status(200).send(user);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { name, email } = req.body;
      const user = await userService.update({ name, email, id });

      res.status(200).send(user);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async deleteUser(req, res) {
    try {
      const { id } = req.params;
      await userService.delete(id);

      res.status(204).send();
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
}

module.exports = UserController;