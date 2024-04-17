const database = require('../models');
const uuid = require('uuid');

class RoleService {
  async createRole(dto) {
    try {
      const role = await database.roles.findOne({ where: { nome: dto.nome } });

      if (role) {
        throw new Error('Role already exists');
      }

      return await database.roles.create({
        id: uuid.v4(),
        nome: dto.nome,
        descricao: dto.descricao
      });
    } catch (error) {
      throw new Error('Error creating role');
    }
  }

  async getRoles() {
    try {
      return await database.roles.findAll();
    } catch (error) {
      throw new Error('Error getting roles');
    }
  }

  async getRole(id) {
    try {
      return await database.roles.findOne({ where: { id } });
    } catch (error) {
      throw new Error('Error getting role');
    }
  }

  async updateRole(dto) {
    try {
      const role = await database.roles.findOne({ where: { id: dto.id } });

      if (!role) {
        throw new Error('Role not found');
      }

      role.nome = dto.nome;
      role.descricao = dto.descricao;

      await role.save();

      return role;
    } catch (error) {
      throw new Error('Error updating role');
    }
  }
}

module.exports = RoleService;