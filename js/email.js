angular.module('noServer')
    .directive('email', function(){
        return {
            restrict: 'EA', 
            link: function(scope, element, attrs) {

                    element.on('click', function(){
                        var email = $('#myEmail').val();
                        var name = $('#myName').val();
                        if(email && name === ''){
                            alert("Please fill in the required fields");

                        }
                        else {
                            alert("Thank you " + name + " we'll be sending an email to " + email + " , and be in touch with you shortly.");
                        }

                    })
            }
        }
    })
