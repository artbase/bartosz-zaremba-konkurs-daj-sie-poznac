var config = require('./knexfile');

var dbProvider = function dbProvider() {
};

dbProvider.db = null;
dbProvider.getInstance = getInstance;

module.exports = dbProvider.getInstance();

function getInstance() {
    if (this.db === null) {
        this.db = require('knex')(config[process.env.ENV_TYPE]);
    }

    return this.db;
}
