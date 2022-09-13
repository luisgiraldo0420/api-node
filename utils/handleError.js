const handleHttpError = (res, message = 'Ups... algo salio mal', code = 403) => {
    res.status(code);
    res.send({error: message});
}

module.exports = {handleHttpError};