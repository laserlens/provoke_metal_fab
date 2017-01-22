angular.module('ProvokeApp')
    .controller('QuoteController', QuoteController);

function QuoteController(EmailService) {
  var quote = this;

  //function to run after submit
  quote.submit = function() {
    quote.formData = {email:'test@gmail.com', text:'akdjb dkdhs dkhie akdklh dkdid'};
    //send formData to email service
    EmailService.sendEmail(quote.formData).then(function() {
      console.log('emal sent?');
      });
  }

}//end of QuoteController function
