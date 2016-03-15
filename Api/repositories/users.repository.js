var db = require('../database/db-provider');

var usersTable = 'users';

module.exports = {
    getUserById: getUserById,
    getUserByEmail: getUserByEmail,
    updateUser: updateUser,
    insertUser: insertUser,
    getUsers: getUsers
};

function getUserById(id) {
    return db(usersTable)
        .where({id: id})
        .first();
}

function getUserByEmail(email) {
    return db(usersTable)
        .where({email: email})
        .first();
}

function updateUser(user) {
    return db(usersTable)
        .where({id: user.id})
        .update(user)
        .then(function () {
            return getUserById(user.id);
        })
        .catch(function (errors) {
            console.log('DB errors: ', errors);
            return null;
        });
}

function insertUser(user) {
    return db(usersTable)
        .insert(user)
        .then(function (id) {
            return getUserById(id);
        })
        .catch(function (errors) {
            console.log('DB errors: ', errors);
            return null;
        });
}

function getUsers() {
    return db(usersTable);
}