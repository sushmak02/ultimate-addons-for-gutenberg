import classnames from "classnames"

class Icon extends React.Component {

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

export default Icon
