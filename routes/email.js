const nodemailer = require('nodemailer');
const router = require('express').Router();
const path = require('path');
const pg = require('pg');

// send email with nodemailer
router.get('/email', function(req, res) {
    console.log('the body', req.body);
    console.log('the query', req.query);
  //code to send e-mail.
    var mailOptions={
     to : 'laserlens@gmail.com',
     from: req.body.email,
     subject : req.body.subject,
     text : req.body.text
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

module.exports = router;
