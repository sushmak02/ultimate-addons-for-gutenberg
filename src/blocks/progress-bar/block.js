/**
 * BLOCK: Progress Bar
 */

// Import block dependencies and components.
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"

// Import icon.
import edit from "./edit"
import save from "./save"
import attributes from "./attributes"
import "./editor.scss"
import "./style.scss"
const { __ } = wp.i18n

// Import registerBlockType() from wp.blocks
const {
	registerBlockType,
} = wp.blocks

registerBlockType( "uagb/progress-bar", {

	title: uagb_blocks_info.blocks["uagb/progress-bar"]["title"], // Block title.
	description:uagb_blocks_info.blocks["uagb/progress-bar"]["description"], // Block description.
	icon: UAGB_Block_Icons.cf7_styler,
	keywords: [
		__( "Progress Bar" ),
		__( "Progress Bar" ),
		__( "uag" ),
	],
	supports: {
		anchor: true,
	},
	attributes,
	category: uagb_blocks_info.category,
	edit,
	save
} )
