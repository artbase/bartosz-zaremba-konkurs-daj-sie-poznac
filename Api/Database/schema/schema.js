var Schema = {
    users: {
        id: {type: 'increments', nullable: false, primary: true},
        email: {type: 'string', maxlength: 254, nullable: false, unique: true},
        display_name: {type: 'string', maxlength: 150, nullable: false},
        password: {type: 'string', maxlength: 512, nullable: false}
    },
    roles: {
        id: {type: 'increments', nullable: false, primary: true},
        name: {type: 'string', maxlength: 150, nullable: false}
    },
    users_roles: {
        id: {type: 'increments', nullable: false, primary: true},
        user_id: {type: 'integer', nullable: false, unsigned: true, references: 'users.id'},
        role_id: {type: 'integer', nullable: false, unsigned: true, references: 'roles.id'}
    }
};

module.exports = Schema;
