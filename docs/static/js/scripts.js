/*---------------------------------------------
Template name:
Version:        1.0
Author:         
Author url:     

NOTE:
------
Please DO NOT EDIT THIS JS, you may need to use "custom.js" file for writing your custom js.
We may release future updates so it will overwrite this file. it's better and safer to use "custom.js".

[Table of Content]


01: Sticky Header
02: Changing svg color
03: Background Image
04: Overlay Menu
05: Back To Top
06: Coming Soon Count Down
07: Preloader
08: Activate Animation
09: Isotope - Filter


----------------------------------------------*/

(function ($) {
    "use strict";

    /* 01: Sticky Header
    ==============================================*/

    $(window).on('scroll', function (e) {
        if ($(this).scrollTop() <= 45) {
            $('.main-header, .dvpn_header, .dvpn_mobile-menu').removeClass('sticky');
        } else
            $('.main-header, .dvpn_header, .dvpn_mobile-menu').addClass('sticky')
    });

    $(window).on('load', function () {
        if ($(window).scrollTop() >= 45) {
            $('.main-header, .dvpn_header, .dvpn_mobile-menu').addClass('sticky');
        }
    });

    /* 02: Changing svg color
    ==============================================*/
    jQuery('img.svg').each(function () {
        let $img = jQuery(this);
        let imgID = $img.attr('id');
        let imgClass = $img.attr('class');
        let imgURL = $img.attr('src');

        jQuery.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest
            let $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, else we gonna set it if we can.
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');
    });

    /* 03: Background Image
    ==============================================*/
    var $bgImg = $('[data-bg-img]');
    $bgImg.css('background-image', function () {
        return 'url("' + $(this).data('bg-img') + '")';
    }).removeAttr('data-bg-img').addClass('bg-img');
    /*==================================
    04: Overlay Menu
    ====================================*/

    $(".menu-trigger").on("click", function (e) {
        $(".dvpn_menu-wrapper").addClass("full-menu");
        $(".menu-active-overlay").addClass("on");
    });

    $(".dvpn_menu_close, .menu-active-overlay").on("click", function (e) {
        $(".dvpn_menu-wrapper").removeClass("full-menu");
        $(".menu-active-overlay").removeClass("on");
    });

    $('.dvpn_main-menu').find('ul li').parents('.dvpn_main-menu ul li').addClass('has-sub-menu');
    $('.dvpn_main-menu').find(".has-sub-menu").prepend('<span class="submenu-button"></span>');
    $('.dvpn_main-menu').find(".submenu-button").on("click", function (event) {
        $(this).toggleClass("sub-menu-oppened")
        if ($(this).siblings('ul').hasClass('open')) {
            $(this).siblings('ul').removeClass('open').slideUp('fast');
        } else {
            $(this).siblings('ul').addClass('open').slideDown('fast');
        }

    });

    /* 5: Back To Top
    ==============================================*/

    let $backToTopBtn = $('.dvpn_backToTop');

    if ($backToTopBtn.length) {
        let scrollTrigger = 350, // px
            backToTop = function () {
                let scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $backToTopBtn.addClass('show');
                } else {
                    $backToTopBtn.removeClass('show');
                }
            };

        backToTop();

        $(window).on('scroll', function () {
            backToTop();
        });

        $backToTopBtn.on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }

    /* 6: Coming Soon Count Down
    ==============================================*/

    let $countDown = $('[data-countdown]');
    $countDown.each(function () {
        let $t = $(this);

        $t.countdown($t.data('countdown'), function (e) {
            $(this).html('<ul>' + e.strftime('<li><span>%D</span>DAYS</li><li><span>%H</span>HOURS</li><li><span>%M</span>MINUTES</li><li><span>%S</span>SECONDS</li>') + '</ul>');
        });
    });

    /* 7: Preloader
    ==============================================*/
    $(window).on('load', function () {
        $('.preloader').fadeOut(2000);
    });

    /* 08: Activate Animation
    ==============================================*/
    $(window).on('load', function () {

        let $animateEl = $('[data-animate]');

        $animateEl.each(function () {
            let $el = $(this),
                $name = $el.data('animate'),
                $duration = $el.data('duration'),
                $delay = $el.data('delay');

            $duration = typeof $duration === 'undefined' ? '0.6' : $duration;
            $delay = typeof $delay === 'undefined' ? '0.1' : $delay;

            $el.waypoint(function () {
                $el.addClass('animated ' + $name)
                    .css({
                        'animation-duration': $duration + 's',
                        'animation-delay': $delay + 's'
                    });
            }, { offset: '93%' });
        });
    });


    /* Menu Maker */
    $(".main-menu-vertical").menumaker({
        title: '<span></span>',
        format: "multitoggle"
    });

    // Mobile Menu
    function mobileMenu() {
        let $menu = $('.mobile-menu-panel .mobile_menu');

        $menu.find('ul li').parents('.mobile_menu ul li').addClass('has-sub-item').prepend('<span class="submenu-button"></span>');


        // $menu.find(".has-sub-item");

        $menu.find('.submenu-button').on('click', function () {
            $(this).toggleClass('submenu-opened');
            if ($(this).siblings('ul').hasClass('open')) {
                $(this).siblings('ul').removeClass('open').slideUp('fast');
            } else {
                $(this).siblings('ul').addClass('open').slideDown('fast');
            }
        });
    }

    mobileMenu();

    $('#mobile_menu .offcanvas-overlay, #mobile_menu .offcanvas-close').on('click', function() {
        $('#mobile_menu').removeClass('open');
    });

    $('#menu-button').on('click', function() {
        $('#mobile_menu').addClass('open');
    });

    $('.mobile_menu-button').on('click', function() {
        $('#mobile_menu').addClass('open');
    });

    



    // ADD SLIDEDOWN ANIMATION TO DROPDOWN //
    $('.flag-dropdown').on('show.bs.dropdown', function (e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });

    // ADD SLIDEUP ANIMATION TO DROPDOWN //
    $('.flag-dropdown').on('hide.bs.dropdown', function (e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    });


    //search toggle
    $('.search-toggle-btn').on('click', function () {
        $('.full-page-search').addClass('show')
    });
    $('.search-close-btn').on('click', function () {
        $('.full-page-search').removeClass('show')
    });
    
    // Box Shadow Style
    if ($('.dvpn-box-style').length > 0) {
        $('.dvpn-box-style').each(function () {
            if ($(this).find('.elementor-row').length > 0) {
                $(this).find('.elementor-row').append('<div class="box"></div>')
            }
        })
    }

    //Offcanvas
    $('.offcanvas-trigger').on('click', function () {
        $('.offcanvas-wrapper').addClass('active');
        $('.offcanvas-overlay').addClass('show');
        $('body').addClass('overflow-hidden');
    });

    $('.offcanvas-overlay,.offcanvas-close').on('click', function () {
        $('.offcanvas-overlay').removeClass('show');
        $('.offcanvas-wrapper').removeClass('active');
        $('body').removeClass('overflow-hidden');
    })

    //Front to backimg
    function frontToBack() {
        let a = $('.front-to-back-img');
        a.each( function(){
            let b = $(this).find('img'),
            c = b.attr('src');
            $(this).css({
                'background': 'url(' + c + ') center center / cover no-repeat'
            });
            b.css({
                'opacity': 0,
                'visibility': 'hidden'
            })
        } )
    }
    frontToBack();
    
    $(window).on("load",function(){
        if( $(".blog-masonary").length ) {
            $(".blog-masonary").isotope();
        }
    });

    //Popup Video
    $(".mfp-iframe, .video-btn").magnificPopup({type:"video"});
    
})(jQuery);