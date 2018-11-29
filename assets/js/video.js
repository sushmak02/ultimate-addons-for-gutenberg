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
						uagbPlayVideo( element);						
					});

					if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) { 
						uagbPlayVideo( element);
					}
			}else{							
				uagbPlayVideo( element);
			}
		})		
	}

	function uagbPlayVideo( element ){
		var src = element.find(".uagb-video__play").data('src'),
			src = src.replace("autoplay=0", "autoplay=1"),	
			frame_length = element.find(".uagb-video__iframe").length;	
			element.find(".uagb-video__vimeo-wrap").hide();
		if( frame_length == 0 ){
			iframe_code = '<iframe class ="uagb-video__iframe" src="'+src+'" frameborder="0" allowfullscreen="1" allow="autoplay;encrypted-media;"></iframe>';
			element.find(".uagb-video__play").html(iframe_code);
		}else{
			element.find(".uagb-video__iframe").attr("src", src)
		}			
	}

} )( jQuery )
