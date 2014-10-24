# elmoSlider

**Childishly simple jQuery slider which even Elmo could write by himself**

#### Currently this slider is not:
- responsive
- flexible
- independent
- beautiful

#### But it actually is:
- simple

**Elmo** want to show you that next time when your mind will tell you _I must find some slider plugin_ and you will wondering _Which one should I choose?_ - you can just write your own.

## How to use

### 1. Include files

```html
<link rel="stylesheet" href="elmo-slider.css">
<script src="jquery.elmoslider.js"></script>
```

### 2. Create HTML structure

```html
<div class="this-is-my-slider slider-wrap">
	<div class="slide-left">&lt;</div>
	<div class="slide-right">&gt;</div>

	<div class="slider-content">
    	<div class="slide"> slide 1 </div>
        <div class="slide"> slide 2 </div>
        <div class="slide"> slide 3 </div>
	</div>
</div>
```

### 3. Call the elmoSlider

```javascript
$('.this-is-my-slider').elmoSlider();
```

## Options
```javascript
{
    speed: 500,
    pause: 2500,
    transition: 'slide', // 'slide', 'fade'
    autoPlay: false,
    onSlideComplete: function(){ console.log('slide loaded'); }
}
```
