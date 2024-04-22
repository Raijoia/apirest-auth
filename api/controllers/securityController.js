const SecurityService = require('../services/securityService');
const securityService = new SecurityService();

class SecurityController {
  static async createAcl(req, res) {
    const { roles, permissions } = req.body;
    const { userId } = req;

    try {
      const acl = await securityService.createAcl({ roles, permissions, userId });
      res.status(201).send(acl);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async createPermissionRoles(req, res) {
    const { roleId, permissions } = req.body;

    try {
      const permissionsRoles = await securityService.createPermissionRoles({ roleId, permissions });

      res.status(201).send(permissionsRoles);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
}

module.exports = SecurityController;