class VideoIconImage extends React.Component {

	render() {

		const { attributes } = this.props 

		let url_chk = ""
		if( typeof attributes.iconImage !== "undefined" && attributes.iconImage !== null && attributes.iconImage !=="" ){
			url_chk = attributes.iconImage.url
		}
		
		let url = ""
		if( url_chk !== "" ){
			let size = attributes.iconImage.sizes
			let iconImageSize = attributes.iconImageSize

			if ( typeof size !== "undefined" && typeof size[iconImageSize] !== "undefined" ) {
			  url = size[iconImageSize].url 
			}else{
			  url = url_chk 
			}

			return (
				<div className="uagb-video__play-icon" >					
					<img
						className =""
						src = { url }                        
						alt = { attributes.iconImage.alt }                    
					/>
					
				</div>                      
			)
		}else{
			return null
		}       
		
	}
}

export default VideoIconImage
