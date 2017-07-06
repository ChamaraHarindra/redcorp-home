//////////////// VAT switch scripts ///////////////////
$(function() {

    $('.switch').change(function() {
        $(this).toggleClass('checked');
    });

});

//////////////// Sliding Cart push menu script ///////////////////
(function(window) {
    'use strict';
    /** * Extend Object helper function. */
    function extend(a, b) {
        for (var key in b) {
            if (b.hasOwnProperty(key)) {
                a[key] = b[key];
            }
        }
        return a;
    }
    /** * Each helper function. */
    function each(collection, callback) {
        for (var i = 0; i < collection.length; i++) {
            var item = collection[i];
            callback(item);
        }
    }
    /** * Menu Constructor. */
    function Menu(options) {
        this.options = extend({}, this.options);
        extend(this.options, options);
        this._init();
    }
    /** * Initialise Menu. */
    Menu.prototype._init = function() {
        this.body = document.body;
        this.wrapper = document.querySelector(this.options.wrapper);
        this.mask = document.querySelector(this.options.maskId);
        this.menu = document.querySelector('#sliding-cart--' + this.options.type);
        this.closeBtn = this.menu.querySelector('.sliding-cart__close');
        this.menuOpeners = document.querySelectorAll(this.options.menuOpenerClass);
        this._initEvents();
    };
    /** * Initialise Menu Events. */
    Menu.prototype._initEvents = function() {
        // Event for clicks on the close button inside the menu.
        this.closeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            this.close();
        }.bind(this));

        // Event for clicks on the mask.
        this.mask.addEventListener('click', function(e) {
            e.preventDefault();
            this.close();
        }.bind(this));
    };
    /** * Open Menu. */
    Menu.prototype.open = function() {
        this.body.classList.add('has-active-menu');
        this.wrapper.classList.add('has-' + this.options.type);
        this.menu.classList.add('is-active');
        this.mask.classList.add('is-active');
        this.disableMenuOpeners();
    };
    /** * Close Menu. */
    Menu.prototype.close = function() {
        this.body.classList.remove('has-active-menu');
        this.wrapper.classList.remove('has-' + this.options.type);
        this.menu.classList.remove('is-active');
        this.mask.classList.remove('is-active');
        this.enableMenuOpeners();
    };
    /** * Disable Menu Openers. */
    Menu.prototype.disableMenuOpeners = function() {
        each(this.menuOpeners, function(item) {
            item.disabled = true;
        });
    };
    /** * Enable Menu Openers. */
    Menu.prototype.enableMenuOpeners = function() {
        each(this.menuOpeners, function(item) {
            item.disabled = false;
        });
    };
    /** * Add to global namespace. */
    window.Menu = Menu;
})(window);

/** * Slide right instantiation and action. */
var slideRight = new Menu({
    wrapper: 'body',
    type: 'slide-right',
    menuOpenerClass: '.cart-open',
    maskId: '#c-mask'
});

var slideRightBtn = document.querySelector('#sliding-cart-btn--slide-right');

slideRightBtn.addEventListener('click', function(e) {
    e.preventDefault;
    slideRight.open();
});


//////////////////// mobile-search ///////////////////////////
$(".search-bar--mobile").hide();
$(".mobile-search-open").bind("click", function() {
    $(".search-bar--mobile").slideToggle();
    return false;

})

/////////////////////////////// mmenu //////////////////////////
// variables
var $menu = $('#push-menu');
var $btnMenu = $('#hamburger-menu');
var $img = $('img');
// mmenu customization
$menu.mmenu({
    counters: true,
    navbar: {
        title: ""
    },
    extensions: ["fx-menu-zoom",
        "fx-panels-slide-100",
        "fx-listitems-slide",
        "pagedim-black",
        "shadow-page",
    ],
    offCanvas: {
        position: "left",
    }
});
var api = $menu.data("mmenu");

$btnMenu.click(function() {
    api.open();
});
// change toggle behavior for subpanels
$menu.find(".mm-next").addClass("mm-fullsubopen");


/////////////////////////////// Mega Dropdown //////////////////////////
$(function() {
    $(".main-nav .dropdown").hover(
        function() {
            $('i', this).removeClass("fa fa-chevron-down");
            $('i', this).toggleClass("fa fa-chevron-up");
            $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
        },
        function() {
            $('i', this).toggleClass("fa fa-chevron-up");
            $('i', this).addClass("fa fa-chevron-down");
            $(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
        });
});

/////////////////////////////// Slide Dropdown //////////////////////////
$('.slide-dropdown').on('show.bs.dropdown', function(e) {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
});

$('.slide-dropdown').on('hide.bs.dropdown', function(e) {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
});

/////////////////////////////// Mega Dropdown Tabs //////////////////////////
$('.megamenu-tabs a').click(function(e) {
    e.preventDefault()
    $(this).tab('show')
})

/////////////////////////////// Mega Dropdown not close on click //////////////////////////
$('.mega-dropdown-menu').click(function(e) {
    e.stopPropagation();
});

/////////////////////////////// Testimonial slider //////////////////////////
$(document).ready(function() {
    $('.testimonials-slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
    });
});

/////////////////////////////// Category Slider //////////////////////////
$(document).ready(function() {
    $('.category').slick({
        dots: true,
        arrows: false,
        infinite: true,

        speed: 500,
        fade: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });
});

/////////////////////////////// Smooth Scroll //////////////////////////
/*$(window).scroll(function() {
    var sticky = $('.header'),
        scroll = $(window).scrollTop();

    if (scroll >= 45) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});*/

/*if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

function wheel(event) {
    var delta = 0;
    if (event.wheelDelta) delta = event.wheelDelta / 120;
    else if (event.detail) delta = -event.detail / 3;

    handle(delta);
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
}

var goUp = true;
var end = null;
var interval = null;

function handle(delta) {
    var animationInterval = 15; //lower is faster
    var scrollSpeed = 10; //lower is faster

    if (end == null) {
        end = $(window).scrollTop();
    }
    end -= 20 * delta;
    goUp = delta > 0;

    if (interval == null) {
        interval = setInterval(function() {
            var scrollTop = $(window).scrollTop();
            var step = Math.round((end - scrollTop) / scrollSpeed);
            if (scrollTop <= 0 ||
                scrollTop >= $(window).prop("scrollHeight") - $(window).height() ||
                goUp && step > -1 ||
                !goUp && step < 1) {
                clearInterval(interval);
                interval = null;
                end = null;
            }
            $(window).scrollTop(scrollTop + step);
        }, animationInterval);
    }
}*/

///////////////////////////////// materialize ripple effect //////////////////////////////// 
$(".wave").click(function(e) {

    // Remove any old one
    $(".ripple").remove();

    // Setup
    var posX = $(this).offset().left,
        posY = $(this).offset().top,
        buttonWidth = $(this).width(),
        buttonHeight = $(this).height();

    // Add the element
    $(this).prepend("<span class='ripple'></span>");


    // Make it round!
    if (buttonWidth >= buttonHeight) {
        buttonHeight = buttonWidth;
    } else {
        buttonWidth = buttonHeight;
    }

    // Get the center of the element
    var x = e.pageX - posX - buttonWidth / 2;
    var y = e.pageY - posY - buttonHeight / 2;


    // Add the ripples CSS and start the animation
    $(".ripple").css({
        width: buttonWidth,
        height: buttonHeight,
        top: y + 'px',
        left: x + 'px'
    }).addClass("rippleEffect");
});