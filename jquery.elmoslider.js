//  elmoSlider v0.0.4 by Michal Dolny
//  dependencies: jQuery

(function($){

    $.fn.elmoSlider = function(options){
        var defaults = {
            speed: 500,
            pause: 2500,
            transition: 'slide',
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

        // setup css
        if (options.transition === 'slide'){
            slider.find('.slider-content').css({
                width: (state.length * 100 + '%')
            });
            slider.find('.slide').css({
                width: (100 / state.length + '%'),
                'float': 'left',
            });
        } else if (options.transition === 'fade'){
            slider.find('.slider-content').css({
                width: (100 + '%')
            });
            slider.find('.slide').css({
                width: (100 + '%'),
                'float': 'none',
                position: 'absolute',
                opacity: 0
            });
        }
        $(slider).find('.slide').first().addClass('active-slide').css('opacity', '1');

        if (options.pause <= options.speed){
            options.pause = options.speed + 100;
        }

        if (options.autoPlay === false){
            $(slider).on('click', '.slide-left', function(){
                i--;
                if ( i < 0 ){ i = 2 };
                if (options.transition === 'fade'){
                    $('.active-slide').removeClass('active-slide').animate({'opacity': 0}, options.speed);
                    $('.slide'+(i+1)).addClass('active-slide').animate({'opacity': 1}, options.speed);
                } else {
                    $(slider).find('.slider-content').animate({'margin-left': state[i]}, options.speed);
                };
            });
            $(slider).on('click', '.slide-right', function(){
                slideForward();
            });
        }

        if (options.autoPlay === true){
            setInterval(function(){
                slideForward();
            }, options.pause);
        }

        function slideForward(){
            i++;
            if ( i > 2 ){ i = 0 };
            if (options.transition === 'fade'){
                $('.active-slide').removeClass('active-slide').animate({'opacity': 0}, options.speed);
                $('.slide'+(i+1)).addClass('active-slide').animate({'opacity': 1}, options.speed);
            } else {
                $(slider).find('.slider-content').animate({'margin-left': state[i]}, options.speed);
            };
        }

    };

})(jQuery);
