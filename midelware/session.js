const { usersModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const { verifyToken } = require("../utils/handleJwt");
const getProperties = require("../utils/handlePropertiesEngine")
const propertiesKey = getProperties()

const autMiddleware = async (req, res, next) => {
    try {
        if (!req.headers.authorization){
            handleHttpError(res, 'Ups... al parecer no tienes un token de acceso', 401)
            return
        }
        const token = req.headers.authorization.split(' ').pop();
        const dataToken = await verifyToken(token);
        console.log(dataToken);

        if (!dataToken){
            handleHttpError(res, 'Ups... al parecer no tienes un token de acceso', 401)
            return
        }
        const query = {
            [propertiesKey.user_id] : dataToken[propertiesKey.user_id]
        }
        const user = await usersModel.findOne(query)
        req.user = user;
        next();
        
    } catch (error) {
        handleHttpError(res, 'Ups... al parecer no tienes una sesión activa', 401)
    }
}

module.exports = autMiddleware;