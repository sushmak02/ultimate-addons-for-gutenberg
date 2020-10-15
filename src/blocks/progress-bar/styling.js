/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"
import hexToRgba from "../../../dist/blocks/uagb-controls/hexToRgba"
import generateCSSUnit from "../../../dist/blocks/uagb-controls/generateCSSUnit"

function styling( props ) {

	const {
        thickness,
        // Text Color
        backgroundType,
        progressColor,
        backgroundColor,
        backgroundOpacity,
        gradientColor1,
		gradientColor2,
		gradientLocation1,
		gradientLocation2,
		gradientType,
		gradientAngle,
        textColor,
        textSpacing,
        // Title
        titleTextFontFamily,
        titleTextFontWeight,
        titleTextFontSize,
        titleTextFontSizeType,
        titleTextFontSizeMobile,
        titleTextFontSizeTablet,
        titleTextLineHeight,
        titleTextLineHeightType,
        titleTextLineHeightMobile,
        titleTextLineHeightTablet
	} = props.attributes

	var selectors = {}
	var tablet_selectors = {}
    var mobile_selectors = {}
    
    selectors = {
        " .uagb-progress-bar": {
            "height" : generateCSSUnit( thickness, "px" ),
        },
        " .uagb-progress-bar__wrapper": {
            "background-color"			  : backgroundColor,
            "height" : generateCSSUnit( thickness, "px" ),
        },
        " .uagb-progress-bar__text-wrap": {
            "margin-bottom": generateCSSUnit( textSpacing, "px" )
        },        
        " .uagb-progress-bar__text": {
            "color": textColor,
            "font-family": titleTextFontFamily,
            "font-weight": titleTextFontWeight,
            "font-size": generateCSSUnit( titleTextFontSize, titleTextFontSizeType ),
            "line-height": generateCSSUnit( titleTextLineHeight, titleTextLineHeightType ),
        },
    }

    if ( "color" == backgroundType ) {

        selectors[" .uagb-progress-bar"]["background"] = hexToRgba( progressColor, backgroundOpacity )

    } else if ( "gradient" == backgroundType ) {

        selectors[" .uagb-progress-bar"]["background-color"] = "transparent"

		if ( "linear" === gradientType ) {

            selectors[" .uagb-progress-bar"]["background-image"] = `linear-gradient(${ gradientAngle }deg, ${ hexToRgba( gradientColor1, backgroundOpacity ) } ${ gradientLocation1 }%, ${ hexToRgba( gradientColor2, backgroundOpacity ) } ${ gradientLocation2 }%)`
            
		} else {

			selectors[" .uagb-progress-bar"]["background-image"] = `radial-gradient( at center center, ${ hexToRgba( gradientColor1, backgroundOpacity ) } ${ gradientLocation1 }%, ${ hexToRgba( gradientColor2, backgroundOpacity ) } ${ gradientLocation2 }%)`
		}
    }
  
    tablet_selectors[" .uagb-progress-bar__text"] = {
        "font-size": generateCSSUnit( titleTextFontSizeTablet, titleTextFontSizeType ),
        "line-height": generateCSSUnit( titleTextLineHeightTablet, titleTextLineHeightType ),
    }
  
    mobile_selectors[" .uagb-progress-bar__text"] = {
        "font-size": generateCSSUnit( titleTextFontSizeMobile, titleTextFontSizeType ),
        "line-height": generateCSSUnit( titleTextLineHeightMobile, titleTextLineHeightType ),
    }

	var base_selector = `.block-editor-page #wpwrap .uagb-block-${ props.clientId.substr( 0, 8 ) }`

	var styling_css = generateCSS( selectors, base_selector )

	styling_css += generateCSS( tablet_selectors, base_selector, true, "tablet" )

	styling_css += generateCSS( mobile_selectors, base_selector, true, "mobile" )

    return styling_css
    
}

export default styling
