"use strict";

const Sequelize = require('sequelize');

module.exports = class Todotask extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            content: {
                type: Sequelize.STRING(100)
            },
            date: {
                type: Sequelize.STRING(20)
            }
        }, {
            sequelize,
            underscored: true,
            timestamps: false,
            paranoid: false
        });
    };
    static associations(db) {

    };
};