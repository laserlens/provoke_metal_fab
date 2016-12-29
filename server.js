const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
//const login = require('./routes/login');
//const register = require('./routes/register');
const session = require('express-session');


const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

//app.use('/login', login);
//app.use('/register', register);

app.use(function(req, res, next){
  console.log('Got a request!');
  next();
});

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

var server = app.listen(3000, function() {
  console.log('Listening on port', server.address().port);
});
