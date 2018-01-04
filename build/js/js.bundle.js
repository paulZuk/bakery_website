$(function(){
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
            height: '90px'
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

$(window).on('scroll', function () {
    headerScrollChange();
});
});
//# sourceMappingURL=js.bundle.js.map
