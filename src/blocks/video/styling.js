/**
 * Set inline styles.
 * @param  {object} props - The block object.
 * @return {object} The inline background type CSS.
 */
import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"
import generateCSSUnit from "../../../dist/blocks/uagb-controls/generateCSSUnit"

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
		videoBgVrSpace,
		videoBgHrSpace,
		stickyBgColor,
		closeIconColor,
		closeIconBgColor,
		infoBarTextColor,
		infoBarBgColor,
		infoBarTextVrSpace,
		infoBarTextHrSpace,
		infoBarFontFamily,
		infoBarFontWeight,
		infoBarFontSubset,
		infoBarFontSizeType,
		infoBarLineHeightType,
		infoBarFontSize,
		infoBarFontSizeTablet,
		infoBarFontSizeMobile,
		infoBarLineHeight,
		infoBarLineHeightTablet,
		infoBarLineHeightMobile,
	} = props.attributes

	var selectors = {}
	var tablet_selectors = {}
	var mobile_selectors = {}

	var calc_percetage = 0.67;
	if( aspectRatio == '16_9'){
		calc_percetage = 0.5625
	}else if( aspectRatio == '4_3' ){
		calc_percetage = 0.75
	}

	if( enableStickyVideo ){
		selectors = {
			" .uagb-video__sticky-apply .uagb-video__inner-wrap": {
				"width" : generateCSSUnit(videoWidth , "px"),
				"height" : "calc( "+videoWidth+"px *"+calc_percetage+" )",
			},
			" .uagb-video__sticky-apply img.uagb-video__thumb": {
				"padding-top" : generateCSSUnit( videoBgVrSpace, "px"),
				"padding-bottom" : generateCSSUnit( videoBgVrSpace, "px"),
				"padding-left" : generateCSSUnit( videoBgHrSpace, "px"),
				"padding-right" : generateCSSUnit( videoBgHrSpace, "px"),
				"background" : stickyBgColor,
				"width" : generateCSSUnit( videoWidth, "px"),
				"height" : "calc( "+videoWidth+"px *"+calc_percetage+" )",
			},
			" .uagb-video__sticky-apply iframe.uagb-video__iframe": {
				"padding-top" : generateCSSUnit( videoBgVrSpace, "px"),
				"padding-bottom" : generateCSSUnit( videoBgVrSpace, "px"),
				"padding-left" : generateCSSUnit( videoBgHrSpace, "px"),
				"padding-right" : generateCSSUnit( videoBgHrSpace, "px"),
				"background" : stickyBgColor,
				"width" : generateCSSUnit( videoWidth+"px"),
				"height" : "calc( "+videoWidth+"px *"+calc_percetage+" )",
			},

			" .uagb-video__sticky-close svg": {
				"fill" : closeIconColor,
			},
			" .uagb-video__sticky-close ": {
				"background" : closeIconBgColor
			},

			" .uagb-video__sticky-infobar": {
				"color" : infoBarTextColor,
				"background" : infoBarBgColor,
				"padding-top" : generateCSSUnit( infoBarTextVrSpace, "px"),
				"padding-bottom" : generateCSSUnit( infoBarTextVrSpace, "px"),
				"padding-left" : generateCSSUnit( infoBarTextHrSpace, "px"),
				"padding-right" : generateCSSUnit( infoBarTextHrSpace, "px"),
				"font-size": generateCSSUnit( infoBarFontSize, infoBarFontSizeType ),
				"font-family": infoBarFontFamily,
				"font-weight": infoBarFontWeight,
				"line-height": generateCSSUnit( infoBarLineHeight, infoBarLineHeightType),
			},
		}
	}

	selectors[" .uagb-video__vimeo-wrap a"] = {
		"color": controlsColor,
	}
	selectors[" .uagb-video__vimeo-wrap"] = {
		"color": controlsColor,
	}
	// Icon css
	if( "icon" == sourceType  ){
		selectors[" .uagb-video__play-icon"] = {
			"height" : generateCSSUnit( iconSize, "px"),
			"width" : generateCSSUnit( iconSize, "px"),
		}
		selectors[" .uagb-video__play-icon svg"] = {
			"height" : generateCSSUnit( iconSize, "px"),
			"width" : generateCSSUnit( iconSize, "px"),
			"fill": iconColor,
			"line-height" : generateCSSUnit( iconSize, "px"),
		}

		selectors[" .uagb-video__content-wrap:hover .uagb-video__play-icon svg"] = {
			"fill" : iconHover,
		}
	}else{
		selectors[" .uagb-video__play-icon img"] = {
			"max-width" : generateCSSUnit( iconImageWidth, "px"),
			"width" : generateCSSUnit( iconImageWidth, "px"),
			"height" : generateCSSUnit( iconImageWidth, "px"),
			"border-radius": generateCSSUnit( iconimgBorderRadius,"%"),
		}
		selectors[" .uagb-video__play-icon"] = {
			"height" : generateCSSUnit( iconImageWidth, "px"),
			"width" : generateCSSUnit( iconImageWidth, "px"),
		}
	}

	selectors[" .uagb-video__content-wrap:before"] = {
		"background-color" : overlayColor,
		"opacity": ( typeof opacity != "undefined" ) ? ( 100 - opacity )/100 : 0.5
	}

	tablet_selectors[" .uagb-video__sticky-infobar"] = {
		"font-size": generateCSSUnit( infoBarFontSizeTablet, infoBarFontSizeType),
		"line-height": generateCSSUnit( infoBarLineHeightTablet, infoBarLineHeightType),
	}

	mobile_selectors[" .uagb-video__sticky-infobar"] = {
		"font-size": generateCSSUnit( infoBarFontSizeMobile, infoBarFontSizeType),
		"line-height": generateCSSUnit( infoBarLineHeightMobile, infoBarLineHeightType),
	}

	var styling_css = generateCSS( selectors, `.block-editor-page #wpwrap #uagb-video-${ props.clientId }` )

	styling_css += generateCSS( tablet_selectors, `.block-editor-page #wpwrap #uagb-video-${ props.clientId }`, true, "tablet" )

	styling_css += generateCSS( mobile_selectors, `.block-editor-page #wpwrap #uagb-video-${ props.clientId }`, true, "mobile" )

	return styling_css

}

export default VideoStyle
