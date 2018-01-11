$(function(){

var next = $('.change__next');
var prev = $('.change__prev');
var slider = $('.change__container');
var list = slider.find('ul');
var photos = list.find('[class*="item-"]');
var photoWidth = $(photos[0]).width();
var activeSlide = 1;

//Options variables

var margin = 20;
var slideChangeTime = 3000;
var fadeOutTime = 50;
var fadeInTime = 500;

var images = $('.carousel__image').children();

//Setup carousel

photos.each(function () {
    $(this).clone().addClass('duplicate').appendTo(list);
});

$(photos.get().reverse()).each(function () {
    $(this).clone().addClass('duplicate').prependTo(list);
});

list.css({
    width: (photoWidth + margin) * (photos.length + 8)
});

slider.css({
    width: (photoWidth + margin) * photos.length,
    overflow: 'hidden'
});

list.css({
    left: (-photoWidth - margin) * 2
});

$(images[0]).css({
    zIndex: 2,
    opacity: 1
});

//Interval setup

var interval = setInterval(function () {

    list.animate({
        left: '-=' + (photoWidth + margin)
    }, function () {
        if (activeSlide === photos.length) {
            list.css({
                left: (-photoWidth - margin) * 2
            });
            activeSlide = 0;

            images.css({
                zIndex: 1,
                opacity: .1
            });
            $(images[0]).css({
                zIndex: 2,
                opacity: 1
            });
            // fadeOutImages(fadeOutTime);
            // $(images[0]).fadeIn(fadeInTime);
        } else {
            images.css({
                zIndex: 1,
                opacity: .1
            });
            $(images[activeSlide]).css({
                zIndex: 2,
                opacity: 1
            });
            // fadeOutImages(fadeOutTime);
            // $(images[activeSlide]).fadeIn(fadeInTime);
        }
        activeSlide++;
    });
}, slideChangeTime);

//Next slide

next.on('click', function () {

    list.animate({
        left: '-=' + (photoWidth + margin)
    }, function () {
        if (activeSlide === photos.length) {
            list.css({
                left: (-photoWidth - margin) * 2
            });
            activeSlide = 0;

            images.css({
                zIndex: 1,
                opacity: .1
            });
            $(images[0]).css({
                zIndex: 2,
                opacity: 1
            });
            // fadeOutImages(fadeOutTime);
            // $(images[0]).fadeIn(fadeInTime);
        } else {
            images.css({
                zIndex: 1,
                opacity: .1
            });
            $(images[activeSlide]).css({
                zIndex: 2,
                opacity: 1
            });
            // fadeOutImages(fadeOutTime);
            // $(images[activeSlide]).fadeIn(fadeInTime);
        }
        activeSlide++;
    });
    clearInterval(interval);
});

//Previous slide

prev.on('click', function () {

    list.animate({
        left: '+=' + (photoWidth + margin)
    }, function () {
        activeSlide--;
        if (activeSlide === 0) {
            list.css({
                left: (-photoWidth - margin) * (photos.length + 1)
            });

            activeSlide = photos.length;

            images.css({
                zIndex: 1,
                opacity: .1
            });
            $(images[2]).css({
                zIndex: 2,
                opacity: 1
            });

            // fadeOutImages(fadeOutTime);
            // $(images[2]).fadeIn(fadeInTime);
        } else {
            images.css({
                zIndex: 1,
                opacity: .1
            });
            $(images[activeSlide - 1]).css({
                zIndex: 2,
                opacity: 1
            });
            // fadeOutImages(fadeOutTime);
            // $(images[activeSlide-1]).fadeIn(fadeInTime);
        }
    });
    clearInterval(interval);
});

function fadeOutImages(time) {
    images.fadeOut(time);
}
//Header scroll change

headerScrollChange = function headerScrollChange() {
    var pos = $(window).scrollTop();
    var headerNavbar = $('.main-header__menu');
    var nav = $('.main-header__nav');
    var headerHeight = $('header').height();

    if (pos >= 2600 + headerHeight) {

        nav.fadeOut(200);
    } else if (pos >= 30) {
        headerNavbar.css({
            height: '85px'
        });

        nav.css({
            backgroundColor: 'rgba(86,83,76,.9)'
        });

        nav.fadeIn(200);
    } else {
        headerNavbar.css({
            height: '70px'
        });

        nav.css({
            backgroundColor: 'rgba(86,83,76,.53)'
        });
    }
};

$(window).on('scroll', function () {
    headerScrollChange();
});
});
//# sourceMappingURL=js.bundle.js.map