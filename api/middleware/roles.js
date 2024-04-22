const database = require('../models');

const roles= (rolesList) => {
  return async (req, res, next) => {
    const { userId } = req;
    const user = await database.users.findOne({
      include: [
        {
          model: database.roles,
          as: 'users_roles',
          attributes: ['id', 'nome'],
        },
      ],
      where: {
        id: userId,
      },
    });

    if (!user) {
      return res.status(401).json('User not found');
    }

    const roles = user.users_roles.map((role) => role.nome).some((role) => rolesList.includes(role))

    if(!roles) {
      return res.status(401).json('Access denied');
    }

    return next();
  }
}

module.exports = roles;
