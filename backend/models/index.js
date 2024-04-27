

// const {sequelize, DataType} = require('../config/db')

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.sequelize.sync({force:false})
.then(() =>{
    console.log('yes re-sync')
})

db.userlist = require('./Users')(sequelize,DataTypes)

module.exports =db;