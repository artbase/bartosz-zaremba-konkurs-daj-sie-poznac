var dbConnectionConfig = require('../config/database-config');

module.exports = {
    development: {
        client: 'mysql',
        connection: dbConnectionConfig,
        pool: {
            min: 0,
            max: 7
        },
        acquireConnectionTimeout: 10000,
        migrations: {
            directory: 'migrations',
            tableName: 'migrations'
        },
        charset: 'utf8',
        seeds: {
            directory: './seeds/dev'
        }
    }
};