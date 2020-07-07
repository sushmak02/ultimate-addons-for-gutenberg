/**
 * External dependencies
 */
import classnames from "classnames"

// Import all of our Text Options requirements.
import TypographyControl from "../../components/typography"

// Import Web font loader for google fonts.
import WebfontLoader from "../../components/typography/fontloader"

//  Import CSS.
import "./style.scss"

const { __ } = wp.i18n
const {
    PanelBody,
    SelectControl,
	ToggleControl,
} = wp.components
const {
	InspectorControls,
} = wp.blockEditor
 
const { Component, Fragment } = wp.element

class UAGBTaxonomyList extends Component {

    componentDidMount() {
        this.props.setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )
    }

    render() {
        // Caching all Props.
		const {
			attributes,
			setAttributes
		} = this.props

		// Caching all attributes.
		const {
            block_id,
        } = attributes

        // All Controls.
		const inspectorControls = (
			<InspectorControls>
				<PanelBody title={ __( "General" ) }>
					<SelectControl
						label={ __( "Post Type" ) }
						
					/>
                </PanelBody>
            </InspectorControls>
        ); 
        return <div>Hello World, step 1 (from the editor).</div>
    }
}
export default UAGBTaxonomyList
