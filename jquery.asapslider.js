//  asapSlider v0.0.4 by Michal Dolny
//  dependencies: jQuery

(function($){

    $.fn.asapSlider = function(options){
        var defaults = {
            speed: 500,
            pause: 2500,
            transition: 'slide',
            autoPlay: false,
            onSlideComplete: null
        };
        var settings = $.extend({}, defaults, options);

        var slider = this,
            state = [0],
            i = 0, 
            j = 0;

        slider.find('.slide').each(function(){
            state[j]=-(j * $(this).width());
            j++;
        });

        return this.each(function(){

            // setup css
            if (settings.transition === 'slide'){
                slider.find('.slider-content').css({
                    width: (state.length * 100 + '%')
                });
                slider.find('.slide').css({
                    width: (100 / state.length + '%'),
                    'float': 'left',
                });
            } else if (settings.transition === 'fade'){
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

            // pause between transitions must be longer then transition itself 
            if (settings.pause <= settings.speed){
                settings.pause = settings.speed + 100;
            }

            // switch slides - manual
            var canSlide = true;
            $(slider).on('click', '.slide-left', function(){
                if(canSlide){
                    prevSlide();
                }
            });
            $(slider).on('click', '.slide-right', function(){
                if(canSlide){
                    nextSlide();
                }
            });

            // switch slides - auto
            if (settings.autoPlay === true){
                setInterval(function(){
                    nextSlide();
                }, settings.pause);
            }

            function switchSlide(){
                canSlide = false;
                if (settings.transition === 'fade'){
                    $('.active-slide').removeClass('active-slide').stop().animate({'opacity': 0}, settings.speed, function(){
                        canSlide = true;
                    });
                    $('.slide'+(i+1)).addClass('active-slide').stop().animate({'opacity': 1}, settings.speed, function(){
                        canSlide = true;
                    });
                } else {
                    $(slider).find('.slider-content').stop().animate({'margin-left': state[i]}, settings.speed, function(){
                        canSlide = true;
                    });
                }
            }

            function nextSlide(){
                if ( i >= (state.length - 1) ){ 
                    i = 0;
                } else {
                    i++;
                }
                switchSlide();
                afterComplete();
            }

            function prevSlide(){
                if ( i <= 0 ){ 
                    i = state.length - 1;
                } else {
                    i--;
                }
                switchSlide();
                afterComplete();
            }

            function afterComplete(){
                if ($.isFunction(settings.onSlideComplete)){
                    setTimeout(function(){
                        settings.onSlideComplete.call(this);
                    }, settings.speed);
                }
            }

        });

    };

})(jQuery);
