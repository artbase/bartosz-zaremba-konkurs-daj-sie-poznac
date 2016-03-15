exports.seed = function (knex, Promise) {
    return Promise.join(
        // Deletes ALL existing entries
        knex('users_roles').del(),
        knex('roles').del(),
        knex('users').del(),

        // Inserts seed entries
        knex('roles').insert({id: 1, name: 'admin'}),
        knex('roles').insert({id: 2, name: 'user'}),
        knex('roles').insert({id: 3, name: 'creator'}),
        knex('users').insert({id: 1, email: 'bartosz.z@gmail.com', 'display_name': 'bart', password: 'test'}),
        knex('users_roles').insert({id: 1, user_id: 1, 'role_id': 1}),
        knex('users_roles').insert({id: 2, user_id: 1, 'role_id': 2}),
        knex('users_roles').insert({id: 3, user_id: 1, 'role_id': 3})
    );
};
