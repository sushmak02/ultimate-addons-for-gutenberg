/**
 * BLOCK: Ratings Review Block.
 */
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import attributes from "./attributes"
import edit from "./edit"
import save from "./save"
import "./style.scss"
import "./editor.scss"


const { __ } = wp.i18n

const {
	registerBlockType
} = wp.blocks

registerBlockType( "uagb/ratings-review", {
	title: uagb_blocks_info.blocks["uagb/ratings-review"]["title"],
	description: uagb_blocks_info.blocks["uagb/ratings-review"]["description"],
	icon: UAGB_Block_Icons.inline_notice,
	category: uagb_blocks_info.category,
	keywords: [
		__( "ratings" ),
		__( "review" ),
		__( "schema" ),
		__( "uag" ),
	],
	supports: {
		anchor: true,
	},
	attributes,
	edit,
	save,
} )