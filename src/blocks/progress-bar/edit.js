// Import block dependencies and components.
import classnames from "classnames"
import styling from "./styling"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"

// Import all of our Text Options requirements.
import TypographyControl from "../../components/typography"

// Import Web font loader for google fonts.
import WebfontLoader from "../../components/typography/fontloader"

const { __ } = wp.i18n

const {
	InspectorControls,
	RichText,
	PanelColorSettings,
	ColorPalette
} = wp.blockEditor

const {
	PanelBody,
	SelectControl,
	RangeControl
} = wp.components

// Extend component
const { Component, Fragment } = wp.element

class UAGBProgressBar extends Component {

	constructor() {
		super( ...arguments )
		this.getProgress  	 = this.getProgress.bind( this )
	}

	getProgress( value ) {

		this.props.setAttributes( { progressValue: value } )

		var progress_module = jQuery( ".uagb-block-" + this.props.clientId.substr( 0, 8 ) )

		progress_module.find( '.uagb-progress-bar' ).width( value + '%' );
	}

	componentDidMount() {

		// Assigning block_id in the attribute.
		this.props.setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )

		// Assigning block_id in the attribute.
		this.props.setAttributes( { classMigrate: true } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-progress-bar__style-" + this.props.clientId.substr( 0, 8 ) )
		document.head.appendChild( $style )

		var progress_module = jQuery( ".uagb-block-" + this.props.clientId.substr( 0, 8 ) );

		setTimeout(() => {

			progress_module.find( '.uagb-progress-bar' ).animate({
				width: this.props.attributes.progressValue + '%'
			}, {
				duration: this.props.attributes.animSpeed,
				easing: 'linear'
			});
		}, 500 );
	}

	componentDidUpdate(prevProps, prevState) {
		var element = document.getElementById( "uagb-progress-bar__style-" + this.props.clientId.substr( 0, 8 ) )

		if( null !== element && undefined !== element ) {
			element.innerHTML = styling( this.props )
		}

	}

	render() {
		// Setup the attributes
		const {
			className,
			attributes,
			setAttributes,
			attributes: {
				progressValue,
				thickness,
				animSpeed,
                // Color.
				progressColor,
				backgroundColor,
				backgroundType,
				backgroundOpacity,
				gradientColor1,
				gradientColor2,
				gradientLocation1,
				gradientLocation2,
				gradientType,
				gradientAngle,
                // Offer Action
				titleText,
				textColor,
				textSpacing,
                // Title
				titleTextFontFamily,
				titleTextFontWeight,
				titleTextFontSubset,
				titleTextFontSize,
				titleTextFontSizeType,
				titleTextFontSizeMobile,
				titleTextFontSizeTablet,
				titleTextLineHeight,
				titleTextLineHeightType,
				titleTextLineHeightMobile,
				titleTextLineHeightTablet,
				titleTextLoadGoogleFonts,
            },
        } = this.props
        
        let loadtitleTextGoogleFonts;

        if( titleTextLoadGoogleFonts == true ) {

			const titletextconfig = {
				google: {
					families: [ titleTextFontFamily + ( titleTextFontWeight ? ":" + titleTextFontWeight : "" ) ],
				},
			}

			loadtitleTextGoogleFonts = (
				<WebfontLoader config={ titletextconfig }>
				</WebfontLoader>
			)
		}

        const ProgressBarGeneralSettings = () => {

            return (
                <PanelBody title={ __( "General" ) } initialOpen={ true }>

					<RangeControl
						label={ __( 'Progress Value (%)' ) }
						value={ progressValue }
						onChange={ this.getProgress }
						min={ 0 }
						max={ 100 }
						allowReset
					/>

					<RangeControl
						label={ __( 'Thickness' ) }
						value={ thickness }
						onChange={ ( value ) => setAttributes( { thickness: value } ) }
						min={ 0 }
						max={ 100 }
						allowReset
					/>

					<RangeControl
						label={ __( 'Animation Speed (ms)' ) }
						value={ animSpeed }
						onChange={ ( value ) => setAttributes( { animSpeed: value } ) }
						min={ 0 }
						max={ 6000 }
						step={ 100 }
						allowReset
						initialPosition={1000}
					/>

                </PanelBody>

            )

		}
		
		const ProgressBarStyleSettings = () => {

            return (
                <PanelBody title={ __( "Style" ) } initialOpen={ false }>

					<SelectControl
						label={ __( "Progress Fill Color Type" ) }
						value={ backgroundType }
						onChange={ ( value ) => setAttributes( { backgroundType: value } ) }
						options={ [
							{ value: "color", label: __( "Color" ) },
							{ value: "gradient", label: __( "Gradient" ) },
						] }
					/>

					{ "color" == backgroundType && (
						<Fragment>
							<p className="uagb-setting-label">{ __( "Fill Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: progressColor }} ></span></span></p>
							<ColorPalette
								value={ progressColor }
								onChange={ ( colorValue ) => setAttributes( { progressColor: colorValue } ) }
								allowReset
							/>
						</Fragment>
					) }

					{ "gradient" == backgroundType &&
						( <Fragment>
							<PanelColorSettings
								title={ __( "Color Settings" ) }
								colorSettings={ [
									{
										value: gradientColor2,
										onChange:( value ) => setAttributes( { gradientColor2: value } ),
										label: __( "Color 1" ),
									},
									{
										value: gradientColor1,
										onChange:( value ) => setAttributes( { gradientColor1: value } ),
										label: __( "Color 2" ),
									},
								] }
							>
							</PanelColorSettings>
							<SelectControl
								label={ __( "Type" ) }
								value={ gradientType }
								onChange={ ( value ) => setAttributes( { gradientType: value } ) }
								options={ [
									{ value: "linear", label: __( "Linear" ) },
									{ value: "radial", label: __( "Radial" ) },
								] }
							/>
							<RangeControl
								label={ __( "Location 1" ) }
								value={ gradientLocation1 }
								onChange={ ( value ) => setAttributes( { gradientLocation1: value } ) }
								min={ 0 }
								max={ 100 }
								allowReset
							/>
							<RangeControl
								label={ __( "Location 2" ) }
								value={ gradientLocation2 }
								onChange={ ( value ) => setAttributes( { gradientLocation2: value } ) }
								min={ 0 }
								max={ 100 }
								allowReset
							/>
							<RangeControl
								label={ __( "Angle" ) }
								value={ gradientAngle }
								onChange={ ( value ) => setAttributes( { gradientAngle: value } ) }
								min={ 0 }
								max={ 360 }
								allowReset
							/>
						</Fragment> )
					}

					<RangeControl
						label={ __( "Opacity" ) }
						value={ backgroundOpacity }
						onChange={ ( value ) => setAttributes( { backgroundOpacity: value } ) }
						min={ 0 }
						max={ 100 }
						allowReset
						initialPosition={0}
					/>
					
					<p className="cfp-setting-label">{ __( "Unfill Background Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: backgroundColor }} ></span></span></p>

					<ColorPalette
						value={ backgroundColor }
						onChange={ ( colorValue ) => setAttributes( { backgroundColor: colorValue } ) }
						allowReset
					/>

					<p className="cfp-setting-label">{ __( "Text Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: textColor }} ></span></span></p>

					<ColorPalette
						value={ textColor }
						onChange={ ( colorValue ) => setAttributes( { textColor: colorValue } ) }
						allowReset
					/>

					<RangeControl
						label={ __( 'Text Bottom Spacing' ) }
						value={ textSpacing }
						onChange={ ( value ) => setAttributes( { textSpacing: value } ) }
						min={ 0 }
						max={ 60 }
						allowReset
						initialPosition={10}
					/>

					<TypographyControl
						label={ __( "Typography" ) }
						attributes = { attributes }
						setAttributes = { setAttributes }
						loadGoogleFonts = { { value: titleTextLoadGoogleFonts, label:'titleTextLoadGoogleFonts' } }
						fontFamily = { { value: titleTextFontFamily, label:'titleTextFontFamily' } }
						fontWeight = { { value: titleTextFontWeight, label:'titleTextFontWeight' } }
						fontSubset = { { value: titleTextFontSubset, label:'titleTextFontSubset' } }
						fontSizeType = { { value: titleTextFontSizeType, label:'titleTextFontSizeType'  } }
						fontSize = { { value: titleTextFontSize, label:'titleTextFontSize' } }
						fontSizeMobile = { { value: titleTextFontSizeMobile, label:'titleTextFontSizeMobile' } }
						fontSizeTablet= { { value: titleTextFontSizeTablet, label:'titleTextFontSizeTablet' } }
						lineHeightType = { { value: titleTextLineHeightType, label:'titleTextLineHeightType'  } }
						lineHeight = { { value: titleTextLineHeight, label:'titleTextLineHeight' } }
						lineHeightMobile = { { value: titleTextLineHeightMobile, label:'titleTextLineHeightMobile' } }
						lineHeightTablet= { { value: titleTextLineHeightTablet, label:'titleTextLineHeightTablet' } }
					/>

                </PanelBody>

            )

		}

		return (

			<Fragment>
				<InspectorControls>
					{ ProgressBarGeneralSettings() }
					{ ProgressBarStyleSettings() }
				</InspectorControls>
				<div
					className={ classnames(
						className,
						`uagb-block-${this.props.clientId.substr( 0, 8 )}`,					
					) }
				>

					<div className="uagb-progress-bar__main-wrap" data-progress={ progressValue } data-speed={ animSpeed }>
						<div className="uagb-progress-bar__text-wrap">
							<RichText
								placeholder={ __( "Add text…" ) }
								value={ titleText }
								tagName='span'
								onChange={ value => {
									setAttributes( { titleText: value })
								} }
								className='uagb-progress-bar__text uagb-progress-bar__title-text'
							/>
							<span className='uagb-progress-bar__text uagb-progress-bar__progress-text'>{ progressValue }%</span>
						</div>

						<div className="uagb-progress-bar__wrapper">
							<div className="uagb-progress-bar"></div>
						</div>

					</div>

				</div>
				{ loadtitleTextGoogleFonts }
			</Fragment>
		)

    }

}

export default UAGBProgressBar