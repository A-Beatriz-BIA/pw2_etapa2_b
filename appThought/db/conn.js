//OBS Sequelize vai ser o (ORM) conectar e modelar o banco

const { Sequelize } = require('sequelize') // importando a classe sequelize

const sequelize = new Sequelize('thoughts', 'root', '123456', {
    host:'localhost',
    dialect: 'mysql'
}) // construtor (estancia do objeto)

try{
    sequelize.authenticate()
    console.info('Conectamos no serviço de dados!')
}

catch(error){
    console.error('Não foi possível conectar ao serviço de dados: ', error)
}

module.exports = sequelize //qualquer pacote terá acesso