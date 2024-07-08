/*

[Main Script]

Project : dvpn
Version : 1.0
Author  : 

*/

(function ($) {
    'use strict';


	$( function(){

		/* ------------------------------------------------------------------------- *
        * Mail Chimp ajax
        * ------------------------------------------------------------------------- */

        var $subscribeForm = $('#subscribe_submit');

        $subscribeForm.on('submit', function () {

			var $t = $(this),
			email = $('#sectsubscribe_email').val();
			$.ajax({
				type: 'POST',
				url: subscribeajax.action_url,
				data: {
				  sectsubscribe_email: email,
                  security: subscribeajax.nonce,
				  action: 'dvpn_subscribe_ajax'
				},
				success: function( data ){
				  $(".newsletter-content").append(data);
				  $(".newsletter-content .alert").delay(3000).fadeOut();
				}
			});

          return false;

        });

		/* ------------------------------------------------------------------------- *
        * Mail Chimp Ajax Two
        * ------------------------------------------------------------------------- */

        var $subscribeForm_come = $('#subscribe_submit_id');

        $subscribeForm_come.on('submit', function () {

			var $t = $(this),
			email = $('#sectsubscribe_email_id').val();
			$.ajax({
				type: 'POST',
				url: subscribeajax.action_url,
				data: {
				  sectsubscribe_email: email,
                  security: subscribeajax.nonce,
				  action: 'dvpn_subscribe_ajax'
				},
				success: function( data ){
				  $(".coming-soon-newsletter").append(data);
				  $(".coming-soon-newsletter .alert").delay(3000).fadeOut();
				}
			});

          return false;

        });


	} );
})(jQuery);