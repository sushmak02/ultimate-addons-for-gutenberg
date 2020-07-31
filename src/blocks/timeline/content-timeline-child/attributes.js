/**
 * BLOCK: UAGB Timeline Attributes
 */

const { __ } = wp.i18n

const attributes = {
	counter: {
		type : "number",
		default : 1,
	},
	time_heading:{
		type: "string",
		default:__( "Timeline Heading " )
	},
	time_desc:{
		type: "string",
		default:__( "This is Timeline description, you can change me anytime click here " )
	},
	classMigrate: {
		type: "boolean",
		default: false
	},
	dateFormat: {
		type: "string",
		default: "F j, Y"
	},
	align : {
		type : "string",
		default : "center",
	},
	headingColor : {
		type : "string",
	},
	subHeadingColor : {
		type : "string",
	},
	separatorBg : {
		type : "string",
		default : "#eee",
	},
	backgroundColor : {
		type : "string",
		default : "#eee",
	},
	separatorColor : {
		type : "string",
		default : "#eee",
	},
	separatorFillColor : {
		type : "string",
		default : "#61ce70",
	},
	separatorBorder : {
		type : "string",
		default : "#eee",
	},
	borderFocus : {
		type : "string",
		default : "#5cb85c",
	},
	headingTag : {
		type : "string",
		default : "h4",
	},
	horizontalSpace : {
		type : "number",
		default : 10,
	},
	verticalSpace : {
		type : "number",
		default : 15,
	},
	headFontSize : {
		type : "number",
	},
	headFontSizeType: {
		type: "string",
		default: "px"
	},
	headFontSize: {
		type: "number",
	},
	headFontSizeTablet: {
		type: "number",
	},
	headFontSizeMobile: {
		type: "number",
	},
	headFontFamily: {
		type: "string",
		default: "Default",
	},
	headFontWeight: {
		type: "string",
	},
	headFontSubset: {
		type: "string",
	},
	headLineHeightType: {
		type: "string",
		default: "em"
	},
	headLineHeight: {
		type: "number",
	},
	headLineHeightTablet: {
		type: "number",
	},
	headLineHeightMobile: {
		type: "number",
	},
	headLoadGoogleFonts: {
		type: "boolean",
		default: false
	},
	timelinAlignment : {
		type : "string",
		default : "center",
	},
	arrowlinAlignment : {
		type : "string",
		default : "center",
	},
	subHeadFontSizeType: {
		type: "string",
		default: "px"
	},
	subHeadFontSize: {
		type: "number",
	},
	subHeadFontSizeTablet: {
		type: "number",
	},
	subHeadFontSizeMobile: {
		type: "number",
	},
	subHeadFontFamily: {
		type: "string",
		default: "Default",
	},
	subHeadFontWeight: {
		type: "string",
	},
	subHeadFontSubset: {
		type: "string",
	},
	subHeadLineHeightType: {
		type: "string",
		default: "em",
	},
	subHeadLineHeight: {
		type: "number",
	},
	subHeadLineHeightTablet: {
		type: "number",
	},
	subHeadLineHeightMobile: {
		type: "number",
	},
	subHeadLoadGoogleFonts: {
		type: "boolean",
		default: false
	},
	headSpace : {
		type : "number",
		default : 5,
	},
	separatorwidth : {
		type : "number",
		default : 3,
	},
	borderwidth : {
		type : "number",
		default : 0,
	},
	iconColor : {
		type : "string",
		default : "#333",
	},
	iconFocus : {
		type : "string",
		default : "#fff",
	},
	iconBgFocus : {
		type : "string",
		default : "#61ce70",
	},
	dateColor : {
		type : "string",
		default : "#333",
	},
	dateFontsizeType: {
		type: "string",
		default: "px"
	},
	dateFontsize: {
		type: "number",
	},
	dateFontsizeTablet: {
		type: "number",
	},
	dateFontsizeMobile: {
		type: "number",
	},
	dateFontFamily: {
		type: "string",
		default: "Default",
	},
	dateFontWeight: {
		type: "string",
	},
	dateFontSubset: {
		type: "string",
	},
	dateLineHeightType: {
		type: "string",
		default: "em"
	},
	dateLineHeight: {
		type: "number",
	},
	dateLineHeightTablet: {
		type: "number",
	},
	dateLineHeightMobile: {
		type: "number",
	},
	dateLoadGoogleFonts: {
		type: "boolean",
		default: false
	},
	connectorBgsize : {
		type : "number",
		default : 35,
	},
	subHeadSpace : {
		type : "number",
		default : 5,
	},
	dateBottomspace : {
		type : "number",
		default : 5,
	},
	block_id  : {
		type : "string",
		default : "0",
	},
	timelineItem :{
		type : "number",
		default : 5,
	},
	tm_client_id  : {
		type : "string",
		default : "not_set",
	},
	borderRadius : {
		type : "number",
		default : 2,
	},
	bgPadding : {
		type : "number",
		default : 20,
	},
	iconSize : {
		type : "number",
		default : 12,
	},
	icon : {
		type : "string",
		default : "fab fa fa-calendar-alt"
	},
	t_date : {
		type: "string",
		default: '1/1/2019',
	},
	displayPostDate:{
		type: "boolean",
		default: true,
	},
	stack: {
		type: "string",
		default: "tablet"
	}
}

export default attributes