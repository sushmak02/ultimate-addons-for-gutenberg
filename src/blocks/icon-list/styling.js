function styling( props ) {

	const {
		align,
		icon_count,
		icons,
		gap,
		inner_gap,
		icon_layout,
		size,
		sizeType,
		sizeTablet,
		sizeMobile,
		fontSize,
		fontSizeType,
		fontSizeMobile,
		fontSizeTablet,
		stack,
		bgSize,
		borderRadius
	} = props.attributes

	var selectors = {}
	var tablet_selectors = {}
	var mobile_selectors = {}

	icons.map( ( icon, index ) => {

		if ( icon_count <= index ) {
			return
		}

		selectors[" .uagb-icon-list-repeater-" + index + " .uagb-icon-list__source-icon"] = {
			"color" : icon.icon_color
		}

		selectors[" .uagb-icon-list-repeater-" + index + " .uagb-icon-list__source-icon svg"] = {
			"fill" : icon.icon_color
		}

		selectors[" .uagb-icon-list-repeater-" + index + ":hover .uagb-icon-list__source-icon"] = {
			"color" : icon.icon_hover_color
		}

		selectors[" .uagb-icon-list-repeater-" + index + ":hover .uagb-icon-list__source-icon svg"] = {
			"fill" : icon.icon_hover_color
		}

		selectors[" .uagb-icon-list-repeater-" + index + " .uagb-icon-list__label"] = {
			"color" : icon.label_color,
			"font-size" : fontSize + fontSizeType
		}

		mobile_selectors[" .uagb-icon-list-repeater-" + index + " .uagb-icon-list__label"] = {
			"font-size" : fontSizeMobile + fontSizeType
		}

		tablet_selectors[" .uagb-icon-list-repeater-" + index + " .uagb-icon-list__label"] = {
			"font-size" : fontSizeTablet + fontSizeType
		}

		selectors[" .uagb-icon-list-repeater-" + index + ":hover .uagb-icon-list__label"] = {
			"color" : icon.label_hover_color
		}

		selectors[" .uagb-icon-list-repeater-" + index + " .uagb-icon-list__source-wrap"] = {
			"background" : icon.icon_bg_color
		}

		selectors[" .uagb-icon-list-repeater-" + index + ":hover .uagb-icon-list__source-wrap"] = {
			"background" : icon.icon_bg_hover_color
		}
	})

	if ( "right" == align ) {
		selectors[":not(.uagb-icon-list__no-label) .uagb-icon-list__source-wrap"] = {
			"margin-left" : inner_gap + "px"
		}
		selectors[" .uagb-icon-list__content-wrap"] = {
			"flex-direction" : "row-reverse"
		}
	} else {
		selectors[":not(.uagb-icon-list__no-label) .uagb-icon-list__source-wrap"] = {
			"margin-right" : inner_gap + "px"
		}
	}

	selectors[" .uagb-icon-list__source-wrap"] = {
		"padding": bgSize + "px",
		"border-radius": borderRadius + "px"
	}


	selectors[".uagb-icon-list__layout-vertical a.uagb-icon-list__wrapper"] = {
		"margin-left" : 0,
		"margin-right" : 0,
		"margin-bottom" : gap + "px"
	}

	selectors[".uagb-icon-list__layout-vertical .uagb-icon-list__wrap"] = {
		 "flex-direction": "column"
	}

	selectors[".uagb-icon-list__layout-vertical a.uagb-icon-list__wrapper:last-child"] = {
		"margin-bottom" : 0
	}

	selectors[".uagb-icon-list__layout-horizontal a.uagb-icon-list__wrapper"] = {
		"margin-left" : ( gap/2 ) + "px",
		"margin-right" : ( gap/2 ) + "px"
	}

	selectors[".uagb-icon-list__layout-horizontal a.uagb-icon-list__wrapper:first-child"] = {
		"margin-left" : 0
	}

	selectors[".uagb-icon-list__layout-horizontal a.uagb-icon-list__wrapper:last-child"] = {
		"margin-right" : 0
	}

	selectors[" .uagb-icon-list__source-image"] = {
		"width": size + sizeType
	}

	selectors[" .uagb-icon-list__source-icon"] = {
		"width": size + sizeType,
		"height": size + sizeType,
		"font-size": size + sizeType
	}

	selectors[" .uagb-icon-list__source-icon svg"] = {
		"width": size + sizeType,
		"height": size + sizeType,
	}

	selectors[" .uagb-icon-list__source-icon:before"] = {
		"width": size + sizeType,
		"height": size + sizeType,
		"font-size": size + sizeType
	}

	mobile_selectors[" .uagb-icon-list__source-image"] = {
		"width": sizeMobile + sizeType
	}

	mobile_selectors[" .uagb-icon-list__source-icon"] = {
		"width": sizeMobile + sizeType,
		"height": sizeMobile + sizeType,
		"font-size": sizeMobile + sizeType
	}

	mobile_selectors[" .uagb-icon-list__source-icon svg"] = {
		"width": sizeMobile + sizeType,
		"height": sizeMobile + sizeType,
	}

	mobile_selectors[" .uagb-icon-list__source-icon:before"] = {
		"width": sizeMobile + sizeType,
		"height": sizeMobile + sizeType,
		"font-size": sizeMobile + sizeType
	}

	tablet_selectors[" .uagb-icon-list__source-image"] = {
		"width": sizeTablet + sizeType
	}

	tablet_selectors[" .uagb-icon-list__source-icon"] = {
		"width": sizeTablet + sizeType,
		"height": sizeTablet + sizeType,
		"font-size": sizeTablet + sizeType
	}

	tablet_selectors[" .uagb-icon-list__source-icon svg"] = {
		"width": sizeTablet + sizeType,
		"height": sizeTablet + sizeType,
	}

	tablet_selectors[" .uagb-icon-list__source-icon:before"] = {
		"width": sizeTablet + sizeType,
		"height": sizeTablet + sizeType,
		"font-size": sizeTablet + sizeType
	}

	selectors[" .uagb-icon-list__label-wrap"] = {
		"text-align": align
	}

	var alignment = ( align == "left" ) ? "flex-start" : ( ( align == "right" ) ? "flex-end" : "center" )

	selectors[" .uagb-icon-list__wrap"] = {
		"justify-content" : alignment,
		"-webkit-box-pack": alignment,
		"-ms-flex-pack": alignment,
		"justify-content": alignment,
		"-webkit-box-align": alignment,
		"-ms-flex-align": alignment,
		"align-items": alignment,
	}

	if ( "horizontal" == icon_layout ) {

		if ( "tablet" == stack ) {

			tablet_selectors[" .uagb-icon-list__wrap a.uagb-icon-list__wrapper"] = {
				"margin-left" : 0,
				"margin-right" : 0,
				"margin-bottom" : gap + "px"
			}

			tablet_selectors[" .uagb-icon-list__wrap"] = {
				"flex-direction": "column"
			}

			tablet_selectors[" .uagb-icon-list__wrap a.uagb-icon-list__wrapper:last-child"] = {
				"margin-bottom" : 0
			}

		} else if ( "mobile" == stack ) {

			mobile_selectors[" .uagb-icon-list__wrap a.uagb-icon-list__wrapper"] = {
				"margin-left" : 0,
				"margin-right" : 0,
				"margin-bottom" : gap + "px"
			}

			mobile_selectors[" .uagb-icon-list__wrap"] = {
				"flex-direction": "column"
			}

			mobile_selectors[" .uagb-icon-list__wrap a.uagb-icon-list__wrapper:last-child"] = {
				"margin-bottom" : 0
			}
		}
	}


	var styling_css = ""
	var id = `#uagb-icon-list-${ props.clientId }`

	for( var i in selectors ) {

		styling_css += id

		styling_css += i + " { "

		var sel = selectors[i]
		var css = ""

		for( var j in sel ) {

			css += j + ": " + sel[j] + ";"
		}

		styling_css += css + " } "
	}

	styling_css += "@media only screen and (max-width: 976px) {"

	for( var i in tablet_selectors ) {

		styling_css += id

		styling_css += i + " { "

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

		styling_css += id

		styling_css += i + " { "

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

export default styling
