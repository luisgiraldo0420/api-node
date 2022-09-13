const {check} = require('express-validator');
const validateResult = require("../utils/handleValidator");

const validatorCreate = [
check("name")
.exists()
.notEmpty(),

check("status")
.notEmpty(),

    (req, res, next) => {
        return validateResult(req, res, next);
    }
]

const validatorGetItem = [
    check("id")
    .exists()
    .notEmpty()
    .isMongoId(),
        (req, res, next) => {
            return validateResult(req, res, next);
        }
    ]

module.exports = {validatorCreate, validatorGetItem}