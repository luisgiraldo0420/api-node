const { Sequelize } = require('sequelize');

const database = process.env.POSTGRES_SQL;
const username = process.env.POSTGRES_USER;
const password = process.env.POSTGRES_PASSWORD;
const host = process.env.POSTGRES_HOST;


const sequelize = new Sequelize(database, username, password, {
    host,
    dialect: "postgres",
});

const dbConnectPostgres = async () =>  {
    try {
        await sequelize.authenticate();
        console.log('***************Conexión establecida correctamente con postgres SQL*******************');
    } catch (error) {
        console.log('***************Ups... error al intentar conectarse*******************');

    }
}
module.exports = {dbConnectPostgres, sequelize};