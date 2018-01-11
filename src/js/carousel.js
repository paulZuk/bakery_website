
const next = $('.change__next');
const prev = $('.change__prev');
const slider = $('.change__container');
const list = slider.find('ul');
const photos = list.find('[class*="item-"]');
const photoWidth = $(photos[0]).width();
let activeSlide = 1;

//Options variables

let margin = 20;
let slideChangeTime = 3000;
let fadeOutTime = 50;
let fadeInTime = 500;

const images = $('.carousel__image').children();

//Setup carousel

photos.each(function() {
    $(this).clone().addClass('duplicate').appendTo(list);
});

$(photos.get().reverse()).each(function() {
    $(this).clone().addClass('duplicate').prependTo(list);
});

list.css({
    width: ((photoWidth + margin) * (photos.length + 8))
});

slider.css({
    width: ((photoWidth + margin) * photos.length),
    overflow: 'hidden'
});

list.css({
    left: (-photoWidth - margin)*2
});

$(images[0]).css({
    zIndex:2,
    opacity:1
});

//Interval setup

let interval = setInterval(function() {

    list.animate({
        left: '-=' + (photoWidth + margin)
    }, function() {
        if (activeSlide === photos.length){
            list.css({
                left: (-photoWidth - margin) * 2
            });
            activeSlide = 0;

            images.css({
                zIndex:1,
                opacity: .1
            });
            $(images[0]).css({
                zIndex: 2,
                opacity: 1
            })
            // fadeOutImages(fadeOutTime);
            // $(images[0]).fadeIn(fadeInTime);

        } else {
            images.css({
                zIndex:1,
                opacity: .1
            });
            $(images[activeSlide]).css({
                zIndex: 2,
                opacity: 1
            })
            // fadeOutImages(fadeOutTime);
            // $(images[activeSlide]).fadeIn(fadeInTime);
        }
        activeSlide++;
    })
}, slideChangeTime);

//Next slide

next.on('click', function() {

    list.animate({
        left: '-=' + (photoWidth + margin)
    }, function() {
        if (activeSlide === photos.length){
            list.css({
                left: (-photoWidth - margin) * 2
            });
            activeSlide = 0;

            images.css({
                zIndex:1,
                opacity: .1
            });
            $(images[0]).css({
                zIndex: 2,
                opacity: 1
            })
            // fadeOutImages(fadeOutTime);
            // $(images[0]).fadeIn(fadeInTime);

        } else {
            images.css({
                zIndex:1,
                opacity: .1
            });
            $(images[activeSlide]).css({
                zIndex: 2,
                opacity: 1
            })
            // fadeOutImages(fadeOutTime);
            // $(images[activeSlide]).fadeIn(fadeInTime);
        }
        activeSlide++;
    });
    clearInterval(interval);
});

//Previous slide

prev.on('click', function() {

    list.animate({
        left: '+=' + (photoWidth + margin)
    }, function() {
        activeSlide--;
        if (activeSlide === 0) {
            list.css({
                left: (-photoWidth - margin) * (photos.length + 1)
            });

            activeSlide = photos.length;

            images.css({
                zIndex:1,
                opacity: .1
            });
            $(images[2]).css({
                zIndex: 2,
                opacity: 1
            })

            // fadeOutImages(fadeOutTime);
            // $(images[2]).fadeIn(fadeInTime);

        } else {
            images.css({
                zIndex:1,
                opacity: .1
            });
            $(images[activeSlide-1]).css({
                zIndex: 2,
                opacity: 1
            })
            // fadeOutImages(fadeOutTime);
            // $(images[activeSlide-1]).fadeIn(fadeInTime);
        }
    });
    clearInterval(interval);
});

function fadeOutImages(time){
    images.fadeOut(time);
}

