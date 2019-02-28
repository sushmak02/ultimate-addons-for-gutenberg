/**
 * Common js file for video block.
 */
( function( $ ) {

	// Listen for events.
	window.addEventListener("load", uagbVideoInit)
	window.addEventListener("resize", uagbVideoInit)	

	// Callback function for all event listeners.
	function uagbVideoInit() {

		var video_cotnainer            = $(".uagb-video__outer-wrap")
    	
		video_cotnainer.each(function() {
			var id 		= $(this).attr("id"),
				element    = $("#"+id),				
				$window    = $(window),
				$videoWrap = element;
				$video     = element.find('.uagb-video__content-wrap');
				
			if(element.find(".uagb-video__autoplay").length == 0 ){
				// Play video on click event
				element.click(function() {
					var el = $(this)
					el.find(".uagb-video__thumb").hide()
					el.find(".uagb-video__play-icon").hide()
					uagbPlayVideo( element)						
				})

				if (navigator.userAgent.match(/(iPod|iPhone)/)) { 
					uagbPlayVideo( element)
				}
			}else{							
				uagbPlayVideo( element)
			}

			$(window).scroll( function(event) {
				uagbstickyVideoInit(id, $video, $window, $videoWrap )
			})
			// For Sticky video			
			window.addEventListener("load", uagbstickyVideoInit(id, $video, $window, $videoWrap ));
			window.addEventListener("resize", uagbstickyVideoInit(id, $video, $window, $videoWrap ));

		})		
	}

	function uagbPlayVideo( element ){
		var src = element.find(".uagb-video__play").data("src"),
			src = src.replace("autoplay=0", "autoplay=1"),	
			frame_length = element.find(".uagb-video__iframe").length	
		element.find(".uagb-video__vimeo-wrap").hide()
		if( frame_length == 0 ){
			iframe_code = "<iframe class =\"uagb-video__iframe\" src=\""+src+"\" frameborder=\"0\" allowfullscreen=\"1\" allow=\"autoplay;encrypted-media;\"></iframe>"
			element.find(".uagb-video__play").html(iframe_code)
		}else{
			element.find(".uagb-video__iframe").attr("src", src)
		}			
	}

	function uagbstickyVideoInit(id, $video, $window, $videoWrap) {		
		if( $video.hasClass("uagb-video__sticky-enable") ){			
			var videoHeight = $video.outerHeight();
			var windowScrollTop = $window.scrollTop();
			var videoBottom = $videoWrap.offset().top;			
			if (windowScrollTop > videoBottom) {
				var check_class_exist = $video.hasClass( "uagb-video__sticky-apply" );	
				if( check_class_exist == false ){				
					$video.addClass('uagb-video__sticky-apply');
					$videoWrap.height(videoHeight);
					$videoWrap.css('visibility','hidden');
				}
			} else {
				$video.removeClass('uagb-video__sticky-apply');
				$videoWrap.height('auto');
				$videoWrap.css('visibility','visible');
			}
		}
	}


} )( jQuery )
