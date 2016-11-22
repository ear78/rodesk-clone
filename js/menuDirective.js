angular.module('noServer')
    .directive('menu', function(){
        return {
            restrict: 'EA',
            link: function(scope, element, attrs){

                element.on('click', function(){
                    $('.menu-container').css('width', '300px');
                    $('.main-container').css('margin-right', '300px');
                    $(this).animate({right: '325px'});

                })

                $('#menu-close, .menu-li').on('click', function(){
                        $('.menu-container').css('width', '0px');
                        $('.main-container').css('margin-right', '0px');
                        $('#hamburger').animate({right: '25px'});
                    })
            }
        }
    })
