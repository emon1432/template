/*
*   Wavify
*   Jquery Plugin to make some nice waves
*   by peacepostman @ crezeo
 */
(function ( $ ) {
	'use strict';
	
	$.fn.wavify = function( options ) {
		if( 'function' !== typeof wavify )
		{
			console.error( "wavify is not a function. Be sure to include 'wavify.js' before you include 'jquery.wavify.js'." )
			throw( "Error: wavify is not a function")
		}

		return wavify( this, options );
	};

	$('#feel-the-wave').wavify({
		height: 80,
		bones: 4,
		amplitude: 60,
		color: 'var(--color-brand)',
		speed: .15
	});
	
	$('#feel-the-wave-two').wavify({
		height: 60,
		bones: 3,
		amplitude: 40,
		color: 'rgba(88, 151, 251, .8)',
		speed: .25
	});

}(jQuery));
