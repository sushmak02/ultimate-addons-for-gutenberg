/**
 * BLOCK: Forms - Name - Save Block
 */

import classnames from "classnames"

const { __ } = wp.i18n
const {	RichText } = wp.blockEditor

export default function save( props ) {
	
	const { attributes } = props

	const {
		block_id,
		nameRequired,
		name,
		placeholder
	} = attributes
	
	const isRequired = (nameRequired) ? "required" : "";
	
	return (
		<div className={ classnames(
			"uagb-forms-name-wrap",
			"uagb-forms-field-set",
			`uagb-block-${ block_id }`,
		) }>
				<RichText.Content
				tagName="div"
				value={ name }
				className={`uagb-forms-name-label ${isRequired} uagb-forms-input-label`}			
				/>
				<input type="text" placeholder={placeholder} required={ nameRequired } className="uagb-forms-name-input uagb-forms-input"/>
		</div>
	)
}