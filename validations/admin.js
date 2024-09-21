const Joi = require("joi");

module.exports = {
  createAdminSchema: async (req, res, next) => {
    const createAdmin = Joi.object({
      username: Joi.string().min(3).max(34).required(),
      password: Joi.string().min(6).max(18).required(),
    });
    try {
      const validate = await createAdmin.validateAsync(req.body);
      next();
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
