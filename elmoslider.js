//  elmoSlider v0.0.3 by Michal Dolny
//  dependencies: none

var elmoSlider = {
    init: function(slider, n, x){
        var state = [0],
            i = 0;  // start point
        for(var j=1; j<n; j++){
            state[j]=-(j*x);
        };
        var $prev = document.querySelector('.slider2-wrap .slide-left');
        $prev.addEventListener('click', function(){
            i--;
            if( i < 0 ){ i = 2 };
            slider.setAttribute('style', 'margin-left:'+state[i]+'px');
        });
        var $next = document.querySelector('.slider2-wrap .slide-right');
        $next.addEventListener('click', function(){
            i++;
            if( i > 2 ){ i = 0 };
            slider.setAttribute('style', 'margin-left:'+state[i]+'px');
        });
    }
};

