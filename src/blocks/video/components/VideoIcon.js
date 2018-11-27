import classnames from "classnames"

class VideoIcon extends React.Component {

	render() {

		const { attributes } = this.props     
        
		return (
			<div className={ classnames(
				"uagb-video__play-icon",
				attributes.icon
			) }>					
			</div>			       			
		)
	}
}

export default VideoIcon
