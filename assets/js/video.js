/**
 * Common js file for video block.
 */
( function( $ ) {

	// Listen for events.
	window.addEventListener("load", uagbVideoInit)

	// Callback function for all event listeners.
	function uagbVideoInit() {

		var video_cotnainer            = $(".uagb-video__outer-wrap")
    	
		video_cotnainer.each(function() {
			var id 		= $(this).attr('id'),
				element = $("#"+id);
				
			if(element.find(".uagb-video__autoplay").length == 0 ){
					// Play video on click event
					element.click(function() {
						var el = $(this);
						el.find(".uagb-video__thumb").hide();
						el.find(".uagb-video__play-icon").hide();
						playVideo( element);						
					});
			}else{				
				playVideo( element);
			}
		})		
	}

	function playVideo( element ){
		var src = element.find(".uagb-video__play").data('src'),
			src = src.replace("autoplay=0", "autoplay=1"),
			iframe_code = '<iframe class ="uagb-video__iframe" src="'+src+'" frameborder="0" allowfullscreen="1" allow="autoplay;encrypted-media;"></iframe>';
			element.find(".uagb-video__iframe").remove();
			element.find(".uagb-video__play").append(iframe_code);
			element.find(".uagb-video__vimeo-wrap").hide();
	}

} )( jQuery )