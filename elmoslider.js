//  elmoSlider v0.0.3 by Michal Dolny
//  dependencies: ...

var elmoSlider = {
    init: function(slider, n, x){
        var state = [0],
            i = 0;  // start point
        for(var j=1; j<n; j++){
            state[j]=-(j*x);
        };
        $('.slider2-wrap .slide-left').on('click', function(){
            i--;
            if( i < 0 ){ i = 2 };
            slider.setAttribute('style', 'margin-left:'+state[i]+'px');
        });
        $('.slider2-wrap .slide-right').on('click', function(){
            i++;
            if( i > 2 ){ i = 0 };
            slider.setAttribute('style', 'margin-left:'+state[i]+'px');
        });
    }
};

