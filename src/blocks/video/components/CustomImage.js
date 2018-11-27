class CustomImage extends React.Component {

	render() {

		const { attributes } = this.props 

		let url_chk = ""
		if( typeof attributes.custThumbImage !== "undefined" && attributes.custThumbImage !== null && attributes.custThumbImage !=="" ){
			url_chk = attributes.custThumbImage.url
		}
		
		let url = ""
		if( url_chk !== "" ){
			let size = attributes.custThumbImage.sizes
			let imageSize = attributes.imageSize

			if ( typeof size !== "undefined" && typeof size[imageSize] !== "undefined" ) {
			  url = size[imageSize].url 
			}else{
			  url = url_chk 
			}

			return (				
				<img className = "uagb-video__thumb" src = {url}  alt = { attributes.custThumbImage.alt }/>		                    
			)
		}else{
			return null
		}       
		
	}
}

export default CustomImage
