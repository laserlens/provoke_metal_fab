const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');
const session = require('express-session');
require('dotenv').config();

const app = express();

var smtpTransport = nodemailer.createTransport("SMTP",{
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD
    }
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));


app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.get('/email/:customerEmail/:customerText/:company/:phone/:name',function(req,res){

  var email = req.params.customerEmail;
  var text = req.params.customerText;
  var company = req.params.company;
  var name = req.params.name;
  var phone = req.params.phone;
  //console.log('whats the text', text);

//code to send e-mail.
  var mailOptions={
   to : 'adrianflak1@gmail.com',
   from: process.env.EMAIL_ADDRESS,
   subject : 'Quote/Questions for Invoke Metal&Fab',
   text : 'Company: ' + company + '\n' + 'Name: ' + name + '\n' +
   'Phone: ' + phone + '\n' + 'Email: ' + email + '\n\n' + text
 }
 smtpTransport.sendMail(mailOptions, function(error, response){
   if(error){
     console.log(error);
     res.end("error");
   }else{
     console.log("Message sent: " + response.message);
     res.end("sent");
   }
 });
});

// var port = process.env.PORT || 3300;

// var server = app.listen(function() {
//   console.log('Listening on port', server.address().port);
// });
app.set('port', (process.env.PORT || 5000));
//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});
