/**
 * BLOCK: Content Timeline - Child
 */

import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import attributes from "./attributes"
import edit from "./edit"
import save from "./save"
import "./style.scss"

const {
	registerBlockType
} = wp.blocks

registerBlockType( "uagb/content-timeline-child", {
	title: uagb_blocks_info.blocks["uagb/content-timeline-child"]["title"],
	description: uagb_blocks_info.blocks["uagb/content-timeline-child"]["description"],
	icon: UAGB_Block_Icons.content_timeline_child,
	category: uagb_blocks_info.category,
	parent: [ "uagb/content-timeline" ],
	attributes,
	edit,
	save,
} )