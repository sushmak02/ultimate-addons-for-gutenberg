/**
 * Common js file for Progress Bar.
 */
( function( $ ) {

	// Listen for events.
	window.addEventListener( "load", uagbProgressBarInit );
	window.addEventListener( "DOMContentLoaded", uagbProgressBarInit );

	// Callback function for all event listeners.
	function uagbProgressBarInit() {

		setTimeout(() => {

			var progress_bar = $( ".wp-block-uagb-progress-bar" )
			
			if( progress_bar.length !== 0 ) {

				progress_bar.each( function() {

					var progress_module = progress_bar.find( '.uagb-progress-bar__main-wrap' );

					var completeClass = progress_module.hasClass( 'uagb-progress-bar__complete' );

					if( ! completeClass ) {

						var number = Math.ceil( progress_module.data( 'progress' ) );
						var speed = progress_module.data( 'speed' ) 

						progress_module.find( '.uagb-progress-bar' ).animate({
							width: number + '%'
						}, {
							duration: speed,
							easing: 'linear'
						});

						progress_module.addClass( 'uagb-progress-bar__complete' );
					}

				})
			}
					
		}, 500 );
	}

} )( jQuery )
