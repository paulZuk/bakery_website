$(function(){
//Elements constants

var next = $('.change__next');
var prev = $('.change__prev');
var slider = $('.change__container');
var list = slider.find('ul');
var photos = list.find('[class*="item-"]');
var texts = $('.description__text').children();
var images = $('.carousel__image').children();
var time = $('.preparation__time').children();
var headers = $('.description__header').children();
var photoWidth = $(photos[0]).width();
var descriptionBtn = $('.description__more');
var descriptionWrap = $('.carousel__wrap');
var caruselImage = $('.carousel__image');

//Options variables

var unwraped = 0;
var activeSlide = 1;
var margin = 20;
var slideChangeTime = 3000;

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

// Images initial state

$(images[0]).css({
    zIndex: 2,
    opacity: 1
});

//Texts initial state

$(texts[0]).css({
    zIndex: 2,
    opacity: 1
});

//Time initial state

$(time[0]).css({
    zIndex: 2,
    opacity: 1
});

//Headers initial state

$(headers[0]).css({
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

            showElement(images, activeSlide, 'first', .1);
            showElement(texts, activeSlide, 'first', 0);
            showElement(time, activeSlide, 'first', 0);
            showElement(headers, activeSlide, 'first', 0);
        } else {
            showElement(images, activeSlide, 'current', .1);
            showElement(texts, activeSlide, 'current', 0);
            showElement(time, activeSlide, 'current', 0);
            showElement(headers, activeSlide, 'current', 0);
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

            showElement(images, activeSlide, 'first', .1);
            showElement(texts, activeSlide, 'first', 0);
            showElement(time, activeSlide, 'first', 0);
            showElement(headers, activeSlide, 'first', 0);
        } else {
            showElement(images, activeSlide, 'current', .1);
            showElement(texts, activeSlide, 'current', 0);
            showElement(time, activeSlide, 'current', 0);
            showElement(headers, activeSlide, 'current', 0);
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

            showElement(images, activeSlide, 'last', .1);
            showElement(texts, activeSlide, 'last', 0);
            showElement(time, activeSlide, 'last', 0);
            showElement(headers, activeSlide, 'last', 0);
        } else {

            showElement(images, activeSlide, 'currentFromEnd', .1);
            showElement(texts, activeSlide, 'currentFromEnd', 0);
            showElement(time, activeSlide, 'currentFromEnd', 0);
            showElement(headers, activeSlide, 'currentFromEnd', 0);
        }
    });
    clearInterval(interval);
});

descriptionBtn.on('click', function () {

    clearInterval(interval);

    if (unwraped === 0) {
        descriptionWrap.css({
            width: '400px'
        });
        caruselImage.css({
            width: 0
        });
        unwraped = 1;
    } else {
        descriptionWrap.css({
            width: '1px'
        });
        caruselImage.css({
            width: '400px'
        });
        unwraped = 0;
    }
});

function fadeOutImages(time) {
    images.fadeOut(time);
}

function showElement(elements, active, photoPosition, startOpacity) {
    switch (photoPosition) {
        case 'first':

            elements.css({
                zIndex: 1,
                opacity: startOpacity
            });
            $(elements[0]).css({
                zIndex: 2,
                opacity: 1
            });
            break;

        case 'last':

            elements.css({
                zIndex: 1,
                opacity: startOpacity
            });
            $(elements[elements.length - 1]).css({
                zIndex: 2,
                opacity: 1
            });
            break;

        case 'current':

            elements.css({
                zIndex: 1,
                opacity: startOpacity
            });
            $(elements[active]).css({
                zIndex: 2,
                opacity: 1
            });
            break;

        case 'currentFromEnd':

            elements.css({
                zIndex: 1,
                opacity: startOpacity
            });
            $(elements[active - 1]).css({
                zIndex: 2,
                opacity: 1
            });
            break;

        default:
            return;
    }
}
//Header scroll change

function headerScrollChange() {
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
}
if (window.matchMedia('(min-width: 992px)').matches) {

    $(window).on('scroll', function () {
        headerScrollChange();
    });
}
});
//# sourceMappingURL=js.bundle.js.map
