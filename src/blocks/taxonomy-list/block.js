/**
 * BLOCK: UAGB - taxonomy-list
 */

// Import block dependencies and components
// import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import edit from "./edit"

//  Import CSS.
import "./style.scss"
import "./editor.scss"

// Components
const { __ } = wp.i18n

// Register block controls
const { registerBlockType } = wp.blocks

// Register the block
registerBlockType( "uagb/taxonomy-list", {
	title: uagb_blocks_info.blocks["uagb/taxonomy-list"]["title"],
	description: uagb_blocks_info.blocks["uagb/taxonomy-list"]["description"],
	icon: 'list-view',
	category: uagb_blocks_info.category,
	keywords: [
		__( "taxonomy" ),
		__( "list" ),
		__( "uag" ),
	],
	edit,
	//Render via PHP
    save() {
        return null
    },
} )
