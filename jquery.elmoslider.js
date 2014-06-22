//  elmoSlider v0.0.3 by Michal Dolny
//  dependencies: jQuery

$.fn.elmoSlider = function(n, x) {
    // n - number of slides
    // x - slide width
    // example - 3 slides, each 360px wide
    // state represents margin that will be applied to each slide
    var state = [0],
        i = 0,  // start point
        slider = this;
    for(var j=1; j<n; j++){
        state[j]=-(j*x);
    }
    console.log(state);
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