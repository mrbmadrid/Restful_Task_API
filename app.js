var express = require('express')
var session = require('express-session')
var bodyParser = require('body-parser')

require('./server/config/mongoose.js')

var app = express()
app.use(session({ //configure express-session
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
app.use(bodyParser.json())

var path = require('path')

app.use(express.static(path.join(__dirname + '/userInterface/dist/userInterface' )));


app.set('views', path.join(__dirname, './views'))

app.set('view engine', 'ejs')

require('./server/config/routes.js')(app)

app.listen(8000, function(){
	console.log("Listening")
})