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

  static async getRoles(req, res) {
    try {
      const roles = await roleService.getRoles();
      res.status(200).send(roles);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async getRole(req, res) {
    try {
      const { id } = req.params;
      const role = await roleService.getRole(id);
      res.status(200).send(role);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async updateRole(req, res) {
    try {
      const { id } = req.params;
      const { nome, descricao } = req.body;
      const role = await roleService.updateRole({ id, nome, descricao });
      res.status(200).send(role);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async deleteRole(req, res) {
    try {
      const { id } = req.params;
      await roleService.deleteRole(id);
      res.status(200).send({ message: 'Role deleted' });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
}

module.exports = RoleController;