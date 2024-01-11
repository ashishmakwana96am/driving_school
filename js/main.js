
$(document).ready(function () { 
    $('#singleSlideCarousel').owlCarousel({
        loop: true,
        nav: true,
        items: 1,
    });

    $('#coursesCarousel').owlCarousel({
        loop: true,
        nav: true,
        items: 1,
        responsive:{
        768:{
            items:2,
            nav:true
        },
        1024:{
            items:3,
            nav:true
        },
    }
    });

    $('#coursesCarousel2').owlCarousel({
        loop: true,
        nav: true,
        items: 3,
        responsive:{
        575:{
            items:1,
            nav:true
        },
        768:{
            items:6,
            nav:true
        },
        1024:{
            items:9,
            nav:true
        },
        
    }
    });
    $('#connectus').owlCarousel({
        loop: true,
        nav: true,
        items: 1,
        dots: false,
        responsive:{
        768:{
            items:3,
            nav:true
        },
        1024:{
            items:5,
            nav:true
        },
    }
    });
    
});

{/* counter */}
(function ($) {
$.fn.countTo = function (options) {
options = options || {};

return $(this).each(function () {
    // set options for current element
    var settings = $.extend({}, $.fn.countTo.defaults, {
        from:            $(this).data('from'),
        to:              $(this).data('to'),
        speed:           $(this).data('speed'),
        refreshInterval: $(this).data('refresh-interval'),
        decimals:        $(this).data('decimals')
    }, options);
    
    // how many times to update the value, and how much to increment the value on each update
    var loops = Math.ceil(settings.speed / settings.refreshInterval),
        increment = (settings.to - settings.from) / loops;
    
    // references & variables that will change with each update
    var self = this,
        $self = $(this),
        loopCount = 0,
        value = settings.from,
        data = $self.data('countTo') || {};
    
    $self.data('countTo', data);
    
    // if an existing interval can be found, clear it first
    if (data.interval) {
        clearInterval(data.interval);
    }
    data.interval = setInterval(updateTimer, settings.refreshInterval);
    
    // initialize the element with the starting value
    render(value);
    
    function updateTimer() {
        value += increment;
        loopCount++;
        
        render(value);
        
        if (typeof(settings.onUpdate) == 'function') {
            settings.onUpdate.call(self, value);
        }
        
        if (loopCount >= loops) {
            // remove the interval
            $self.removeData('countTo');
            clearInterval(data.interval);
            value = settings.to;
            
            if (typeof(settings.onComplete) == 'function') {
                settings.onComplete.call(self, value);
            }
        }
    }
    
    function render(value) {
        var formattedValue = settings.formatter.call(self, value, settings);
        $self.html(formattedValue);
    }
});
};

$.fn.countTo.defaults = {
from: 0,               // the number the element should start at
to: 0,                 // the number the element should end at
speed: 1000,           // how long it should take to count between the target numbers
refreshInterval: 100,  // how often the element should be updated
decimals: 0,           // the number of decimal places to show
formatter: formatter,  // handler for formatting the value before rendering
onUpdate: null,        // callback method for every time the element is updated
onComplete: null       // callback method for when the element finishes updating
};

function formatter(value, settings) {
return value.toFixed(settings.decimals);
}
}(jQuery));

jQuery(function ($) {
// custom formatting example
$('.count-number').data('countToOptions', {
formatter: function (value, options) {
return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
}
});

// start all the timers
$('.timer').each(count);  

function count(options) {
var $this = $(this);
options = $.extend({}, options || {}, $this.data('countToOptions') || {});
$this.countTo(options);
}
});



// Toggle language dropdown visibility
function toggleDropdown() {
var dropdown = document.getElementById('languageDropdown');
dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}

// Change the current language
function changeLanguage(languageCode) {
var currentLanguage = document.querySelector('.current-language');
var languageName = getLanguageName(languageCode);
currentLanguage.innerText = languageName;
toggleDropdown(); // Hide the dropdown after selecting a language
}

// Get language name based on language code
function getLanguageName(languageCode) {
switch (languageCode) {
    case 'en':
        return 'English';
    case 'ar':
        return 'العربية';
    default:
        return languageCode;
}
}

// ---course  page---

function changeText(button) {
    button.innerHTML = "REGISTER NOW";
  }

  function restoreText(button) {
    button.innerHTML = "VIEW COURSE";
  }



  $('.faciliy-detail-section .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    items:1,
    dots:false,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


