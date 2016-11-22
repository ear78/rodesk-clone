angular.module('noServer')
    .directive('toggleSwitch', function(){
        return {
            restrict: 'EA',
            link: function(scope, element, attrs){
                element.on('click', function(){
                    $('#toggle1').slideToggle('slow');
                })
            }
        }
    })
