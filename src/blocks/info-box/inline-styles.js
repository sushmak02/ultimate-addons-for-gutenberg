/**
 * Set inline styles.
 * @param  {object} props - The block object.
 * @return {object} The inline background type CSS.
 */
function InfoBoxStyle( props ) {
	const {
		headingAlign,
		headingColor,
		subHeadingColor,
		prefixColor,
		prefixFontSize,
		headFontSize,
		subHeadFontSize,
		separatorWidthType,
		headSpace,
		separatorSpace,
		subHeadSpace,
		icon,
		iconColor,
		iconSize,
		iconimgPosition,
		iconHover,
		iconimgBorderRadius,
		seperatorStyle,
		seperatorWidth,
		seperatorColor,
		seperatorThickness,
		seperatorSpace,
		ctaLinkColor,
		ctaFontSize,
		ctaFontSizeType,
		ctaFontSizeMobile,
		ctaFontSizeTablet,
		ctaBtnSize,
		ctaBtnLinkColor,
		ctaBgColor,
		ctaBtnVertPadding,
		ctaBtnHrPadding,
		ctaBorderStyle,
		ctaBorderColor,
		ctaBorderWidth,
		ctaBorderRadius,
		prefixSpace,
		iconLeftMargin,
		iconRightMargin,
		iconTopMargin,
		iconBottomMargin,
		imageSize,
		imageWidth,
		ctaLinkHoverColor,
		ctaBgHoverColor,
		ctaBorderhoverColor,
		ctaIconSpace,
		subHeadFontSizeType,
		subHeadFontSizeTablet,
		subHeadFontSizeMobile,
		headFontSizeType,
		headFontSizeTablet,
		headFontSizeMobile,
		prefixFontSizeType,
		prefixFontSizeTablet,
		prefixFontSizeMobile,
	} = props.attributes

	var clientId = "uagb-infobox-"+props.clientId

	var selectors = {
			// Icon css
		" .uagb-ifb-icon" : {
			"height" : iconSize+"px",
			"width" : iconSize+"px",
			"line-height" : iconSize+"px",
		},

		" .uagb-ifb-icon > span" : {
			"font-size" : iconSize+"px",
			"height": iconSize+"px",
			"color": iconColor,
			"fill": iconColor,
			"width": iconSize+"px",
			"line-height": iconSize + "px",
		},

		" .uagb-ifb-icon > svg" : {
			"fill": iconColor,
		},

		" .uagb-ifb-icon:hover > span" : {
			"color" : iconHover,
		},

		" .uagb-ifb-icon:hover > svg" : {
			"fill" : iconHover,
		},

		" .uagb-infobox__content-wrap .uagb-ifb-imgicon-wrap" : {
			"margin-left" : iconLeftMargin+"px",
			"margin-right" : iconRightMargin+"px",
			"margin-top" : iconTopMargin+"px",
			"margin-bottom" : iconBottomMargin+"px",
		},

		// Image
		" .uagb-ifb-image-content img" : {
			"width": imageWidth+"px",
			"max-width": imageWidth+"px",
		},

		" .uagb-infobox .uagb-ifb-image-content img" : {
			"border-radius" : iconimgBorderRadius+"px",
		},

		// CTA style
		" .uagb-infobox-cta-link a" : {
			"font-size" : ctaFontSize+ctaFontSizeType,
			"color": ctaLinkColor,
		},

		" .uagb-infobox-cta-link a:hover" : {
			"color": ctaLinkHoverColor,
		},

		" .uagb-infobox-cta-link .uagb-ifb-text-icon svg" : {
			"fill": ctaLinkColor,
		},

		" .uagb-infobox-cta-link a:hover svg" : {
			"fill": ctaLinkHoverColor,
		},

		" .uagb-infobox-cta-link span" : {
			"font-size" : ctaFontSize+ctaFontSizeType,
			"width" : ctaFontSize+"px",
			"height" : ctaFontSize+"px",
			"color": ctaLinkColor,
		},
		" .uagb-infobox-cta-link:hover span" : {
			"color": ctaLinkHoverColor,
		},

		" .uagb-infobox-cta-link svg" : {
			"fill": ctaBtnLinkColor,
		},
		" .uagb-infobox-cta-link:hover svg" : {
			"fill": ctaLinkHoverColor,
		},

		" .uagb-ifb-button-wrapper .uagb-infobox-cta-link span" : {
			"font-size" : ctaFontSize+"px",
			"color": ctaBtnLinkColor,
		},
		" .uagb-ifb-button-wrapper:hover .uagb-infobox-cta-link span" : {
			"color": ctaLinkHoverColor,
		},

		" .uagb-ifb-button-wrapper .uagb-infobox-cta-link" : {
			"font-size" : ctaFontSize+"px",
			"color": ctaBtnLinkColor,
			"background-color": ctaBgColor,
			"border-style": ctaBorderStyle,
			"border-color": ctaBorderColor,
			"border-radius": ctaBorderRadius + "px",
			"border-width": ctaBorderWidth + "px",
			"padding-top": ctaBtnVertPadding + "px",
			"padding-bottom": ctaBtnVertPadding + "px",
			"padding-left": ctaBtnHrPadding + "px",
			"padding-right": ctaBtnHrPadding + "px",
		},

		" .uagb-ifb-button-wrapper:hover .uagb-infobox-cta-link" : {
			"color": ctaLinkHoverColor,
			"background-color": ctaBgHoverColor,
			"border-color": ctaBorderhoverColor,
		},

		// Prefix Style
		" .editor-rich-text .uagb-ifb-title-prefix" : {
			"font-size" : prefixFontSize+prefixFontSizeType,
			"color": prefixColor,
			"margin-bottom": prefixSpace+"px",
		},

		// Title Style
		" .editor-rich-text .uagb-ifb-title" : {
			"font-size" : headFontSize+headFontSizeType,
			"color": headingColor,
			"margin-bottom": headSpace+"px",
		},

		// Description Style
		" .editor-rich-text .uagb-ifb-desc" : {
			"font-size" : subHeadFontSize+subHeadFontSizeType,
			"color": subHeadingColor,
			"margin-bottom": subHeadSpace+"px",
		},

		// Seperator
		" .uagb-ifb-separator" : {
			"width" : seperatorWidth+separatorWidthType,
			"border-top-width" : seperatorThickness+"px",
			"border-top-color": seperatorColor,
			"border-top-style": seperatorStyle,
		},
		" .uagb-ifb-separator-parent" : {
			"margin-bottom":seperatorSpace+"px"
		},

		" .uagb-ifb-content" : {
			"padding": ( typeof blockPadding != "undefined" ) ? blockPadding+"px": "inherit"
		},

		" .uagb-ifb-align-icon-after" : {
			"margin-left" : ctaIconSpace+"px",
		},

		" .uagb-ifb-align-icon-before" : {
			"margin-right" : ctaIconSpace+"px",
		},		
	}
		
	if( iconimgPosition == "above-title" ||  iconimgPosition == "below-title" ){
		selectors[".uagb-infobox__content-wrap"] = {
			"text-align" : headingAlign,
		}
	}

	var tablet_selectors = {
		" .editor-rich-text .uagb-ifb-desc" : {
			"font-size": subHeadFontSizeTablet + subHeadFontSizeType,
		},
		" .editor-rich-text .uagb-ifb-title" : {
			"font-size": headFontSizeTablet + headFontSizeType,
		},
		" .editor-rich-text .uagb-ifb-title-prefix" : {
			"font-size": prefixFontSizeTablet + prefixFontSizeType,
		},
		" .uagb-infobox-cta-link a" : {
			"font-size": ctaFontSizeTablet + ctaFontSizeType,
		},
		" .uagb-infobox-cta-link span" : {
			"font-size": ctaFontSizeTablet + ctaFontSizeType,
		},
	}

	var mobile_selectors = {
		" .editor-rich-text .uagb-ifb-desc" : {
			"font-size": subHeadFontSizeMobile + subHeadFontSizeType,
		},
		" .editor-rich-text .uagb-ifb-title" : {
			"font-size": headFontSizeMobile + headFontSizeType,
		},
		" .editor-rich-text .uagb-ifb-title-prefix" : {
			"font-size": prefixFontSizeMobile + prefixFontSizeType,
		},
		" .uagb-infobox-cta-link a" : {
			"font-size": ctaFontSizeMobile + ctaFontSizeType,
		},
		" .uagb-infobox-cta-link span" : {
			"font-size": ctaFontSizeMobile + ctaFontSizeType,
		}
	}

	var styling_css = ""

	for( var i in selectors ) {

		styling_css += " .block-editor-page #wpwrap #"+clientId+i + " { "


		var sel = selectors[i]
		var css = ""

		for( var j in sel ) {

			css += j + ": " + sel[j] + ";"
		}

		styling_css += css + " } "
	}

	styling_css += "@media only screen and (max-width: 976px) {"

	for( var i in tablet_selectors ) {

		styling_css += " .block-editor-page #wpwrap #"+clientId+" "+i + " { "

		var sel = tablet_selectors[i]
		var css = ""

		for( var j in sel ) {

			css += j + ": " + sel[j] + ";"
		}

		styling_css += css + " } "
	}

	styling_css += " }"

	styling_css += "@media only screen and (max-width: 767px) {"

	for( var i in mobile_selectors ) {

		styling_css += " .block-editor-page #wpwrap #"+clientId+" "+i + " { "

		var sel = mobile_selectors[i]
		var css = ""

		for( var j in sel ) {

			css += j + ": " + sel[j] + ";"
		}

		styling_css += css + " } "
	}

	styling_css += " }"

	return styling_css

}

export default InfoBoxStyle
