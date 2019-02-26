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
		iconimgBorderRadius,
		opacity,		
		enableStickyVideo,
		videoWidth,
		stickyAlignment,
		videoTopSpace,
		videoBottomSpace,
		videoLeftSpace,
		videoRightSpace,
		videoBgVrSpace,
		videoBgHrSpace,
		stickyBgColor,	
		hideStickyVideo,
		enableClose,
		closeIconColor,
		closeIconBgColor,
		enableInfoBar,
		infoBarText,
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

	var styling_css = generateCSS( selectors, `.block-editor-page #wpwrap #uagb-video-${ props.clientId }` )

	return styling_css

}

export default VideoStyle
