const express = require('express') // biblioteca do express
const exphbs = require('express-handlebars') // engine 
const session = require('express-session') // biblioteca de login
const FileStore = require('session-file-store') //
const flash = require('express-flash')

const app = express()

// #region Conexão com serviço de dados
const conn = require('./db/conn')
const Thought = require('./models/Thought')
const User = require('./models/User')
// #endregion

app.engine('handlebars', exphbs())
app.set('view', 'handlebars')

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

conn
.sync()
.then(() => {
    app.listen(3000)
})

.catch((error) => console.error(error))