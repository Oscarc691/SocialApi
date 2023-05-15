const { connect, connection } = require('mongoose');

connect('mongodb://localhost/postPost', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;