const path = require('path')
const dotenv = require('dotenv')
const express = require('express')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const connectDB = require('./config/db')
// Load config
dotenv.config({path: './config/config.env' })

connectDB()


const app = express();

// Logging
if(process.env.NODE_ENV === 'developement'){
 app.use(morgan('dev'))
}

// Handlebars
app.engine('.hbs', exphbs.engine({defaultLayout : 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');


// Static folder
app.use(express.static(path.join(__dirname, 'public')))

// // Routes
app.use('/', require('./routes/index'))
  
const PORT = process.env.PORT || 3000

app.listen(
 PORT,
 console.log(`server is running on ${process.env.NODE_ENV} mode on port ${PORT}`)
)