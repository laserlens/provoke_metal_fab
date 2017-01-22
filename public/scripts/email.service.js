angular.module('ProvokeApp')
.service('EmailService', EmailService);

function EmailService ($http) {
  //quote form info to be sent as email
  this.sendEmail = function (formData) {
    console.log('what is the formData', formData);
      return $http({
        method: 'PUT',
        url: '/email',
        data: formData
      }).then(function successCallback(response) {
          return console.log('sent email service?');
        }, function errorCallback(response) {
          console.log('Error in Call back');
        });//end of get
    };

}
