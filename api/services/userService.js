const database = require('../models');

class UserService {
  async create(dto) {
    const usuario = database.users.findOne({ where: { email: dto.email } });

    if (usuario) {
      throw new Error('Email já cadastrado');
    }

    await database.users.create(dto);
  }
}

module.exports = UserService;