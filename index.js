require('dotenv').config()
// Require needed modules.
const express = require('express')
const methodOverride = require('method-override')
// Initialize the app object.
const app = express()

//Defines Engine
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
//calls your static folder
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

//import the router
app.use('/places', require('./controllers/places'))

// Create a homepage route.
app.get('/', function (req, res) {
    // This gets sent to the client 
    // (your web browser most likely!)
    res.render('home')
})


app.get('*', (req, res) => {
    res.render('error404')
})

// Listen for connections.
app.listen(process.env.PORT)