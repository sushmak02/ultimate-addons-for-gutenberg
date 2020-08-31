/**
 * BLOCK: Forms - Upload - Save Block
 */

import classnames from "classnames"

const { __ } = wp.i18n
const {	RichText } = wp.blockEditor

export default function save( props ) {
	
	const { attributes } = props

	const {
		block_id,
		uploadRequired,
		name,
		formats
	} = attributes
	
	const allowed_files = formats.map(f => ".".concat(f)).join(",");

	return (
		<div className={ classnames(
			"uagb-forms-upload-wrap",
			"uagb-forms-field-set",
			`uagb-block-${ block_id }`,
		) }>
			<RichText.Content
			tagName="div"
			value={ name }
			className="uagb-forms-upload-label"			
			/>
			<input type="file" accept={allowed_files} className="uagb-forms-upload-input" required={uploadRequired} />
		</div>
	)
}