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
}

module.exports = UserService;