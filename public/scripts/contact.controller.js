angular.module('ProvokeApp')
    .controller('ContactController', ContactController);

function ContactController(/*needed services go here*/) {
  var contact = this;

  /* start map view true and button name as World View */
  contact.show = true;
  contact.buttonName = "Switch to World View";

  /* function to allow user to to switch the boolean value of contact.show*/
  contact.viewButton = function() {
    if (contact.show === true ) {
      contact.show = false;
      contact.buttonName = "Switch to Map View";
    } else {
      contact.show = true;
      contact.buttonName = "Switch to World View";
    }
  };

}//end of ContactController function
