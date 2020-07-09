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
	RangeControl,
} = wp.components
const {
	InspectorControls,
} = wp.blockEditor
 
const { Component } = wp.element
const { withSelect } = wp.data

class UAGBTaxonomyList extends Component {

    constructor() {
		super( ...arguments )
        this.onSelectPostType = this.onSelectPostType.bind( this )
        this.onChangePostsPerPage = this.onChangePostsPerPage.bind( this )
	}
    onSelectPostType( value ) {
		const { setAttributes } = this.props

		setAttributes( { postType: value } )
		setAttributes( { categories: "" } )
    }
    onChangePostsPerPage( value ) {
		const { setAttributes } = this.props

		setAttributes( { postsToShow: value } )
		setAttributes( { paginationMarkup: "empty" } )
	}
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
            postType,
            postToShow
        } = attributes

        // All Controls.
        const generalSettings = () => {
            return (
			<InspectorControls>
				<PanelBody title={ __( "General" ) }>
                    <SelectControl
						label={ __( "Post Type" ) }
						value={ postType }
						onChange={ ( value ) => this.onSelectPostType( value ) }
						options={ uagb_blocks_info.post_types }
					/>
                    <RangeControl
                        label={ __( "Max. Taxonomy count" ) }
                        value={ postToShow }
                        onChange={ this.onChangePostsPerPage }
                        min={ 0 }
                        max={ 500 }
                    />
                </PanelBody>
            </InspectorControls>
            )
        } 
        return (
            <InspectorControls>
                { generalSettings() }
            </InspectorControls>
        )
    }
}

export default withSelect( ( select, props ) => {
    return {
        posts: select( 'core' ).getEntityRecords( 'postType', 'post' ),
    };
} )( UAGBTaxonomyList )

