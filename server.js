const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');
const session = require('express-session');


const app = express();

var smtpTransport = nodemailer.createTransport("SMTP",{
    service: 'Gmail',
    auth: {
      user: 'laserlens@gmail.com',
      pass: '654123'
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
   from: 'laserlens@gmail.com',
   subject : 'Quote/Questions for Invoke Metal&Fab',
   text : 'Company: ' + company + '\n' + 'Name: ' + name + '\n' +
   'Phone: ' + phone + '\n' + 'Email: ' + email + '\n\n' + text
 }
 console.log(mailOptions);
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

var server = app.listen(3000, function() {
  console.log('Listening on port', server.address().port);
});
