const { Router } = require("express");
const authController = require("../controllers/auth.controller");
const userValidation = require("../validations/user.validations");

const { middlewareValidation } = require("../middlewares/validation.middlewares");

const authRouter = Router();

authRouter.post("/login", middlewareValidation(userValidation.login), authController.login)
authRouter.post("/register", middlewareValidation(userValidation.registerSchema), authController.register)

module.exports = authRouter;