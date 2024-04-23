const database = require('../models');

const permissions = (permissionsList) => {
  return async (req, res, next) => {
    const { userId } = req;

    const user = await database.users.findOne({
      include:[
        {
          model: database.permission,
          as: 'users_permission',
          attributes: ['id', 'nome'],
        },
      ],
      where: {
        id: userId,
      },
    })

    if (!user) {
      return res.status(401).json('User not found');
    }

    const permissions = user.users_permission.map((permission) => permission.nome).some((permission) => permissionsList.includes(permission));

    if(!permissions) {
      return res.status(401).json('Access denied');
    }

    return next();
  }
}

module.exports = permissions;