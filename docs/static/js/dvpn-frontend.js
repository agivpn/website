/*---------------------------------------------
Template name :  Dvpn
Version       :  1.0
Author        :  
Author url    :  

[Table of Content]

    01: Home Banner Animation
    02: About Us Animation
    03: Service Svg
    04: Project Svg
    05: Team Slider
    06: Blog Slider
    07: Video Popup
    08: Counter Up
    09: Data Bg Image
    10: Project Isotope
    11: Testimonial Slider
    11: Map
----------------------------------------------*/

( function( $ ) {
	"use strict";
    function dvpn_svg_convert(){
        var $imgConvert = $('img.svg');
    	$imgConvert.each(function(){
    		var $img = jQuery(this);
    		var imgID = $img.attr('id');
    		var imgClass = $img.attr('class');
    		var imgURL = $img.attr('src');

    		jQuery.get(imgURL, function(data) {
    			// Get the SVG tag, ignore the rest
    			var $svg = jQuery(data).find('svg');

    			// Add replaced image's ID to the new SVG
    			if(typeof imgID !== 'undefined') {
    				$svg = $svg.attr('id', imgID);
    			}
    			// Add replaced image's classes to the new SVG
    			if(typeof imgClass !== 'undefined') {
    				$svg = $svg.attr('class', imgClass+' replaced-svg');
    			}

    			// Remove any invalid XML tags as per http://validator.w3.org
    			$svg = $svg.removeAttr('xmlns:a');

    			// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
    			if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
    				$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
    			}

    			// Replace image with new SVG
    			$img.replaceWith($svg);

    		}, 'xml');

    	});
    }
	/*===================
    01: Home Banner Animation
    =====================*/
	var DvpnBanner = function( $scope, $ ) {

		let $animateEl = $('[data-animate]');

		$animateEl.each(function () {
			let $el = $(this),
				$name = $el.data('animate'),
				$duration = $el.data('duration'),
				$delay = $el.data('delay');

			$duration = typeof $duration === 'undefined' ? '0.6' : $duration ;
			$delay = typeof $delay === 'undefined' ? '0.1' : $delay ;

			$el.waypoint(function () {
				$el.addClass('animated ' + $name)
				   .css({
						'animation-duration': $duration + 's',
						'animation-delay': $delay + 's'
				   });
			}, {offset: '93%'});
		});

	};
	// Make sure you run this code under Elementor.
	$( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/dvpnbannerwidget.default', DvpnBanner );
	} );
	
	/*===================
    02: Home Banner Animation
    =====================*/
	var DvpnBannerImage = function( $scope, $ ) {

		//Mousemove Effect
	    var object1 = $('.sheild-img');
	    var object2 = $('.check-img, .setting2-img, .card-img');
	    var object3 = $('.setting-img, .box-img');
	    var object4 = $('.s_man');
	    var object5 = $('.s_woman');
	
	    var layer = $('.layer');
	    var layer2 = $('.layer2');
	
	    layer.mousemove(function(e) {
	        var valueX = (e.pageX * -1 / 115);
	        var valueY = (e.pageY * -1 / 115);
	    
	        object1.css({
	            'transform' : 'translate3d('+valueX+ 'px, ' + valueY+'px,0) rotate(0deg)'
	        });
	    });
	
	    layer.on('mousemove', function(e) {
	        var valueX = (e.pageX * -1 / 80);
	        var valueY = (e.pageY * -1 / 80);
	        
	        object2.css({
	            'transform':'translate3d('+valueX+ 'px, ' + valueY+'px,0)'
	        });
	    });
	
	    layer.mousemove(function(e) {
	        var valueX = (e.pageX * -1 / 122);
	        var valueY = (e.pageY * -1 / 122);
	        
	        object3.css({
	            'transform':'translate3d('+valueX+ 'px, ' + valueY+'px,0) rotate(0deg)'
	        });
	    });
	
	
	    layer2.mousemove(function(e) {
	        var valueX = (e.pageX * -1 / 85);
	        var valueY = (e.pageY * -1 / 58);
	        
	        object4.css({
	            'transform':'translate3d('+valueX+ 'px, ' + valueY+'px,0) rotate(0deg)'
	        });
	    });
	    layer2.mousemove(function(e) {
	        var valueX = (e.pageX * -1 / 58);
	        var valueY = (e.pageY * -1 / 85);
	        
	        object5.css({
	            'transform':'translate3d('+valueX+ 'px, ' + valueY+'px,0) rotate(0deg)'
	        });
	    });

	};
	// Make sure you run this code under Elementor.
	$( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/dvpnbannerimage.default', DvpnBannerImage );
	} );
	
	/*===================
    02: About Us Animation
    =====================*/
	var DvpnAboutUs = function( $scope, $ ) {

		let $animateEl = $('[data-animate]');

		$animateEl.each(function () {
			let $el = $(this),
				$name = $el.data('animate'),
				$duration = $el.data('duration'),
				$delay = $el.data('delay');

			$duration = typeof $duration === 'undefined' ? '0.6' : $duration ;
			$delay = typeof $delay === 'undefined' ? '0.1' : $delay ;

			$el.waypoint(function () {
				$el.addClass('animated ' + $name)
				   .css({
						'animation-duration': $duration + 's',
						'animation-delay': $delay + 's'
				   });
			}, {offset: '93%'});
		});

	};
	// Make sure you run this code under Elementor.
	$( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/dvpnaboutus.default', DvpnAboutUs );
	} );

	/*===================
    03: Service Svg
    =====================*/
	var DvpnServiceSvg = function( $scope, $ ) {
	    /* 03: SVG Image Convert
	    ==============================================*/
	    dvpn_svg_convert();
	};
	// Make sure you run this code under Elementor.
	$( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/dvpnservice.default', DvpnServiceSvg );
	} );
	/*===================
    03: Newsletter Svg
    =====================*/
	var DvpNewsletterSvg = function( $scope, $ ) {
	    /* 03: SVG Image Convert
	    ==============================================*/
	    dvpn_svg_convert();
	};
	// Make sure you run this code under Elementor.
	$( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/dvpnnewsletterwidget.default', DvpNewsletterSvg );
	} );
	
	/*===================
    03: Button Svg
    =====================*/
	var DvpButtonSvg = function( $scope, $ ) {
	    /* 03: SVG Image Convert
	    ==============================================*/
	    dvpn_svg_convert();
	};
	// Make sure you run this code under Elementor.
	$( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/dvpnbuttonwidget.default', DvpButtonSvg );
	} );

	/*===================
    04: Project Svg
    =====================*/
	var DvpnProjectSvg = function( $scope, $ ) {
	/* 01: SVG Image Convert
	==============================================*/
	var $imgConvertpro = $scope.find('.result-icon img');
	$imgConvertpro.each(function(){
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var $svg = jQuery(data).find('svg');

			// Add replaced image's ID to the new SVG
			if(typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');

			// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
			if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
				$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
			}

			// Replace image with new SVG
			$img.replaceWith($svg);

		}, 'xml');

	});
	};
	// Make sure you run this code under Elementor.
	$( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/dvpnprojectresultwidget.default', DvpnProjectSvg );
	} );

	/*===================
	05: Team Slider
	=====================*/
	var DvpnTeamSlider = function( $scope, $ ) {
		/*==================================
		01: Check Data
		====================================*/
		var checkData = function (data, value) {
			return typeof data === 'undefined' ? value : data;
		};
		/*==================================
		02: Owl Carousel
		====================================*/
		var $owlCarousel = $scope.find('.dvpn_team-carousel.owl-carousel');
		$owlCarousel.owlCarousel({
			items: checkData($owlCarousel.data('owl-items'), 1),
			margin: checkData($owlCarousel.data('owl-margin'), 0),
			loop: checkData($owlCarousel.data('owl-loop'), true),
			smartSpeed: 450,
			autoplay: checkData($owlCarousel.data('owl-autoplay'), false),
			autoplayTimeout: checkData($owlCarousel.data('owl-speed'), 8000),
			center: checkData($owlCarousel.data('owl-center'), false),
			animateIn: checkData($owlCarousel.data('owl-animate-in'), false),
			animateOut: checkData($owlCarousel.data('owl-animate-out'), false),
			nav: checkData($owlCarousel.data('owl-nav'), false),
			navText: ['<img src="' + testimonial_img.img_left +'" class="svg">', '<img src="' + testimonial_img.img_right +'" class="svg">'],
			dots: checkData($owlCarousel.data('owl-dots'), false),
			responsive: checkData($owlCarousel.data('owl-responsive'), {})
		});
        // SVG Image Convert
	    dvpn_svg_convert();
	};
	// Make sure you run this code under Elementor.
	$( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/dvpnteammemberwidget.default', DvpnTeamSlider );
	} );

	/*===================
	06: Blog Slider
	=====================*/
	var DvpnBlogBrandSlider = function( $scope, $ ) {
		/*==================================
		01: Check Data
		====================================*/
		var checkData = function (data, value) {
			return typeof data === 'undefined' ? value : data;
		};
		/*==================================
		02: Owl Carousel
		====================================*/
		var $owlCarousel = $scope.find('.dvpn_blog-slider.owl-carousel');
		$owlCarousel.owlCarousel({
			items: checkData($owlCarousel.data('owl-items'), 1),
			margin: checkData($owlCarousel.data('owl-margin'), 0),
			loop: checkData($owlCarousel.data('owl-loop'), true),
			smartSpeed: 450,
            mouseDrag:false,
			autoplay: checkData($owlCarousel.data('owl-autoplay'), false),
			autoplayTimeout: checkData($owlCarousel.data('owl-speed'), 8000),
			center: checkData($owlCarousel.data('owl-center'), false),
			animateIn: checkData($owlCarousel.data('owl-animate-in'), false),
			animateOut: checkData($owlCarousel.data('owl-animate-out'), false),
			nav: checkData($owlCarousel.data('owl-nav'), false),
			navText: ['<i class="fas fa-arrow-left"></i> Prev', 'Next <i class="fas fa-arrow-right"></i>'],
			dots: checkData($owlCarousel.data('owl-dots'), false),
			responsive: checkData($owlCarousel.data('owl-responsive'), {})
		});

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

	};
	// Make sure you run this code under Elementor.
	$( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/dvpnblogwidget.default', DvpnBlogBrandSlider );
	} );

	/*===================
    07: Video Popup
    =====================*/
	var DvpnVideoPopup = function( $scope, $ ) {
		let bgImg = $('[data-bg-img]');

			bgImg.css('background', function(){
				return 'url(' + $(this).data('bg-img') + ') center center';
		});
		var $popup = $scope.find('.dvpn_video-btn');
		$popup.magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-with-zoom',
			removalDelay: 300,
			zoom: {
				enabled: true,
				duration: 300,
				easing: 'ease-in-out',
			}
		});
	};
	// Make sure you run this code under Elementor.
	$( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/dvpnvideoarea.default', DvpnVideoPopup );
	} );

	/*===================
	08: Counter Up
	=====================*/
	var DvpnCounterUp = function( $scope, $ ) {

		var $counter = $scope.find('.dvpn_counter-content .count-number');

		$counter.counterUp({
            delay: 30,
            time: 2e3
        });

	};
	// Make sure you run this code under Elementor.
	$( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/dvpncounterwidget.default', DvpnCounterUp );
	} );

	/*===================
	09: Data Bg Image
	=====================*/
	var DvpnCounter = function( $scope, $ ) {
		let bgImg = $('[data-bg-img]');

			bgImg.css('background', function(){
				return 'url(' + $(this).data('bg-img') + ') center center';
		});
	};
	// Make sure you run this code under Elementor.
	$( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/dvpncounterwidget.default', DvpnCounter );
	} );

	/*===================
    10: Project Isotope
    =====================*/
	var DvpnProjectIsotope = function( $scope, $ ) {

		var $isotope = $('.dvpn_case-list');
		$isotope.isotope();
	    /* 06: Isotope - Filter
	    ==============================================*/
		$('.dvpn_case-study-menu li').on('click', function () {
            $('.dvpn_case-study-menu li').removeClass("active");
            $(this).addClass("active");
            let selector = $(this).attr("data-filter");
            $('.dvpn_case-list').isotope({
                filter: selector,
            });
        });

		$isotope.imagesLoaded().progress( function() {
		  $isotope.isotope('layout');
		});
	};
	// Make sure you run this code under Elementor.
	$( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/dvpnprojectwidget.default', DvpnProjectIsotope );
	} );


	/*===================
	11: Testimonial Slider
	=====================*/
	var DvpnTestimonialSlider = function( $scope, $ ) {

		var checkData = function (data, value) {
			return typeof data === 'undefined' ? value : data;
		};
		/*==================================
		06: Owl Carousel
		====================================*/
		var $owlCarousel = $scope.find('.dvpn_review-slider.owl-carousel');
		$owlCarousel.owlCarousel({
			items: checkData( $owlCarousel.data('owl-items') ),
			margin: checkData( $owlCarousel.data('owl-margin'), 60 ),
			loop: checkData( $owlCarousel.data('owl-loop'), true ),
			smartSpeed: 450,
			mouseDrag: checkData($owlCarousel.data('owl-mousedrag'), true),
			autoplay: checkData($owlCarousel.data('owl-autoplay'), true),
			autoplayTimeout: checkData($owlCarousel.data('owl-speed'), 8000),
			center: checkData($owlCarousel.data('owl-center'), false),
			animateIn: checkData($owlCarousel.data('owl-animate-in'), false),
			animateOut: checkData($owlCarousel.data('owl-animate-out'), false),
			nav: checkData($owlCarousel.data('owl-nav'), false),
			navText: ['<i class="fas fa-arrow-left"></i> PREV', 'NEXT <i class="fas fa-arrow-right"></i>'],
			dots: checkData($owlCarousel.data('owl-dots'), false),
			responsive: {"0":{"items": $owlCarousel.data('mi')},"480":{"items": $owlCarousel.data('ti')},"769": {"items": $owlCarousel.data('di')}}
		});
        // SVG Image Convert
	    dvpn_svg_convert();
	};

	// Make sure you run this code under Elementor.
	$( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/dvpntestimonialwidget.default', DvpnTestimonialSlider );
	} );


	/*========================
	12: Map
	==========================*/
	var DvpnMap = function( $scope, $ ) {
		/*==================================
	    10: Google map
	    ====================================*/
	    var $map = $scope.find('[data-trigger="map"]'),
	        $mapOps;
		    if ($map.length) {
		        // Map Options
		        $mapOps = $map.data('map-options');
				let $mapmarker = $map.data('marker');
		        // Map Initialization
		        window.initMap = function () {
		            $map.css('min-height', '600px');
		            $map.each(function () {
		                var $t = $(this), map, lat, lng, zoom;

		                $mapOps = $t.data('map-options');
		                lat = parseFloat($mapOps.latitude, 10);
		                lng = parseFloat($mapOps.longitude, 10);
		                zoom = parseFloat($mapOps.zoom, 10);

		                map = new google.maps.Map($t[0], {
		                    center: { lat: lat, lng: lng },
		                    zoom: zoom,
		                    scrollwheel: false,
		                    disableDefaultUI: true,
		                    zoomControl: true,
							styles:  [
	                            {
	                                "featureType": "landscape.man_made",
	                                "elementType": "geometry",
	                                "stylers": [
	                                    {
	                                        "color": "#ebebeb"
	                                    }
	                                ]
	                            },
	                            {
	                                "featureType": "landscape.natural",
	                                "elementType": "geometry",
	                                "stylers": [
	                                    {
	                                        "color": "#d0e3b4"
	                                    }
	                                ]
	                            },
	                            {
	                                "featureType": "landscape.natural.terrain",
	                                "elementType": "geometry",
	                                "stylers": [
	                                    {
	                                        "visibility": "off"
	                                    }
	                                ]
	                            },
	                            {
	                                "featureType": "poi",
	                                "elementType": "labels",
	                                "stylers": [
	                                    {
	                                        "visibility": "off"
	                                    }
	                                ]
	                            },
	                            {
	                                "featureType": "poi.business",
	                                "elementType": "all",
	                                "stylers": [
	                                    {
	                                        "visibility": "off"
	                                    }
	                                ]
	                            },
	                            {
	                                "featureType": "poi.medical",
	                                "elementType": "geometry",
	                                "stylers": [
	                                    {
	                                        "color": "#fbd3da"
	                                    }
	                                ]
	                            },
	                            {
	                                "featureType": "poi.park",
	                                "elementType": "geometry",
	                                "stylers": [
	                                    {
	                                        "color": "#bde6ab"
	                                    }
	                                ]
	                            },
	                            {
	                                "featureType": "road",
	                                "elementType": "geometry.stroke",
	                                "stylers": [
	                                    {
	                                        "visibility": "off"
	                                    }
	                                ]
	                            },
	                            {
	                                "featureType": "road",
	                                "elementType": "labels",
	                                "stylers": [
	                                    {
	                                        "visibility": "off"
	                                    }
	                                ]
	                            },
	                            {
	                                "featureType": "road.highway",
	                                "elementType": "geometry.stroke",
	                                "stylers": [
	                                    {
	                                        "color": "#ffffff"
	                                    }
	                                ]
	                            },
	                            {
	                                "featureType": "road.arterial",
	                                "elementType": "geometry.fill",
	                                "stylers": [
	                                    {
	                                        "color": "#ffffff"
	                                    }
	                                ]
	                            },
	                            {
	                                "featureType": "road.local",
	                                "elementType": "geometry.fill",
	                                "stylers": [
	                                    {
	                                        "color": "black"
	                                    }
	                                ]
	                            },
	                            {
	                                "featureType": "transit.station.airport",
	                                "elementType": "geometry.fill",
	                                "stylers": [
	                                    {
	                                        "color": "#cfb2db"
	                                    }
	                                ]
	                            },
	                            {
	                                "featureType": "water",
	                                "elementType": "geometry",
	                                "stylers": [
	                                    {
	                                        "color": "#c7e5fd"
	                                    }
	                                ]
	                            }
	                        ]
		                });

		                map = new google.maps.Marker({
		                    position: { lat: lat, lng: lng },
		                    map: map,
		                    animation: google.maps.Animation.DROP,
		                    draggable: false,
		                    icon: $mapmarker
		                });

		            });
		        };
		        initMap();
		    };
	};

	// Make sure you run this code under Elementor.
	$( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/dvpnmapwidget.default', DvpnMap );
	} );

    /*===================
	11: Brand Slider
	=====================*/
	var DvpnBrandSlider = function( $scope, $ ) {

		var checkData = function (data, value) {
			return typeof data === 'undefined' ? value : data;
		};
		/*==================================
		06: Owl Carousel
		====================================*/
		var $owlCarousel = $scope.find('.dvpn_brand_slider.owl-carousel');
		$owlCarousel.owlCarousel({
			items: checkData( $owlCarousel.data('owl-items') ),
			margin: checkData( $owlCarousel.data('owl-margin'), 60 ),
			loop: checkData( $owlCarousel.data('owl-loop'), true ),
			smartSpeed: 450,
			mouseDrag: checkData($owlCarousel.data('owl-mousedrag'), true),
			autoplay: checkData($owlCarousel.data('owl-autoplay'), true),
			autoplayTimeout: checkData($owlCarousel.data('owl-speed'), 8000),
			center: checkData($owlCarousel.data('owl-center'), false),
			animateIn: checkData($owlCarousel.data('owl-animate-in'), false),
			animateOut: checkData($owlCarousel.data('owl-animate-out'), false),
			nav: checkData($owlCarousel.data('owl-nav'), false),
			navText: false,
			dots: checkData($owlCarousel.data('owl-dots'), false),
			responsive: {"0":{"items": $owlCarousel.data('mi')},"480":{"items": $owlCarousel.data('ti')},"769": {"items": $owlCarousel.data('di')}}
		});
	};

	// Make sure you run this code under Elementor.
	$( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/dvpnbrandslider.default', DvpnBrandSlider );
	} );
    /*===================
	12: Location Map
	=====================*/
	var DvpnLocationMap = function( $scope, $ ) {
		var $selector = $scope.find( '.dvpn_map-img .l_info' );
		$selector.on( 'mouseenter',function(){
			$('.dvpn_map-img .l_info').removeClass( 'active' );
			$(this).addClass( 'active' );
		} );
		
	};

	// Make sure you run this code under Elementor.
	$( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/dvpnlocationmap.default', DvpnLocationMap );
	} );


} )( jQuery );
