/**
 * BLOCK: UAGB Video Block Attributes
 */
const attributes = {
	block_id :{
		type : "string"
	},
	videoType: {
		type: "string",
		default: "youtube",
	},
	startTime :{
		type: "number",
		default: 0,
	},
	endTime :{
		type: "number",
	},
	YouTubeUrl: {
		type: "string",
		default: "https://www.youtube.com/watch?v=HJRzUQMhJMQ",
	},
	vimeoUrl: {
		type: "string",
		default: "https://vimeo.com/274860274",
	},
	YouTubeThumbnail: {
		type: "string",
		default: "",
	},
	vimeoThumbnail: {
		type: "string",
		default: "",
	},
	vimeoTitle: {
		type: "string",
		default: "",
	},
	vimeoUserImg: {
		type: "string",
		default: "",
	},
	vimeoUserName: {
		type: "string",
		default: "",
	},
	aspectRatio: {
		type: "string",
		default: "16_9",
	},
	autoplay: {
		type: "boolean",
		default: false,
	},	
	relatedVideo: {
		type: "string",
		default: 0,
	},
	playerControl: {
		type: "boolean",
		default: true,
	},	
	videoMute: {
		type: "boolean",
		default: false,
	},
	modestBranding: {
		type: "boolean",
		default: false,
	},
	privacyMode: {
		type: "boolean",
		default: false,
	},
	loop: {
		type: "boolean",
		default: false,
	},
	introTitle: {
		type: "boolean",
		default: true,
	},
	introPortrait: {
		type: "boolean",
		default: true,
	},
	introByeline: {
		type: "boolean",
		default: true,
	},
	controlsColor: {
		type: "string",
		default: "#fff"
	},
	thumbnailSize: {
		type: "string",
		default: "maxresdefault"
	},
	customThumbnail: {
		type: "boolean",
		default: false,
	},
	custThumbImage: {
		type: "object",
		default:{
			"url": "",
			"alt": "Video placeholder img",
		}
	},
	imageSize:{
		type: "string",
		default: "full",
	},
	overlayColor: {
		type: "string",
	},	
	opacity:{
		type: "number",
		default: 50,
	},
	sourceType :{
		type: "string",
		default: "icon",
	},
	icon : {
		type : "string",
		default : "fas fa-play-circle"
	},
	iconimgPosition: {
		type: "string",
		default: "above-title"
	},
	iconSize : {
		type: "number",
		default: 75,
	},
	iconHover : {
		type : "string",
		default : ""
	},
	iconColor : {
		type : "string",
		default : "#333",
	},
	iconImage: {
		type: "object",
		default:{
			"url": "",
			"alt": "",
		}
	},
	iconImageSize:{
		type: "string",
		default: "thumbnail",
	},
	iconImageWidth :{
		type: "number",
		default: 75,
	},
	iconimgBorderRadius: {
		type: "number",
		default : 100
	},
	videoSrc: {
		type: "string",
		default : ""
	},
	enableSubscribeBar: {
		type: "boolean",
		default: false,
	},
	channeltype: {
		type: "string",
		default : "id"
	},
	channelId: {
		type: "string",
		default : "UCtFCcrvupjyaq2lax_7OQQg"
	},
	channelName: {
		type: "string",
		default : "TheBrainstormForce"
	},
	channeltext: {
		type: "string",
		default : "Subscribe to our YouTube Channel"
	},
	enableSubscribeCount: {
		type: "boolean",
		default: false,
	},
	subTextColor: {
		type: "string",
		default : "#fff"
	},
	subBgColor: {
		type: "string",
		default : "#333"
	},
	subVrPadding: {
		type: "number",
		default : ""
	},
	subHrPadding: {
		type: "number",
		default : ""
	},
	stack: {
		type: "number",
		default : "none"
	},
	subSpace: {
		type: "number",
		default : 10
	},
}
export default attributes
