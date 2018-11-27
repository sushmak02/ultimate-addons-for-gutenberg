/**
 * BLOCK: Video
 */

// Import block dependencies and components.
import classnames from "classnames"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"

import edit from "./edit"
import attributes from "./attributes"
import "./style.scss"

import VideoIcon from "./components/VideoIcon"
import VideoIconImage from "./components/VideoIconImage"
import VideoThumb from "./components/VideoThumb"
import VimeoMeta from "./components/VimeoMeta"
import CustomImage from "./components/CustomImage"
import VideoClasses from "./classes"
import VideoImgSrc from "./VideoImgSrc"

const { __ } = wp.i18n

// Import registerBlockType() from wp.blocks
const {
	registerBlockType,
} = wp.blocks

// Extend component
const { Fragment } = wp.element

/**
 * Register: as Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( "uagb/video", {
	title: uagb_blocks_info.blocks["uagb/video"]["title"],
	description: uagb_blocks_info.blocks["uagb/video"]["description"],
	icon: UAGB_Block_Icons.video,
	keywords: [
		__( "video" ),
		__( "uagb" ),
	],
	category: uagb_blocks_info.category,
	attributes,
	edit,
	save: function( props ) {

		const {
			block_id, 
			className,
			videoType,
			autoplay,
			customThumbnail,
			sourceType,
		} = props.attributes

		const my_block_id = "uagb-video-"+block_id
		var thumbanil_output = ''
		var play_icon_output = ''
		var vimeo_output     = ''

		if( !autoplay ){

			if( customThumbnail ){
				thumbanil_output = <CustomImage attributes={props.attributes}/>
			}else{
				thumbanil_output = ( videoType == 'youtube' ) ? <VideoThumb attributes={props.attributes} setAttributes = "not_set" /> : <VideoThumb attributes={props.attributes} setAttributes = "not_set" />
			}
			
			play_icon_output = ( sourceType == 'icon' ) ? <VideoIcon attributes={props.attributes}/> : <VideoIconImage attributes={props.attributes}/>
			
			vimeo_output = <VimeoMeta attributes={props.attributes}/>
		}
	
		return (
			<Fragment>
				<div className={ classnames(
						className,
						"uagb-video__outer-wrap"
					) }
					id = { my_block_id }
					>	
					<div className = { classnames(					
						"uagb-video__content-wrap",
						...VideoClasses(props.attributes),
					) }	>	
						{ vimeo_output }		
					   <div className = "uagb-video__play" data-src = { VideoImgSrc(props.attributes)} >
					      { thumbanil_output }	
					      { play_icon_output }		      
					    </div>
					</div>
				</div>
			</Fragment>
		)
	}
} )