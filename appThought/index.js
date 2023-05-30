const app = require('express') // biblioteca do express
const exphbs = require('express-handlebars') // engine 
const session = require('express-session') // biblioteca de login
const FileStore = require('session-file-store') //
const flash = require('express-flash')

const app = express()

app.engine('handlebars', exphbs())
app.set('view', 'handlebars')

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())