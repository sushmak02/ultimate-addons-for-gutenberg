/**
 * Internal dependencies
 */
import Copy from './components/controls';
import "./styles/editor.scss"

/**
 * WordPress dependencies
 */
const { registerPlugin } = wp.plugins;

registerPlugin( 'uagb-copy', {
	icon: "editor-paste-text",
	render: Copy,
} );
