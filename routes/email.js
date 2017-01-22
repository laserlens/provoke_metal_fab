const nodemailer = require('nodemailer');
const router = require('express').Router();
const path = require('path');
const pg = require('pg');

// send email with nodemailer
router.put('/quote', function(req, res) {
  console.log('whats the request.body', req.body);
  var smtpTransport = nodemailer.createTransport('SMTP', {
    service: 'Gmail',
    auth: {
      user: 'laserlens@gmail.com',
      pass: '654123'
    }
  });
  var mailOptions = {
    from: 'laserlens@mail.com',
    to: 'laserlens@mail.com',
    subject: 'Hello world!',
    text: 'Plaintext message example.'
  };
  smtpTransport.sendMail(mailOptions, function(err) {
    console.log('Message sent!');
  });
});

module.exports = router;
