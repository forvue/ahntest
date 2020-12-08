// Slick area
$(function slickWrap () {
    
    $('.infoCont').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        vertical: true,
        // fade: true,
        // dots: true,
        draggable: false,
        asNavFor: '.infoThumb'
    });

    $('.infoThumb').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        // fade: true,
        vertical: true,
        asNavFor: '.infoCont',
        dots: true
    });

    $('.subSlide ul').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        vertical: true,
        autoplay: true
    });
});

// layer popup
$(function popup() {

    // $('.layCont').niceScroll({
    //     cursorcolor: '#2fa3fd',
    //     cursorwidth: '5px',
    //     background: 'rgba(229, 229, 229, 1)',
    //     cursorborder: 'none',
    //     cursorborderradius: 0
    // });

    $('.openPop').click(function () {
        $('.layPop').addClass('on');
        $('body').css('position','fixed');
    });
    $('.layClose').click(function () {
        $('.layPop').removeClass('on');
        $('body').css('position', 'inherit');
    });

    // $('.agreeP').niceScroll({
    //     cursorcolor: '#2fa3fd',
    //     cursorwidth: '5px',
    //     background: 'rgba(229, 229, 229, 1)',
    //     cursorborder: 'none',
    //     cursorborderradius: 0
    // });
});

$(window).scroll(function () {
    
    // Top menu fixed
    var fixGnb = $('header');
    var scrollValue = $(window).scrollTop();

    function fixedGnb () {
        if (scrollValue > 1) {
            fixGnb.addClass('fixed');
            $('.headWrap').addClass('alpha');
        } else {
            fixGnb.removeClass('fixed');
            $('.headWrap').removeClass('alpha');
        }
        return false;
    }

    // Quick menu
    var quickTop = $(window).outerHeight() * 0.5;

    function fixedQmenu () {
        $('.qMenu').stop().animate({
            "top": quickTop + scrollValue
        }, 350);
    };

    fixedGnb();
    fixedQmenu();

});
