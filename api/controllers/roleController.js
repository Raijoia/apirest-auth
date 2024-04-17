const RoleService = require('../services/roleService');

const roleService = new RoleService();

class RoleController {
  static async createRole(req, res) {
    try {
      const { nome, descricao } = req.body;
      const role = await roleService.createRole({ nome, descricao});
      res.status(201).send(role);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
}

module.exports = RoleController;