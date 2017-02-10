angular.module('ProvokeApp')
.service('EmailService', EmailService);

function EmailService ($http) {
  //quote form info to be sent as email
  this.sendEmail = function (formData) {
    var customerEmail = formData.email;
    var customerText = formData.text;
    console.log('what is the formData', formData);
      return $http({
        method: 'GET',
        url: '/email/' + customerEmail + '/' + customerText
      }).then(function successCallback(response) {
          return console.log('sent email service',response.data);
        }, function errorCallback(response) {
          console.log('Error in Call back');
        });//end of get
    };

}
