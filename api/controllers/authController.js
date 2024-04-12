const AuthService = require('../services/authService');

const authService = new AuthService();

class AuthController {
  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const token = await authService.login({ email, password });

      res.status(200).send(token);
    } catch (error) {
      res.status(401).send({ message: error.message });
    }
  }
}

module.exports = AuthController;