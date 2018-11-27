/**
 * Set inline CSS class.
 * @param {object} props - The block object.
 * @return {array} The inline CSS class.
 */

function VideoClasses( attributes ) {

	var sourceClass = "uagb-video__aspect-ratio-"+attributes.aspectRatio+" "

	if( attributes.autoplay ){
		sourceClass += "uagb-video__autoplay"+" "
	}

	sourceClass += "uagb-video__"+attributes.sourceType+" "

	return [
		sourceClass        
	]
}

export default VideoClasses
