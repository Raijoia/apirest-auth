const PermissionService = require('../services/permissionService');

const permissionService = new PermissionService();

class PermissionController{
  static async create(req, res){
    try {
      const { nome, descricao } = req.body;
      const newPermission = await permissionService.create({ nome, descricao });
      res.status(201).send(newPermission);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async list(req, res){
    try {
      const permissions = await permissionService.list();
      res.status(200).send(permissions);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async getById(req, res){
    try {
      const { id } = req.params;
      const permission = await permissionService.getById(id);
      res.status(200).send(permission);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async update(req, res){
    try {
      const { id } = req.params;
      const { nome, descricao } = req.body;
      const updatedPermission = await permissionService.update({ id, nome, descricao });
      res.status(200).send(updatedPermission);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async delete(req, res){
    try {
      const { id } = req.params;
      await permissionService.delete(id);
      res.status(200).json({ message: 'Permission deleted' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = PermissionController;