const { usersModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const { verifyToken } = require("../utils/handleJwt");

const autMiddleware = async (req, res, next) => {
    try {
        if (!req.headers.authorization){
            handleHttpError(res, 'Ups... al parecer no tienes un token de acceso', 401)
            return
        }
        const token = req.headers.authorization.split(' ').pop();
        const dataToken = await verifyToken(token);
        console.log(dataToken);

        if (!dataToken.user_id){
            handleHttpError(res, 'Ups... al parecer no tienes un token de acceso', 401)
            return
        }
        const user = await usersModel.findById(dataToken.user_id)
        req.user = user;
        next();
        
    } catch (error) {
        handleHttpError(res, 'Ups... al parecer no tienes una sesión activa', 401)
    }
}

module.exports = autMiddleware;