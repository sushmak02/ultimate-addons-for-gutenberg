/**
 * Set inline CSS class.
 * @param {object} props - The block object.
 * @return {array} The inline CSS class.
 */

import FontAwesomeIcons from "./icons"
import parseSVG from "./parse"

function renderSVG ( svg ) {

	svg = parseSVG( svg )
	

	var fontAwesome = FontAwesomeIcons[svg]
	var style = fontAwesome["styles"]
		style = style[0]

	if ( "undefined" != typeof fontAwesome ) {

		var viewbox_array = fontAwesome["svg"][style]["viewBox"]
		var path = fontAwesome["svg"][style]["path"]
		var viewBox = viewbox_array.join( " " )

		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}><path d={path}></path></svg>
		)
	}

}

export default renderSVG
