angular.module('ProvokeApp')
    .controller('QuoteController', QuoteController);

function QuoteController(EmailService) {
  var quote = this;

  //function to run after submit
  quote.submit = function() {
    var name = quote.name;
    var company = quote.company;
    var phone = quote.phone;
    var email = quote.email;
    var text = quote.text;
    if (quote.name === undefined || quote.email === undefined || quote.text === undefined) {
      return;
    }else {
      quote.formData = {company:company, name:name, phone:phone,
      email:email, text:text};
      //send formData to email service
      EmailService.sendEmail(quote.formData).then(function() {
        console.log('email sent');
        quote.name = '';
        quote.company = '';
        quote.phone = '';
        quote.email = '';
        quote.text = '';
        });
    }
  }

}//end of QuoteController function
