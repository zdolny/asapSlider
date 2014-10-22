//  elmoSlider v0.0.4 by Michal Dolny
//  dependencies: jQuery

(function($){

    $.fn.elmoSlider = function(options){
        var defaults = {
            speed: 500,
            pause: 2500,
            transition: 'slide',
            autoPlay: false,
            complete: null
        };
        var settings = $.extend({}, defaults, options);

        var slider = this;
        var state = [0];
        var i = 0; 
        var j = 0;

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

            if (settings.pause <= settings.speed){
                settings.pause = settings.speed + 100;
            }

            if (settings.autoPlay === false){
                $(slider).on('click', '.slide-left', function(){
                    prevSlide();
                });
                $(slider).on('click', '.slide-right', function(){
                    nextSlide();
                });
            }

            if (settings.autoPlay === true){
                setInterval(function(){
                    nextSlide();
                }, settings.pause);
            }

            function switchSlide(){
                if (settings.transition === 'fade'){
                    $('.active-slide').removeClass('active-slide').animate({'opacity': 0}, settings.speed);
                    $('.slide'+(i+1)).addClass('active-slide').animate({'opacity': 1}, settings.speed);
                } else {
                    $(slider).find('.slider-content').animate({'margin-left': state[i]}, settings.speed);
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
                if ($.isFunction(settings.complete)){
                    setTimeout(function(){
                        settings.complete.call(this);
                    }, settings.speed);
                }
            }

        });

    };

})(jQuery);
