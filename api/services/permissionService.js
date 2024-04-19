const database = require('../models');
const uuid = require('uuid');

class PermissionService {
  async create(dto) {
    try {
      const permission = await database.permission.findOne({ where: { nome: dto.nome } });

      if(permission) {
        throw new Error('Permission already exists');
      }

      const newPermission = await database.permission.create({
        id: uuid.v4(),
        nome: dto.nome,
        descricao: dto.descricao
      });
      return newPermission;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async list() {
    try {
      const permissions = await database.permission.findAll();
      return permissions;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getById(id) {
    try {
      const permission = await database.permission.findOne({ where: { id: id } });

      if(!permission) {
        throw new Error(`Permission don't exists`);
      }

      return permission;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async update(dto) {
    try {
      const permission = await database.permission.findOne({ where: { id: dto.id } });

      if(!permission) {
        throw new Error(`Permission don't exists`);
      }

      permission.nome = dto.nome;
      permission.descricao = dto.descricao;
      
      await permission.save();
  
      return await permission.reload();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async delete(id) {
    try {
      const permission = await database.permission.findOne({ where: { id } });

      if(!permission) {
        throw new Error(`Permission don't exists`);
      }

      await database.permission.destroy({ where: { id } });
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = PermissionService;