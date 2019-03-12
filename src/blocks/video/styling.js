/**
 * Set inline styles.
 * @param  {object} props - The block object.
 * @return {object} The inline background type CSS.
 */
import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"

function VideoStyle( props ) {
	const {
		block_id,
		controlsColor,
		overlayColor,	
		sourceType,
		iconSize,
		iconHover,
		iconColor,
		iconImageWidth,
		aspectRatio,
		iconimgBorderRadius,
		opacity,		
		enableStickyVideo,
		videoWidth,
		videoTopSpace,
		videoBottomSpace,
		videoLeftSpace,
		videoRightSpace,
		videoBgVrSpace,
		videoBgHrSpace,
		stickyBgColor,	
		hideStickyVideo,
		closeIconColor,
		closeIconBgColor,
		infoBarFontSize,
		infoBarTextColor,
		infoBarBgColor,
		infoBarTextVrSpace,
		infoBarTextHrSpace,
	} = props.attributes

	var selectors = {}	

	selectors[" .uagb-video__vimeo-wrap a"] = {
		"color": controlsColor,
	}
	selectors[" .uagb-video__vimeo-wrap"] = {
		"color": controlsColor,
	}
	// Icon css
	if( sourceType == "icon" ){
		selectors[" .uagb-video__play-icon"] = {
			"height" : iconSize+"px",
			"width" : iconSize+"px",			
		}
		selectors[" .uagb-video__play-icon svg"] = {
			"height" : iconSize+"px",
			"width" : iconSize+"px",
			"fill": iconColor,
			"line-height" : iconSize+"px",
		}
		
		selectors[" .uagb-video__content-wrap:hover .uagb-video__play-icon svg"] = {
			"fill" : iconHover,
		}
	}else{
		selectors[" .uagb-video__play-icon img"] = {
			"max-width" : iconImageWidth+"px",
			"width" : iconImageWidth+"px",
			"height" : iconImageWidth+"px",
			"border-radius": iconimgBorderRadius+"%"
		}
		selectors[" .uagb-video__play-icon"] = {
			"height" : iconImageWidth+"px",
			"width" : iconImageWidth+"px",
		}
	}
	
	selectors[" .uagb-video__content-wrap:before"] = {
		"background-color" : overlayColor,
		"opacity": ( typeof opacity != "undefined" ) ? ( 100 - opacity )/100 : 0.5
	}

	var calc_percetage = 0.67;
	if( aspectRatio == '16_9'){
		calc_percetage = 0.5625
	}else if( aspectRatio == '4_3' ){
		calc_percetage = 0.75
	}

	if( enableStickyVideo ){
		selectors[" .uagb-video__sticky-apply .uagb-video__inner-wrap"] = {
			"width" : videoWidth+"px",
			"height" : "calc( "+videoWidth+"px *"+calc_percetage+" )",
		}
		selectors[" .uagb-video__sticky-apply img.uagb-video__thumb"] = {
			"padding-top" : videoBgVrSpace+"px",
			"padding-bottom" : videoBgVrSpace+"px",
			"padding-left" : videoBgHrSpace+"px",
			"padding-right" : videoBgHrSpace+"px",
			"background" : stickyBgColor,
			"width" : videoWidth+"px",
			"height" : "calc( "+videoWidth+"px *"+calc_percetage+" )",	
		}	
		selectors[" .uagb-video__sticky-apply iframe.uagb-video__iframe"] = {
			"padding-top" : videoBgVrSpace+"px",
			"padding-bottom" : videoBgVrSpace+"px",
			"padding-left" : videoBgHrSpace+"px",
			"padding-right" : videoBgHrSpace+"px",
			"background" : stickyBgColor,
			"width" : videoWidth+"px",
			"height" : "calc( "+videoWidth+"px *"+calc_percetage+" )",	
		}	

		selectors[" .uagb-video__sticky-close svg"] = {			
			"fill" : closeIconColor,
		}	
		selectors[" .uagb-video__sticky-close "] = {			
			"background" : closeIconBgColor
		}	

		selectors[" .uagb-video__sticky-infobar"] = {			
			"color" : infoBarTextColor,
			"background" : infoBarBgColor,
			"padding-top" : infoBarTextVrSpace+"px",
			"padding-bottom" : infoBarTextVrSpace+"px",
			"padding-left" : infoBarTextHrSpace+"px",
			"padding-right" : infoBarTextHrSpace+"px",
			"font-size": infoBarFontSize+"px",
		}
	}

	var styling_css = generateCSS( selectors, `.block-editor-page #wpwrap #uagb-video-${ props.clientId }` )

	return styling_css

}

export default VideoStyle
