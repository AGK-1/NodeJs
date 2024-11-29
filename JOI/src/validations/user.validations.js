const Joi = require("joi");

const registerSchema  = Joi.object({
    username: Joi.string().min(3).max(15).alphanum().required(),
    password: Joi.string()
    .min(3)
    .max(100)
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .required(),
    email: Joi.string().email(),
    firstName: Joi.string().trim().min(3).max(30).optional(),
    lastName: Joi.string().trim().min(3).max(30).optional(),
    gender: Joi.string().valid("male", "female"),
    height: Joi.number().min(1).optional(),
    weight: Joi.number().min(1).optional(),
    birthday: Joi.date().max("now"),
})

const login = Joi.object({
    username: Joi.string().min(3).max(15).alphanum().required(),
    password: Joi.string()
    .min(3)
    .max(100)
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .required(),
})

const userValidations = {
    login,
    registerSchema,
};

module.exports = userValidations;