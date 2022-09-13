const { handleHttpError } = require("../utils/handleError");

const checkRol = (roles) => (req, res, next) => {
    try {
        const {user} = req;
        const rolesByUser = user.role;
        console.log(rolesByUser);
        const checkValueRol = roles.some((rolSingle) =>
        rolesByUser.includes(rolSingle)
      ); //TODO: true, false
        if (!checkValueRol){
            handleHttpError(res, "Ups... no tienes permisos para realizar esta acción", 403);
            return
        }
        next()
    } catch (error) {
        handleHttpError(res, "Ups... no tienes permisos para realizar esta acción", 403);
    }
}

module.exports = checkRol;