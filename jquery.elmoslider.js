//  elmoSlider v0.0.4 by Michal Dolny
//  dependencies: jQuery

(function($){

    $.fn.elmoSlider = function(options){
        var defaults = {
            speed: 500,
            pause: 1000,
            anim: 'slide',
            autoPlay: false
        };
        options = $.extend(defaults, options);

        var slider = $(this);
        var state = [0];
        var i = 0; 
        var j = 0;

        slider.find('.slide').each(function(){
            state[j]=-(j * $(this).width());
            j++;
        });

        slider.find('.slider-content').css({
            width: (state.length * 100 + '%')
        });
        slider.find('.slide').css({
            width: (100 / state.length + '%')
        });


        if(options.autoPlay === false){
            $(slider).on('click', '.slide-left', function(){
                i--;
                if( i < 0 ){ i = 2 };
                if(options.anim == 'opacity'){
                    $('.active-slide').removeClass('active-slide');
                    $('.slide'+(i+1)).addClass('active-slide');
                }else{
                    $(slider).find('.slider-content').animate({'margin-left': state[i]}, options.speed);
                };
            });
            $(slider).on('click', '.slide-right', function(){
                i++;
                if( i > 2 ){ i = 0 };
                if(options.anim == 'opacity'){
                    $('.active-slide').removeClass('active-slide');
                    $('.slide'+(i+1)).addClass('active-slide');
                }else{
                    $(slider).find('.slider-content').animate({'margin-left': state[i]}, options.speed);
                };
            });
        }

    };

})(jQuery);
