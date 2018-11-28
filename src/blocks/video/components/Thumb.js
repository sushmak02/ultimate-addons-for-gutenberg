class Thumb extends React.Component {

	render() {

		const { attributes, setAttributes } = this.props     
        
        var video_img = ''

        if( setAttributes !== 'not_set' ){
	        if( 'youtube' == attributes.videoType ){

		        var url = attributes.YouTubeUrl
				var p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
		 		var url_id = (url.match(p)) ? RegExp.$1 : false ;
				
				// Get image of respected Youtube video with Selected size.
				video_img = "https://img.youtube.com/vi/"+url_id+"/"+attributes.thumbnailSize+".jpg"
	            
	            setAttributes( { youTubeThumbnail: video_img } )		

			}else{
				var url  = attributes.vimeoUrl
				var match = /vimeo.*\/(\d+)/i.exec(url)
				if (match) {
	                var vimeoVideoID = match[1]    
	                            
	                $.getJSON('http://www.vimeo.com/api/v2/video/' + vimeoVideoID + '.json?callback=?', { format: "json" }, function (data) {
	                    video_img = data[0].thumbnail_large;    
	                    setAttributes( { vimeoThumbnail: video_img } )	
	                    setAttributes( { vimeoTitle: data[0].title } )	
	                    setAttributes( { vimeoUserName: data[0].user_name } )
	                    setAttributes( { vimeoUserImg: data[0].user_portrait_huge } )
	                });
	            }
	            video_img = attributes.vimeoThumbnail
			}
			
			return (
				<img className = "uagb-video__thumb" src = {video_img} />		       			
			)
		}else{
			video_img = attributes.youTubeThumbnail
			if( 'vimeo' == attributes.videoType ){
				video_img = attributes.vimeoThumbnail
			}
			return (
				<img className = "uagb-video__thumb" src = {video_img} />		       			
			)
		}
	}
}

export default Thumb
