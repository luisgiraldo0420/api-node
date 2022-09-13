const { check } = require("express-validator");
const validateResult = require("../utils/handleValidator")

const validatorRegister = [
    check("name")
    .exists()
    .notEmpty()
    .isLength({min:3, max:99}),
    check("username")
    .exists()
    .notEmpty()
    .isLength({min:3, max:99}),
    check("password")
    .exists()
    .notEmpty()
    .isLength({min:3, max:15}),
    check("email")
    .exists()
    .notEmpty()
    .isEmail(),
    check("role")
    .exists()
    .notEmpty(),
    (req, res, next) => {
        return validateResult(req, res, next)
    }
];

const validatorLogin = [
    check("password")
    .exists()
    .notEmpty()
    .isLength({min:3, max:15}),
    check("email")
    .exists()
    .notEmpty()
    .isEmail(),
    (req, res, next) => {
        return validateResult(req, res, next)
    }
];

module.exports = { validatorRegister, validatorLogin};