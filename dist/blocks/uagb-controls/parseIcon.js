function parseSVG ( svg ) {

	var style = 'solid'

	if ( -1 !== svg.indexOf( "far" ) ) {
		style = 'regular'
	}

	if ( -1 !== svg.indexOf( "fas" ) ) {
		style = 'solid'
	}

	if ( -1 !== svg.indexOf( "fab" ) ) {
		style = 'brands'
	}

	svg = svg.replace( "far ", "" )
	svg = svg.replace( "fas ", "" )
	svg = svg.replace( "fab ", "" )
	svg = svg.replace( "fa-", "" )
	svg = svg.replace( "fa ", "" )

	return { 'svg' : svg, 'styles' : style }
}

export default parseSVG
