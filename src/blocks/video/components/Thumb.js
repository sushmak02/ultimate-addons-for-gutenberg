class Thumb extends React.Component {

	render() {

		const { attributes, setAttributes, id } = this.props     
        var video_img = ''
        if( setAttributes !== 'not_set' && id !=='not_set' ){
	        if( 'youtube' == attributes.videoType ){		      			
				// Get image of respected Youtube video with Selected size.
				video_img = "https://img.youtube.com/vi/"+id+"/"+attributes.thumbnailSize+".jpg"
	            
	            setAttributes( { YouTubeThumbnail: video_img } )		

			}else{

				if (id) {
	               	
	                $.getJSON('http://www.vimeo.com/api/v2/video/' + id + '.json?callback=?', { format: "json" }, function (data) {
	                    video_img = data[0].thumbnail_large; 
	                    setAttributes( { vimeoThumbnail: video_img } )	
	                    setAttributes( { vimeoTitle: data[0].title } )	
	                    setAttributes( { vimeoUserName: data[0].user_name } )
	                    setAttributes( { vimeoUserImg: data[0].user_portrait_huge } )
	                })	
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
