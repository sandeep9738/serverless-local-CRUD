'use strict';
const Sequelize = require('sequelize');
let env = require('./env.json').localdev;

const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    port: 3306,
    logging: false, //Disable the logging. It is consuming the time on lambda function.
    dialect: env.dialect,
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        idle: 1000
    }
});

module.exports = {
    'Sequelize': Sequelize,
    'sequelize': sequelize
};
