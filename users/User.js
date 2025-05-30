const Sequelize = require("sequelize");
const connection = require("../database/database");

const Category = connection.define('users', {
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false
    }
})




module.exports = User;