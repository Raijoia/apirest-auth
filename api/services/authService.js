const database = require('../models');
const { compare } = require('bcryptjs');
const { sign } = require('jsonwebtoken')
const jsonSecret = require('../config/jsonSecret')

const ONEDAY = 86400;

class AuthService {
  async login(dto) {
    const user = await database.users.findOne({
      attributes: ['id', 'email', 'password'],
      where: {
        email: dto.email,
      },
    });

    if (!user) {
      throw new Error('usuário inválido');
    }

    const passwordMatch = await compare(dto.password, user.password);

    if (!passwordMatch) {
      throw new Error('usuário ou senha inválido');
    }

    const acessToken = sign({
      id: user.id,
      email: user.email
    }, jsonSecret.secret, {
      expiresIn: ONEDAY
    })

    return { acessToken }
  }
}

module.exports = AuthService;