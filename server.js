const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');
// const email = require('./routes/email');
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
// app.use('/email',email);

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.get('/email/:customerEmail/:customerText',function(req,res){
  
  var email = req.params.customerEmail;
  var text = req.params.customerText;

//code to send e-mail.
  var mailOptions={
   to : 'laserlens@gmail.com',
   from: 'laserlens@gmail.com',
   subject : 'Quote/Questions',
   text : 'Email: ' + email + '\n' + text
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
