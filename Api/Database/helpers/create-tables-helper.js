var _ = require('lodash');

var createTablesHelper = function createTablesHelper() {
};

createTablesHelper.createTables = createTables;

module.exports = createTablesHelper;

function createTables(knex, Schema) {
    var tableNames = _.keys(Schema);
    var tables = _.map(tableNames, function (tableName) {
        return createTable(knex, tableName, Schema);
    });
    return tables;
}

function createTable(knex, tableName, Schema) {
    return knex.schema.createTable(tableName, function (table) {
        var column;
        var columnKeys = _.keys(Schema[tableName]);
        _.each(columnKeys, function (key) {
            if (Schema[tableName][key].type === 'text' && Schema[tableName][key].hasOwnProperty('fieldtype')) {
                column = table[Schema[tableName][key].type](key, Schema[tableName][key].fieldtype);
            } else if (Schema[tableName][key].type === 'string' && Schema[tableName][key].hasOwnProperty('maxlength')) {
                column = table[Schema[tableName][key].type](key, Schema[tableName][key].maxlength);
            } else {
                column = table[Schema[tableName][key].type](key);
            }

            if (Schema[tableName][key].hasOwnProperty('nullable') && Schema[tableName][key].nullable === true) {
                column.nullable();
            } else {
                column.notNullable();
            }

            if (Schema[tableName][key].hasOwnProperty('primary') && Schema[tableName][key].primary === true) {
                column.primary();
            }

            if (Schema[tableName][key].hasOwnProperty('unique') && Schema[tableName][key].unique) {
                column.unique();
            }

            if (Schema[tableName][key].hasOwnProperty('unsigned') && Schema[tableName][key].unsigned) {
                column.unsigned();
            }

            if (Schema[tableName][key].hasOwnProperty('references')) {
                column.references(Schema[tableName][key].references);
            }

            if (Schema[tableName][key].hasOwnProperty('defaultTo')) {
                column.defaultTo(Schema[tableName][key].defaultTo);
            }
        });
    });
}
