# asapSlider

**Childishly simple jQuery slider which you can use ASAP!**

#### Currently this slider is not:
- responsive
- flexible
- independent
- beautiful

#### But it actually is:
- simple

## How to use

### 1. Include files

```html
<link rel="stylesheet" href="asap-slider.css">
<script src="jquery.asapslider.js"></script>
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

### 3. Call the asapSlider

```javascript
$('.this-is-my-slider').asapSlider();
```

## Options
```javascript
$('.this-is-my-slider').asapSlider({
    speed: 500,
    pause: 2500,
    transition: 'slide', // 'slide', 'fade'
    autoPlay: false,
    onSlideComplete: function(){ console.log('slide loaded'); }
});
```
