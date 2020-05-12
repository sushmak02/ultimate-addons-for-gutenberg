/**
 * External dependencies
 */
import { size } from 'lodash';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { select, withSelect, withDispatch } = wp.data;
const { Fragment, Component } = wp.element;
const { withSpokenMessages, ClipboardButton } = wp.components;
const { PluginBlockSettingsMenuItem } = wp.editPost;
const { compose, ifCondition } = wp.compose;
const { serialize } = wp.blocks;

/**
 * Render plugin
 */
class CopyBlocks extends Component {
	constructor() {
		super( ...arguments );

		this.getSelection = this.getSelection.bind( this );
	}

	getSelection() {
		const {
			selectedBlockCount,
			selectedBlock,
		} = this.props;

		let cloned;
		const selectedBlocks = select( 'core/block-editor' ).getMultiSelectedBlocks();

		if ( selectedBlockCount === 1 ) {
			cloned = serialize( selectedBlock );
		}

		if ( size( selectedBlocks ) > 0 ) {
			cloned = serialize( selectedBlocks );
		}

		return cloned;
	}

	render() {
		const {
			onCopy,
			selectedBlock,
		} = this.props;

		const selectedBlocks = select( 'core/block-editor' ).getMultiSelectedBlocks();

		if ( ! selectedBlock && size( selectedBlocks ) < 1 ) {
			return false;
		}

		return (
			<Fragment>
				<PluginBlockSettingsMenuItem
					icon={ "editor-paste-text" }
					label={
						<ClipboardButton
							text={ this.getSelection() }
							onCopy={ onCopy }
						>
							{ __( 'UAG Copy', 'ultimate-addons-for-gutenberg' ) }
						</ClipboardButton>
					}
					onClick={ () => {

					} }
					className="uag-copy"
				>
				</PluginBlockSettingsMenuItem>

			</Fragment>
		);
	}
}

export default compose(
	withSelect( () => {
		const { getSelectedBlockCount, getSelectedBlock, getMultiSelectedBlocks } = select( 'core/block-editor' );
		if ( ! getSelectedBlock() ) {
			return {};
		}

		return {
			selectedBlockCount: getSelectedBlockCount(),
			selectedBlock: getSelectedBlock(),
			selectedBlocks: getMultiSelectedBlocks(),
			isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitCopyOptions' ),
		};
	} ),
	withDispatch( ( dispatch ) => {
		const { createNotice } = dispatch( 'core/notices' );

		return {
			onCopy() {
				const selectedBlocks = select( 'core/block-editor' ).getMultiSelectedBlocks();
				let notice = __( 'Selected block copied to your clipboard.', 'ultimate-addons-for-gutenberg' );
				if ( size( selectedBlocks ) > 0 ) {
					notice = __( 'Selected blocks copied to your clipboard.', 'ultimate-addons-for-gutenberg' );
				}

				createNotice(
					'info',
					notice,
					{
						isDismissible: true,
						type: 'snackbar',
					}
				);
			},
		};
	} ),
	ifCondition( ( props ) => {
		return ! props.isDisabled;
	} ),
	withSpokenMessages,
)( CopyBlocks );
