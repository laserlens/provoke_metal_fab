const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const email = require('./routes/email');
const session = require('express-session');


const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/email', email);


app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

var server = app.listen(3000, function() {
  console.log('Listening on port', server.address().port);
});
