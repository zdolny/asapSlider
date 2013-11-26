//  elmoSlider v0.0.2 by Michal Dolny
//  dependencies: jQuery

$.fn.elmoSlider = function() {
    // 3 slides, each 1020px wide
    // state represents margin that will be applied to each slide
    var state = ['0', '-1020px', '-2040px'],
        i = 0,  // start point
        slider = this;
    $('.slide-left').on('click', function(){
        i--;
        if( i < 0 ){ i = 2 };
        slider.animate({'margin-left': state[i]}, 'slow');
    });
    $('.slide-right').on('click', function(){
        i++;
        if( i > 2 ){ i = 0 };
        slider.animate({'margin-left': state[i]}, 'slow');
    });
};