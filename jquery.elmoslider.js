//  elmoSlider v0.0.4 by Michal Dolny
//  dependencies: jQuery

(function($){

    $.fn.elmoSlider = function(options) {
        var defaults = {
            speed: 500,
            pause: 1000,
            anim: 'slide',
            numberOfSlides: 3,
            slideWidth: $(this).find('.slider-content').children().width(),
            autoPlay: false
        };
        options = $.extend(defaults, options);

        if(options.autoPlay === false){
            var state = [0];
            var i = 0;  // start point
            var slider = $(this);
            for(var j=1; j<options.numberOfSlides; j++){
                state[j]=-(j*options.slideWidth);
            }
            $(slider).on('click', '.slide-left', function(){
                i--;
                if( i < 0 ){ i = 2 };
                if(options.anim == 'opacity'){
                    $('.active-slide').removeClass('active-slide');
                    $('.slide'+(i+1)).addClass('active-slide');
                }else{
                    $(slider).find('.slider-content').animate({'margin-left': state[i]}, 'slow');
                };
            });
            $(slider).on('click', '.slide-right', function(){
                i++;
                if( i > 2 ){ i = 0 };
                if(options.anim == 'opacity'){
                    $('.active-slide').removeClass('active-slide');
                    $('.slide'+(i+1)).addClass('active-slide');
                }else{
                    $(slider).find('.slider-content').animate({'margin-left': state[i]}, 'slow');
                };
            });
        }

    };

})(jQuery);
