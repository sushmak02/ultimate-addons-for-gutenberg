const attributes = {
	block_id: {
		type: "string"
	},
	classMigrate: {
		type: "boolean",
		default: false
	},

	progressValue: {
		type: "number",
		default: "50"
	},

	animSpeed: {
		type: "number",
		default: "1000"
	},

	thickness: {
		type: "number",
		default: "20"
	},
	
	// Progress bar color
	progressColor: {
		type: "string",
		default: "#4169E1"
	},
	backgroundType: {
		type: "string",
		default: "color"
	},
	backgroundColor: {
		type: "string",
		default: "#f7f7f7"
	},
	backgroundOpacity: {
		type: "number",
	},
	gradientColor1: {
		type: "string",
	},
	gradientColor2: {
		type: "string",
	},
	gradientType: {
		type: "string",
		default: "linear"
	},
	gradientLocation1: {
		type: "number",
		default: 0
	},
	gradientLocation2: {
		type: "number",
		default: 100
	},
	gradientAngle: {
		type: "number",
		default: 0
	},
    
    // for content
	titleText: {
		type: "string",
		default: "My Skill"
	},
	textColor: {
		type: "string"
	},
	textSpacing: {
		type: "number",
		default: "10"
	},

	// link text font family
	titleTextLoadGoogleFonts: {
		type: "boolean",
		default: false
	},
	titleTextFontFamily: {
		type: "string",
		default: "Default",
	},
	titleTextFontWeight: {
		type: "string",
		default: "500"
	},
	titleTextFontSubset: {
		type: "string",
    },
    
	// link text font size
	titleTextFontSize: {
		type: "number",
		default: 20
	},
	titleTextFontSizeType: {
		type: "string",
		default: "px"
	},
	titleTextFontSizeTablet: {
		type: "number",
	},
	titleTextFontSizeMobile: {
		type: "number",
    },
    
	// link text line height
	titleTextLineHeightType: {
		type: "string",
		default: "em"
	},
	titleTextLineHeight: {
		type: "number",
	},
	titleTextLineHeightTablet: {
		type: "number",
	},
	titleTextLineHeightMobile: {
		type: "number",
	},

}

export default attributes
