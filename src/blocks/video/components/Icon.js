import renderSVG from "../../../../dist/blocks/uagb-controls/renderIcon"

class Icon extends React.Component {

	render() {

		const { attributes } = this.props     
        
		return (
			<div className={ "uagb-video__play-icon"}>	
			{ renderSVG(attributes.icon) }				
			</div>			       			
		)
	}
}

export default Icon
