/**
 * Set inline styles.
 * @param  {object} props - The block object.
 * @return {object} The inline background type CSS.
 */
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
	} = props.attributes

	if( props.clientId ){
		var clientId = "uagb-video-"+props.clientId
	}else{
		var clientId = "uagb-video-"+block_id
	}

	var selectors = {}	

	selectors[".uagb-video__vimeo-wrap a"] = {
		"color": controlsColor,
	}
	selectors[".uagb-video__vimeo-wrap"] = {
		"color": controlsColor,
	}
	// Icon css
	if( sourceType == "icon" ){
		selectors[".uagb-video__play-icon"] = {
			"height" : iconSize+"px",
			"width" : iconSize+"px",
			"color": iconColor,
			"line-height" : iconSize+"px",
		}

		selectors[".uagb-video__play-icon:before"] = {
			"font-size" : iconSize+"px",
			"line-height": iconSize + "px",
		}

		selectors[".uagb-video__content-wrap:hover .uagb-video__play-icon"] = {
			"color" : iconHover,
		}
	}else{
		selectors[".uagb-video__play-icon img"] = {
			"max-width" : iconImageWidth+"px",
			"width" : iconImageWidth+"px",
			"border-radius": iconimgBorderRadius+"%"
		}
		selectors[".uagb-video__play-icon"] = {
			"height" : iconImageWidth+"px",
			"width" : iconImageWidth+"px",
		}
	}
	
	selectors[".uagb-video__content-wrap:before"] = {
		"background-color" : overlayColor,
		"opacity": ( typeof opacity != "undefined" ) ? ( 100 - opacity )/100 : 0.5
	}

	var styling_css = ""

	for( var i in selectors ) {

		styling_css += " .block-editor-page #wpwrap #"+clientId+" "+i + " { "


		var sel = selectors[i]
		var css = ""

		for( var j in sel ) {

			css += j + ": " + sel[j] + ";"
		}

		styling_css += css + " } "
	}

	return styling_css

}

export default VideoStyle
