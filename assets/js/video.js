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

				var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
				if ( element.find(".uagb-video__enable-double-click").length == 0 && iOS ) { 
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
			var current_device = uagb_device_type();
			var check_device = "uagb-video__hide-sticky-"+current_device;
			if( !$video.hasClass(check_device) ){	 
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
			}else{
				$videoWrap.height('auto');
				$videoWrap.css('visibility','visible');
			}

			//Close Sticky video
			$videoWrap.find(".uagb-video__sticky-close").click( function(event) {
				$video.removeClass("uagb-video__sticky-enable")
				$video.removeClass("uagb-video__sticky-apply")				
				$videoWrap.height('auto');
				$videoWrap.css('visibility','visible');
			})
		}
	}



	function uagb_device_type() 
	{
	    var Return_Device; 
	    if(/(up.browser|up.link|mmp|symbian|smartphone|midp|wap|phone|android|iemobile|w3c|acs\-|alav|alca|amoi|audi|avan|benq|bird|blac|blaz|brew|cell|cldc|cmd\-|dang|doco|eric|hipt|inno|ipaq|java|jigs|kddi|keji|leno|lg\-c|lg\-d|lg\-g|lge\-|maui|maxo|midp|mits|mmef|mobi|mot\-|moto|mwbp|nec\-|newt|noki|palm|pana|pant|phil|play|port|prox|qwap|sage|sams|sany|sch\-|sec\-|send|seri|sgh\-|shar|sie\-|siem|smal|smar|sony|sph\-|symb|t\-mo|teli|tim\-|tosh|tsm\-|upg1|upsi|vk\-v|voda|wap\-|wapa|wapi|wapp|wapr|webc|winw|winw|xda|xda\-) /i.test(navigator.userAgent))
	    {
	        if(/(tablet|ipad|playbook)|(android(?!.*(mobi|opera mini)))/i.test(navigator.userAgent)) 
	        {
	            Return_Device = 'tablet';
	        }
	        else
	        {
	            Return_Device = 'mobile';
	        }
	    }
	    else if(/(tablet|ipad|playbook)|(android(?!.*(mobi|opera mini)))/i.test(navigator.userAgent)) 
	    {
	        Return_Device = 'tablet';
	    }
	    else
	    {
	        Return_Device = 'desktop';
	    }

	    return Return_Device;
	}

} )( jQuery )
