const config = require('./index');

module.exports = {
  development: {
    storage: config.dbFile,
    dialect: "postgres",
    seederStorage: "sequelize",
    logQueryParameters: true,
    typeValidation: true,
    database: config.database,
    username: config.username,
    password: config.password,
  }
};
