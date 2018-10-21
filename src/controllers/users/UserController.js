import uuid from 'uuid';

let users = [{id: uuid(), content: 'Test'}];

const actions = {
    create: function(content) {
        const user = {
            id: uuid(),
            content: content
        };
        users = users.concat(user);
        return users;
    },

    findAll: function() {
        return users;
    },

    update: function(item) {
        let i = users.map(function(user) {
            if (item.id === user.id) {
                user.content = item.content;
            }
            return user;
        });
        users = i;
        return users;
    },

    remove: function(id) {
        let i = users.filter(function(user) {
            return (user.id !== id);
        });
        users = i;
        return users;
    }
};

export default actions
