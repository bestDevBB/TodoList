"use strict";

const { sequelize } = require('./connection.js');
const Todotask = require('./todoTask.js');

const db = {};

db.sequelize = sequelize;

// model
db.Todotask = Todotask;

// model init
Todotask.init(sequelize);

module.exports = db;