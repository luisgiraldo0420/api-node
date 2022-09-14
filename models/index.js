/* const models = {
categoriesModel: require('./categories'),
usersModel: require('./users'),
sytorageModel: require('./storage'),
}
module.exports = models;

 */

const ENGINE_DB = process.env.ENGINE_DB;

const pathModels = ENGINE_DB === "nosql" ? "./nosql" : "./postgres";

const models = {
usersModel: require(`${pathModels}/users`),
categoriesModel: require(`${pathModels}/categories`),
sytorageModel: require(`${pathModels}/storage`),
}
module.exports = models;