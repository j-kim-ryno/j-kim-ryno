
window.HELP_IMPROVE_VIDEOJS = false;


var INTERP_BASE_2 = "https://huggingface.co/datasets/johnkimryno/IEG_data/resolve/main/stacked_2";
var NUM_INTERP_FRAMES = 240;

var interp_images_2 = [];
function preloadInterpolationImages_2() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path_2 = INTERP_BASE_2 + '/' + String(i).padStart(6, '0') + '.jpg';
    interp_images_2[i] = new Image();
    interp_images_2[i].src = path_2;
  }
}

function setInterpolationImage_2(i) {
  var image_2 = interp_images_2[i];
  image_2.ondragstart = function() { return false; };
  image_2.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-2').empty().append(image_2);
}


$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    var options_2 = {
			slidesToScroll: 1,
			slidesToShow: 3,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

		// Initialize all div with carousel class
    var carousels_2 = bulmaCarousel.attach('.carousel', options_2);

    // Loop on each carousel initialized
    for(var i = 0; i < carousels_2.length; i++) {
    	// Add listener to  event
    	carousels_2[i].on('before:show', state => {
    		console.log(state);
    	});
    }

    // Access to bulmaCarousel instance of an element
    var element_2 = document.querySelector('#my-element');
    if (element_2 && element_2.bulmaCarousel) {
    	// bulmaCarousel instance is available as element.bulmaCarousel
    	element_2.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }

    /*var player = document.getElementById('interpolation-video');
    player.addEventListener('loadedmetadata', function() {
      $('#interpolation-slider').on('input', function(event) {
        console.log(this.value, player.duration);
        player.currentTime = player.duration / 100 * this.value;
      })
    }, false);*/
    preloadInterpolationImages_2();

    $('#interpolation-slider-2').on('input', function(event) {
      setInterpolationImage_2(this.value);
    });
    setInterpolationImage_2(0);
    $('#interpolation-slider-2').prop('max', NUM_INTERP_FRAMES - 1);

    bulmaSlider.attach();

})
