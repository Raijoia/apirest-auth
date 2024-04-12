const database = require('../models');
const { hash } = require('bcryptjs');
const uuid = require('uuid');

class UserService {
  async create(dto) {
    try {
      const usuario = await database.users.findOne({ where: { email: dto.email } });
  
      if (usuario) {
        throw new Error('Email já cadastrado');
      }

      const passwordHash = await hash(dto.password, 8);
      const newUser = await database.users.create({
        id: uuid.v4(),
        name: dto.name,
        email: dto.email,
        password: passwordHash,
      });

      return newUser;
    } catch (error) {
      throw new Error('Erro ao cadastrar usuário');      
    }
  }

  async findAll() {
    try {
      const users = await database.users.findAll();

      return users;
    } catch (error) {
      throw new Error('Erro ao buscar usuários');
    }
  }

  async findById(id) {
    try {
      const user = await database.users.findOne({ 
        where: { id } 
      });

      if (!user) {
        throw new Error('Usuário não encontrado');
      }

      return user;
    } catch (error) {
      throw new Error('Erro ao buscar usuário');
    }
  }

  async update(dto) {
    const user = await this.findById(dto.id);
    try {
      user.name = dto.name;
      user.email = dto.email;

      await user.save();

      return user;
    } catch (error) {
      throw new Error('Erro ao atualizar usuário');
    }
  }

  async delete(id) {
    await this.findById(id);

    try {
      await database.users.destroy({
        where: { id }
      });
      
      return true;
    } catch (error) {
      throw new Error('Erro ao deletar usuário');
    }
  }
}

module.exports = UserService;