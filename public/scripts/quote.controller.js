angular.module('ProvokeApp')
    .controller('QuoteController', QuoteController);

function QuoteController(EmailService) {
  var quote = this;

  //function to run after submit
  quote.submit = function() {
    quote.formData = {company:quote.company, name:quote.name, phone:quote.phone,
    email:quote.email, text:quote.text};
    //send formData to email service
    EmailService.sendEmail(quote.formData).then(function() {
      console.log('email sent');
      });
  }

}//end of QuoteController function
