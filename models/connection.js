// DB Connection
"use strict";

const Sequelize = require('sequelize');
const dotenv = require('dotenv');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/db.config.js')[env];

dotenv.config();

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.possword,
    config // host, port, dialect
);

exports.sequelize = sequelize;