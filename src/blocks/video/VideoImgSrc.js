function VideoImgSrc( attributes ) {

        var video_url = ''

        if( 'youtube' == attributes.videoType ){
	        
	 		var url_id = attributes.YouTubeId
						
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
			var vimeoVideoID  = attributes.vimeoId			
			if (vimeoVideoID) {
                video_url = "https://player.vimeo.com/video/"+vimeoVideoID+"?loop="+Number(attributes.loop)+"&title="+Number(attributes.introTitle)+"&portrait="+Number(attributes.introPortrait)+"&byline="+Number(attributes.introByeline)+"&color&autopause=0&autoplay="+Number(attributes.autoplay)+"#t=00h00m"+Number(attributes.startTime)+"s"            
            }            
		}
		
		return video_url;	
	}
export default VideoImgSrc