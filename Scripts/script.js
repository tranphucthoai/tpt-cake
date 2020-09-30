$(function () {
    var selectMenu = $(".menu-main .menu-navigation-container");
    var selectCloseMenu = $(".menu-main .close-menu");
    var selectMask = $(".menu-main .mask");
    var selectCart = $(".menu-main .cart-navigation-container");

    //show menu nav
    $(".menu-main .toggler-menu").click(function () {
        selectMenu.addClass("is-active");
        selectCloseMenu.removeClass("d-none");
        selectMask.removeClass("d-none");
    });

    //show cart
    $(".menu-main .toggler-cart").click(function () {
        selectCart.addClass("is-active");
        selectCloseMenu.removeClass("d-none");
        selectMask.removeClass("d-none");
    });
    //close menu and cart
    selectCloseMenu.click(function () {
        closeMenu();
    });
    selectMask.click(function () {
        closeMenu();
    });

    function closeMenu() {
        if (selectMenu.hasClass("is-active")) {
            selectMenu.removeClass("is-active");
        } else {
            selectCart.removeClass("is-active");
        };
        selectMask.addClass("d-none");
        selectCloseMenu.addClass("d-none");
    }

    //carousel
    $('.carousel-collection-content').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            }
        }
    });
    $('.carousel-rating').owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        //animateOut: 'fadeOut',
        items: 1,
    });

    //ticky menu
    var mn = $(".menu-main");
    mns = "ticky-menu";
    //hdr = $('header').height();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            mn.addClass(mns);
        } else {
            mn.removeClass(mns);
        }
    });
});