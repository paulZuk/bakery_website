//Header scroll change

function headerScrollChange() {
    let pos = $(window).scrollTop();
    const headerNavbar = $('.main-header__menu');
    const nav = $('.main-header__nav');
    const headerHeight = $('header').height();

    if (pos >= 2600 + headerHeight) {

        nav.fadeOut(200);

    } else if (pos >= 30) {
        headerNavbar.css({
            height:'85px'
        });

        nav.css({
            backgroundColor:'rgba(86,83,76,.9)'
        });

        nav.fadeIn(200);

    } else {
        headerNavbar.css({
            height:'70px'
        });

        nav.css({
            backgroundColor:'rgba(86,83,76,.53)'
        });

    }
}
if (window.matchMedia('(min-width: 992px)').matches) {

    $(window).on('scroll', function() {
        headerScrollChange();
    });
}

