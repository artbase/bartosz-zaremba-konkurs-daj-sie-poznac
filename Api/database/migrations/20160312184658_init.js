var _ = require('lodash');

var Schema = require('../schema/schema');
var createTablesHelper = require('../helpers/create-tables-helper');

exports.up = function (knex, Promise) {
    return Promise.all(createTablesHelper.createTables(knex, Schema));
};

exports.down = function (knex, Promise) {
    return Promise.reduce(_.keys(Schema).reverse(), function(values, table) {
        return knex.schema.dropTableIfExists(table);
    }, []);
};
