/* elmoSlider v0.0.1 by Michal Dolny */
/* dependencies: jQuery */

$(function(){
    var elmoSlider = {
        /* 3 slides, each 1020px wide */
        /* state represents margin that will be applied to each slide */
        state: ['0', '-1020px', '-2040px'],
        i: 0
    };
    $('.slide-left').on('click', function(){
        elmoSlider.i--;
        if( elmoSlider.i < 0 ){ elmoSlider.i = 2 };
        $('.slider-content').animate({'margin-left': elmoSlider.state[elmoSlider.i]}, 'slow');
    });
    $('.slide-right').on('click', function(){
        elmoSlider.i++;
        if( elmoSlider.i > 2 ){ elmoSlider.i = 0 };
        $('.slider-content').animate({'margin-left': elmoSlider.state[elmoSlider.i]}, 'slow');
    });
});
