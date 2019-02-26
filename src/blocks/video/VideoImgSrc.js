function VideoImgSrc( attributes, id ) {

	var video_url = ""
	var url_id = id
	//console.log(id)
	if( "youtube" == attributes.videoType ){

		var start_time = ""
		if( attributes.startTime ){
			start_time = "="+ attributes.startTime 
		}
		var end_time = ""
		if( attributes.endTime ){
			end_time = "="+ attributes.endTime
		}

		var privacy = ""
		if( attributes.privacyMode ){
			privacy = "-nocookie"
		}
		console.log(attributes.relatedVideo)
		video_url = "https://www.youtube"+privacy+".com/embed/"+url_id+"?rel="+Number(attributes.relatedVideo)+"&start"+start_time+"&end"+end_time+"&controls="+Number(attributes.playerControl)+"&showinfo=1&mute="+Number(attributes.videoMute)+"&modestbranding="+Number(attributes.modestBranding)+"&autoplay="+Number(attributes.autoplay)

	}else{
		if (url_id) {
			video_url = "https://player.vimeo.com/video/"+url_id+"?loop="+Number(attributes.loop)+"&title="+Number(attributes.introTitle)+"&portrait="+Number(attributes.introPortrait)+"&byline="+Number(attributes.introByeline)+"&color&autopause=0&autoplay="+Number(attributes.autoplay)+"#t=00h00m"+Number(attributes.startTime)+"s"            
		}
            
	}
		
	return video_url	
}
export default VideoImgSrc