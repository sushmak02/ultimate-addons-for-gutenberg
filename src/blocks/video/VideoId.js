function VideoId( attributes ) {

	    if( 'youtube' == attributes.videoType ){

	        var url = attributes.YouTubeUrl
			var p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
	 		var url_id = (url.match(p)) ? RegExp.$1 : false ;
		}else{
			var url  = attributes.vimeoUrl
			var match = /vimeo.*\/(\d+)/i.exec(url)
			if (match) {
                var url_id = match[1]   
            }            
		}		
		return url_id;	
	}
export default VideoId