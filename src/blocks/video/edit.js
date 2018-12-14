// Import block dependencies and components.
import classnames from "classnames"

// Import icon.
import UAGBIcon from "../../../dist/blocks/uagb-controls/UAGBIcon"
import FontIconPicker from "@fonticonpicker/react-fonticonpicker"

import VideoId from "./VideoId"
import Icon from "./components/Icon"
import IconImage from "./components/IconImage"
import Thumb from "./components/Thumb"
import VimeoMeta from "./components/VimeoMeta"
import CustomImage from "./components/CustomImage"
import VideoImgSrc from "./VideoImgSrc"
import VideoStyle from "./styling"

const { __ } = wp.i18n

const {
	InspectorControls,
	PanelColorSettings,
	MediaUpload,
	URLInput,
	ColorPalette
} = wp.editor

const {
	PanelBody,
	SelectControl,
	RangeControl,
	Button,
	BaseControl,
	ToggleControl
} = wp.components

// Extend component
const { Component, Fragment } = wp.element

class UAGBVideo extends Component {

	constructor() {
		super( ...arguments )
		this.onSelectCustImage = this.onSelectCustImage.bind( this )
		this.onRemoveCustImage = this.onRemoveCustImage.bind( this )
		this.onSelectImage     = this.onSelectImage.bind( this )
		this.onRemoveImage     = this.onRemoveImage.bind( this )
		this.getVideoIcon      = this.getVideoIcon.bind(this)
	}

	/*
	 * Event to set Image as while adding.
	 */
	onSelectCustImage( media ) {
		const { custThumbImage } = this.props.attributes
		const { setAttributes } = this.props

		if ( ! media || ! media.url ) {
			setAttributes( { custThumbImage: null } )
			return
		}

		if ( ! media.type || "image" !== media.type ) {
			setAttributes( { custThumbImage: null } )
			return
		}

		setAttributes( { custThumbImage: media } )
	}

	/*
	 * Event to set Image as null while removing.
	 */
	onRemoveCustImage() {
		const { custThumbImage } = this.props.attributes
		const { setAttributes } = this.props

		setAttributes( { custThumbImage: null } )
	}

	/*
	 * Event to set Image as while adding.
	 */
	onSelectImage( media ) {
		const { iconImage } = this.props.attributes
		const { setAttributes } = this.props

		if ( ! media || ! media.url ) {
			setAttributes( { iconImage: null } )
			return
		}

		if ( ! media.type || "image" !== media.type ) {
			setAttributes( { iconImage: null } )
			return
		}

		setAttributes( { iconImage: media } )
	}

	/*
	 * Event to set Image as null while removing.
	 */
	onRemoveImage() {
		const { iconImage } = this.props.attributes
		const { setAttributes } = this.props

		setAttributes( { iconImage: null } )
	}

	getVideoIcon(value) {
		this.props.setAttributes( { icon: value } )
	}

	render() {
		
		const { isSelected, className, setAttributes, attributes } = this.props

		// Setup the attributes.
		const {
			block_id, 
			videoType,
			startTime,
			endTime ,
			YouTubeUrl,
			YouTubeThumbnail,
			vimeoUrl,
			vimeoThumbnail,
			vimeoTitle,
			vimeoUserImg,
			vimeoUserName,
			aspectRatio,
			autoplay,
			videoSuggest,
			playerControl,
			videoMute,
			modestBranding,
			privacyMode,
			loop,
			introTitle,
			introPortrait,
			introByeline,
			controlsColor,
			thumbnailSize,
			customThumbnail,
			custThumbImage,
			imageSize,
			overlayColor,
			opacity,
			sourceType,
			icon,
			iconSize,
			iconColor,	
			iconHover,
			iconImage,
			iconImageSize,
			iconImageWidth,
			iconimgBorderRadius,
			videoSrc,
  		} = attributes

		// Add CSS.
		var element = document.getElementById( "uagb-video-style-" + this.props.clientId )
		if( null != element && "undefined" != typeof element ) {
			element.innerHTML = VideoStyle( this.props )
		}
		const my_block_id = "uagb-video-"+this.props.clientId

		const video_type_setting = (
			<Fragment>
				<SelectControl
					label={ __( "Video Type" ) }
					value={ videoType }
					onChange={ ( value ) => setAttributes( { videoType: value } ) }
					options={ [
						{ value: "youtube", label: __( "YouTube" ) },
						{ value: "vimeo", label: __( "Vimeo" ) },
					] }
				/>
				{ videoType == 'youtube' && <Fragment>				
					<p className="components-base-control__label">{ __( "URL" ) }</p>
					<URLInput
						value={ YouTubeUrl }
						onChange= { ( value ) => setAttributes( { YouTubeUrl: value } ) }
					/>	
					</Fragment>				
				}
				{ videoType == 'vimeo' && <Fragment>				
					<p className="components-base-control__label">{ __( "URL" ) }</p>
					<URLInput
						value={ vimeoUrl }
						onChange= { ( value ) => setAttributes( { vimeoUrl: value } ) } 
					/>	
					</Fragment>					
				}
				<RangeControl
					label = { __( "Start time" ) }
					value = { startTime }
					onChange = { ( value ) => setAttributes( { startTime: value } ) }
					min = { 0 }
					max = { 300 }
					beforeIcon = ""
					allowReset
				/>
				{ videoType == 'youtube' && 
					<RangeControl
						label = { __( "End time" ) }
						value = { endTime }
						onChange = { ( value ) => setAttributes( { endTime: value } ) }
						min = { 0 }
						max = { 300 }
						beforeIcon = ""
						allowReset
					/>									
				}
				<SelectControl
					label={ __( "Aspect Ratio" ) }
					value={ aspectRatio }
					onChange={ ( value ) => setAttributes( { aspectRatio: value } ) }
					options={ [
						{ value: "16_9", label: __( "16.9" ) },
						{ value: "4_3", label: __( "4.3" ) },
						{ value: "3_2", label: __( "3.2" ) },						
					] }
				/>
				
			</Fragment>
			)

		const youtube_setting = (
			<Fragment>
				<PanelBody
						title={ __( "Video Options" ) }
						initialOpen={ true }
					>
				<ToggleControl
					label={ __( "Autoplay" ) }
					checked={ autoplay }
					onChange={ ( value ) => setAttributes( { autoplay: ! autoplay } ) }
				/>
				<ToggleControl
					label={ __( "Suggested Videos" ) }
					checked={ videoSuggest }
					onChange={ ( value ) => setAttributes( { videoSuggest: ! videoSuggest } ) }
				/>
				<ToggleControl
					label={ __( "Player Control" ) }
					checked={ playerControl }
					onChange={ ( value ) => setAttributes( { playerControl: ! playerControl } ) }
				/>				
				<ToggleControl
					label={ __( "Mute" ) }
					checked={ videoMute }
					onChange={ ( value ) => setAttributes( { videoMute: ! videoMute } ) }
				/>
				{ playerControl && 
					<ToggleControl
						label={ __( "Modest Branding" ) }
						checked={ modestBranding }
						onChange={ ( value ) => setAttributes( { modestBranding: ! modestBranding } ) }
					/>
				}
				<ToggleControl
					label={ __( "Privacy Mode" ) }
					checked={ privacyMode }
					onChange={ ( value ) => setAttributes( { privacyMode: ! privacyMode } ) }
					help={ __( "Note: When you turn on privacy mode, YouTube won't store information about visitors on your website unless they play the video." ) }
				/>
				</PanelBody>
			</Fragment>
		)

		const vimeo_setting = (
			<Fragment>
				<PanelBody
						title={ __( "Video Options" ) }
						initialOpen={ true }
					>
				<ToggleControl
					label={ __( "Autoplay" ) }
					checked={ autoplay }
					onChange={ ( value ) => setAttributes( { autoplay: ! autoplay } ) }
				/>
				<ToggleControl
					label={ __( "Loop" ) }
					checked={ loop }
					onChange={ ( value ) => setAttributes( { loop: ! loop } ) }
				/>
				<ToggleControl
					label={ __( "Intro Title" ) }
					checked={ introTitle }
					onChange={ ( value ) => setAttributes( { introTitle: ! introTitle } ) }
				/>
				<ToggleControl
					label={ __( "Intro Portrait" ) }
					checked={ introPortrait }
					onChange={ ( value ) => setAttributes( { introPortrait: ! introPortrait } ) }
				/>
				<ToggleControl
					label={ __( "Intro Byline" ) }
					checked={ introByeline }
					onChange={ ( value ) => setAttributes( { introByeline: ! introByeline } ) }
				/>
				<Fragment>
				    <p className="uagb-setting-label">{ __( "Controls Color" ) }
				    <span className="components-base-control__label">
				    <span className="component-color-indicator" style={{ backgroundColor: controlsColor }} ></span></span></p>
				    <ColorPalette
				        value={ controlsColor }
				        onChange={ ( colorValue ) => setAttributes( { controlsColor: colorValue } ) }
				        allowReset
				    />
				</Fragment>
				
				</PanelBody>
			</Fragment>
		)

		// Image sizes.
		const imageSizeOptions = [
			{ value: "thumbnail", label: __( "Thumbnail" ) },
			{ value: "medium", label: __( "Medium" ) },
			{ value: "full", label: __( "Large" ) }
		]

		let image_name = __( "Select Image" )
		if(custThumbImage){
			if( custThumbImage.url == null || custThumbImage.url == "" ){
				image_name = __( "Select Image" )
			}else{
				image_name =  __( "Replace Image" )
			}
		}

		let icon_image_name =  __( "Select Image" )
		if(iconImage){
			if( iconImage.url == null || iconImage.url == "" ){
				icon_image_name =  __( "Select Image" )
			}else{
				icon_image_name =  __( "Replace Image" )
			}
		}

		const thumbnail_setting = (
			<Fragment>
				<PanelBody
						title={ __( "Thumbnail & Overlay" ) }
						initialOpen={ false }
					>			
				
				<ToggleControl
					label={ __( "Custom Thumbnail" ) }
					checked={ customThumbnail }
					onChange={ ( value ) => setAttributes( { customThumbnail: ! customThumbnail } ) }
				/>	

				{ (!customThumbnail && videoType == 'youtube') && <SelectControl
						label={ __( "Thumbnail Size" ) }
						value={ thumbnailSize }
						onChange={ ( value ) => setAttributes( { thumbnailSize: value } ) }
						options={ [
							{ value: "maxresdefault", label: __( "Maximum Resolution" ) },
							{ value: "hqdefault", label: __( "High Quality" ) },
							{ value: "mqdefault", label: __( "Medium Quality" ) },
							{ value: "sddefault", label: __( "Standard Quality" ) },						
						] }
					/>
				}	

				{ customThumbnail && <BaseControl
					className="editor-bg-image-control"
					label={ __( "Image" ) }
					>
					<MediaUpload
						title={ __( "Select Image" ) }
						onSelect={ this.onSelectCustImage }
						allowedTypes= { [ "image" ] }
						value={ custThumbImage }
						render={ ( { open } ) => (
							<Button isDefault onClick={ open }>
								{ image_name }
							</Button>
						) }
					/>
					{ ( custThumbImage && custThumbImage.url !=="null" && custThumbImage.url !== "" ) &&
						<Button className="uagb-rm-btn" onClick={ this.onRemoveCustImage } isLink isDestructive>
							{ __( "Remove Image" ) }
						</Button>
					}	
				</BaseControl>	
				}

				{ ( customThumbnail && custThumbImage && custThumbImage.url !=="null" && custThumbImage.url !== "" ) &&
					<Fragment>
						<SelectControl
							label={ __( "Image Size" ) }
							options={ imageSizeOptions }
							value={ imageSize }
							onChange={ ( value ) => setAttributes( { imageSize: value } ) }
						/>
					</Fragment>	
				}
				<Fragment>
				    <p className="uagb-setting-label">{ __( "Overlay Color" ) }
				    <span className="components-base-control__label">
				    <span className="component-color-indicator" style={{ backgroundColor: overlayColor }} ></span></span></p>
				    <ColorPalette
				        value={ overlayColor }
				        onChange={ ( colorValue ) => setAttributes( { overlayColor: colorValue } ) }
				        allowReset
				    />
				</Fragment>
				<RangeControl
					label={ __( "Opacity" ) }
					value={ opacity }
					onChange={ ( value ) => setAttributes( { opacity: value } ) }
					min={ 0 }
					max={ 100 }
					beforeIcon=""
					allowReset
				/>
				</PanelBody>
			</Fragment>
		)


		// Icon properties.
		const icon_props = {
		  icons: UAGBIcon,
		  renderUsing: "class",
		  theme: "default",
		  value: icon,
		  onChange: this.getVideoIcon,
		  isMulti: false,
		}
		const iconControls = (
			<Fragment>
				<FontIconPicker {...icon_props} />
				<RangeControl
					label = { __( "Icon Size" ) }
					value = { iconSize }
					onChange = { ( value ) => setAttributes( { iconSize: value } ) }
					min = { 10 }
					max = { 200 }
					beforeIcon = ""
					allowReset
				/>
				<PanelColorSettings
					title={ __( "Color Settings" ) }
					initialOpen={ true }
					colorSettings={ [
						{
							value: iconColor,
							onChange: ( colorValue ) => setAttributes( { iconColor: colorValue } ),
							label: __( "Icon Color" ),
						},
						{
							value: iconHover,
							onChange: ( colorValue ) => setAttributes( { iconHover: colorValue } ),
							label: __( "Icon Hover Color" ),
						},
					] }
				>
				</PanelColorSettings>
			</Fragment>
		)

		// Image controls.
		const imageControls = (
			<Fragment>
				<BaseControl
					className="editor-bg-image-control"
					label={ __( "Image" ) }
				>
					<MediaUpload
						title={ __( "Select Image" ) }
						onSelect={ this.onSelectImage }
						allowedTypes= { [ "image" ] }
						value={ iconImage }
						render={ ( { open } ) => (
							<Button isDefault onClick={ open }>
								{ icon_image_name }
							</Button>
						) }
					/>
					{ ( iconImage && iconImage.url !=="null" && iconImage.url !== "" ) &&
						<Button className="uagb-rm-btn" onClick={ this.onRemoveImage } isLink isDestructive>
							{ __( "Remove Image" ) }
						</Button>
					}
				</BaseControl>
				{ ( iconImage && iconImage.url !=="null" && iconImage.url !== "" ) &&
					<Fragment>
						<SelectControl
							label={ __( "Image Size" ) }
							options={ imageSizeOptions }
							value={ iconImageSize }
							onChange={ ( value ) => setAttributes( { iconImageSize: value } ) }
						/>
						<RangeControl
							label={ __( "Width" ) }
							value={ iconImageWidth }
							onChange={ ( value ) => setAttributes( { iconImageWidth: value } ) }
							min={ 0 }
							max={ 500 }
							beforeIcon=""
							allowReset
						/>
						<RangeControl
							label = { __( "Rounded Corners" ) }
							value = { iconimgBorderRadius }
							onChange = { ( value ) => setAttributes( { iconimgBorderRadius: value } ) }
							min = { 0 }
							max = { 100 }
							beforeIcon = ""
							allowReset
						/>
					</Fragment>
				}
			</Fragment>
		)

		const play_buttons = (
			<Fragment>
				<PanelBody
						title={ __( "Play Buttons" ) }
						initialOpen={ false }
					>	
					<SelectControl
					label={ __( "Select Source" ) }
					value={ sourceType }
					onChange={ ( value ) => setAttributes( { sourceType: value } ) }
					options={ [
						{ value: "icon", label: __( "Icon" ) },
						{ value: "image", label: __( "Image" ) },
					] }
				/>
				{ ( sourceType && sourceType == "icon" ) && iconControls }

				{ ( sourceType && sourceType == "image" ) && imageControls }
				</PanelBody>
			</Fragment>
		)

		const inspect_control = (
			<Fragment>
				<InspectorControls>
					<PanelBody
						title={ __( "Video" ) }
					>
					{ video_type_setting }
					{ videoType == 'youtube' &&  youtube_setting }
					{ videoType == 'vimeo' && vimeo_setting }
					</PanelBody>
					{ thumbnail_setting }
					{ play_buttons }
				</InspectorControls>
			</Fragment>
		)

		var thumbanil_output = ''
		var play_icon_output = ''
		var v_id = VideoId(attributes)

		if( !autoplay ){

			if( customThumbnail ){
				thumbanil_output = <CustomImage attributes={attributes}/>
			}else{
				thumbanil_output = <Thumb attributes={attributes} setAttributes = {setAttributes} id ={ v_id }/>
			}
			
			play_icon_output = ( sourceType == 'icon' ) ? <Icon attributes={attributes}/> : <IconImage attributes={attributes}/>
		}

		var img_url = VideoImgSrc( attributes, v_id )

		setAttributes( { videoSrc: img_url } )

		var vimeo_output = <VimeoMeta attributes={attributes}/>

		var video_desc = ""
		if( !v_id ){
			video_desc =<div className = "uagb-no-content">
						{  __("We are sorry, We could not embed this video") }
						</div>
		}else{
			video_desc =  <Fragment>
						{ vimeo_output }	
						<div className = "uagb-video__play" data-src = { img_url } >
					    	{ thumbanil_output }	
					    	{ play_icon_output }		      
					    </div>
				    </Fragment>
		}

		return (
			<Fragment>
			{inspect_control}
			<div className={ classnames(
					className,
					"uagb-video__outer-wrap"
				) }
				id = { my_block_id }
				>	
				<div className = { classnames(					
					'uagb-video__content-wrap',
					`uagb-video__aspect-ratio-${ aspectRatio }`,
					`uagb-video__${ sourceType }`,
					{ 'uagb-video__autoplay' : autoplay },
				) }	>	
					{ video_desc }	
				</div>
			</div>
			</Fragment>
		)
	}

	componentDidMount() {
		var id = this.props.clientId
		// Assigning block_id in the attribute.
		this.props.setAttributes( { block_id: id } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-video-style-" + id )
		document.head.appendChild( $style )
	}

	componentDidUpdate(){
		var id = this.props.clientId
		window.addEventListener("load", this.videoIframeContent(id))		
	}

	videoIframeContent( id ){
		const {
			autoplay,	
			videoSrc
		} = this.props.attributes

		var element = $("#uagb-video-"+id)

		var src = videoSrc.toString()
		src = src.replace("autoplay=0", "autoplay=1");
		var event_this = this;

		if( autoplay ==  false ){
			element.find(".uagb-video__iframe").remove()
			element.find(".uagb-video__thumb").show()
			element.find(".uagb-video__play-icon").show()
			element.find(".uagb-video__vimeo-wrap").show()			

			element.click(function() {
		 		var el = $("#uagb-video-"+id)				
				el.find(".uagb-video__thumb").hide()
				el.find(".uagb-video__play-icon").hide()
				event_this.uagbPlayVideo( element, src);
			});
		}else{
			event_this.uagbPlayVideo( element, src)
		}
	}

	uagbPlayVideo(selector, src){
		selector.find(".uagb-video__vimeo-wrap").hide()
		var frame_length = selector.find(".uagb-video__iframe").length

		if( frame_length == 0 ){
			if( src == ''){

			}else{				
				var iframe_code = '<iframe class ="uagb-video__iframe" src="'+src+'" frameborder="0" allowfullscreen="1" allow="autoplay;encrypted-media;"></iframe>';
			}
			selector.find(".uagb-video__play").append(iframe_code);
		}else{
			selector.find(".uagb-video__iframe").attr("src", src)
		}	
	}	
}

export default UAGBVideo
