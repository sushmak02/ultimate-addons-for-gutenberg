const { __ } = wp.i18n

const attributes = {
	block_id : {
		type: "string"
	},
	submitButtonText : {
		type: "string",
		default: __( "Submit" )
	},
	formLabel : {
		type: "string",
		default: __( "UAG Form" )
	},
	buttonAlign : {
		type: "string",
		default:'left'
	},
	confirmationType : {
		type: "string",
		default:'message'
	},
	confirmationMessage : {
		type: "string",
		default: __( 'The form has been submitted Successfully!' )
	},
	confirmationUrl : {
		type: "string",
	},
	sendAfterSubmitEmail : {
		type: "boolean"
	},
	afterSubmitFromEmail : {
		type: "string",
	},
	afterSubmitToEmail : {
		type: "string",
	},
	afterSubmitCcEmail : {
		type: "string",
	},
	afterSubmitBccEmail : {
		type: "string",
	},
	reCaptchaEnable: {
		type: "boolean",
		default: false
	},
	reCaptchaType : {
		type: "string",
		default: "v3",
	},
	reCaptchaSiteKeyV2 : {
		type: "string",
		default: "",
	},
	reCaptchaSecretKeyV2 : {
		type: "string",
		default: "",
	},
	reCaptchaSiteKeyV3 : {
		type: "string",
		default: "",
	},
	reCaptchaSecretKeyV3 : {
		type: "string",
		default: "",
	},
}
export default attributes
