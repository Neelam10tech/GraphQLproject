const Sequelize = require('sequelize');

const sequelize = new Sequelize('users', 'root', 'Nilam1029@', {
    host: 'localhost',
    dialect: 'mysql', // explicitly specify the dialect
    logging: true // or false to disable logging
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(error => {
        console.error('Unable to connect to the database:', error);
    });

    const connectedDatabase = sequelize.config.database;
console.log('Connected to database:', connectedDatabase);

module.exports = sequelize;
