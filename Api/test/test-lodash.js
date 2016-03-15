var _ = require('lodash');

var usersList = [
    {
        id: 1,
        display_name: 'Bartosz',
        email: 'bartosz.z@live.com',
        roles: ['admin', 'editor', 'user']
    },
    {
        id: 2,
        display_name: 'Art',
        email: 'bartosz.z@gamil.com',
        roles: ['admin', 'user']
    },
    {
        id: 3,
        display_name: 'Telimena',
        email: 'tali@onet.pl',
        roles: ['admin', 'editor']
    },
    {
        id: 4,
        display_name: 'Tomasz',
        email: 'thomas.ger@gmail.com',
        roles: ['user']
    },
    {
        id: 5,
        display_name: 'Kacper',
        email: 'kacper.tolejko@doz.com',
        roles: ['user']
    }
];

// find index
var userIndex = _.findIndex(usersList,
    function (user) {
        return user.email === 'kacper.tolejko@doz.com';
    });
console.log('User:', usersList[userIndex]);

// map
function addIsAdmn(user) {
    if(user.roles.indexOf('admin') !== -1){
        user.isAdmin = true;
    }

    return user;
}

_.map(usersList, addIsAdmn);
console.log('Users:', usersList);

// random
var randomNumber = _.random(500, true);
console.log('randomNumber:', randomNumber);

// last
var lastUser = _.last(usersList);
console.log('lastUser:', lastUser);

// sortBy
var sortedUser = _.sortBy(usersList, ['display_name', 'email']);
console.log('sortedUser:', sortedUser);