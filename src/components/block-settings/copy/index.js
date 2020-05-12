/**
 * Internal dependencies
 */
import CopyBlocks from './components/controls';
import "./styles/editor.scss"

/**
 * WordPress dependencies
 */
const { registerPlugin } = wp.plugins;

registerPlugin( 'uagb-copy', {
	icon: "editor-paste-text",
	render: CopyBlocks,
} );
