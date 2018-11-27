function VideoImgSrc( attributes ) {

        var video_url = ''

        if( 'youtube' == attributes.videoType ){

	        var url = attributes.youTubeUrl
			var p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
	 		var url_id = (url.match(p)) ? RegExp.$1 : false ;
						
			var start_time = ""
			if( attributes.startTime ){
				start_time = "="+ attributes.startTime 
			}
			var end_time = ""
			if( attributes.endTime ){
				end_time = "="+ attributes.endTime
			}

			video_url = "https://www.youtube.com/embed/"+url_id+"?rel="+Number(attributes.videoSuggest)+"&start"+start_time+"&end"+end_time+"&controls="+Number(attributes.playerControl)+"&showinfo="+Number(attributes.playerTitleAction)+"&mute="+Number(attributes.videoMute)+"&modestbranding="+Number(attributes.modestBranding)+"&autoplay="+Number(attributes.autoplay)

		}else{
			var url  = attributes.vimeoUrl
			var match = /vimeo.*\/(\d+)/i.exec(url)
			if (match) {
                var vimeoVideoID = match[1]   
                video_url = "https://player.vimeo.com/video/"+vimeoVideoID+"?loop="+Number(attributes.loop)+"&title="+Number(attributes.introTitle)+"&portrait="+Number(attributes.introPortrait)+"&byline="+Number(attributes.introByeline)+"&color&autopause=0&autoplay="+Number(attributes.autoplay)+"#t=00h00m"+Number(attributes.startTime)+"s"            
            }
            
		}
		
		return video_url;	
	}
export default VideoImgSrc