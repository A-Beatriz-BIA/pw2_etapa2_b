const { DataTypes } = require('sequelize')

const db = require('../db/conn') // conexão com o banco

const User = db.define('USER', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = User