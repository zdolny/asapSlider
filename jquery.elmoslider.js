//  elmoSlider v0.0.3 by Michal Dolny
//  dependencies: jQuery

$.fn.elmoSlider = function(options) {
    var defaults = {
        content: 'smth',
        n: 'smth',
        x: 'smth',
        anim: 'smth'
    };
    // n - number of slides
    // x - slide width
    // example - 3 slides, each 360px wide
    // state represents margin that will be applied to each slide
    var state = [0],
        i = 0,  // start point
        slider = content;
    for(var j=1; j<n; j++){
        state[j]=-(j*x);
    }
    $(slider).on('click', '.slide-left', function(){
        i--;
        if( i < 0 ){ i = 2 };
        if(anim == 'opacity'){
            $('.active-slide').removeClass('active-slide');
            $('.slide'+(i+1)).addClass('active-slide');
        }else{
            $(slider).find('.slider-content').animate({'margin-left': state[i]}, 'slow');
        };
    });
    $(slider).on('click', '.slide-right', function(){
        i++;
        if( i > 2 ){ i = 0 };
        if(anim == 'opacity'){
            $('.active-slide').removeClass('active-slide');
            $('.slide'+(i+1)).addClass('active-slide');
        }else{
            $(slider).find('.slider-content').animate({'margin-left': state[i]}, 'slow');
        };
    });
};