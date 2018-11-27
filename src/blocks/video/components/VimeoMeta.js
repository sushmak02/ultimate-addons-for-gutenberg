const { Fragment } = wp.element

class VimeoMeta extends React.Component {

	render() {

		const { attributes } = this.props    
        
        if( 'vimeo' == attributes.videoType ){
		    return ( 
				<div className = "uagb-video__vimeo-wrap">
					{ attributes.introPortrait && attributes.vimeoUserImg && 
						<div className = "uagb-vimeo-portrait">
							<a href="#" rel = "noopener noreferrer">
							<img src={ attributes.vimeoUserImg }/></a>
						</div>
					}
					<div className = "uagb-video__vimeo-headers">
						{ attributes.introTitle && attributes.vimeoTitle && 
							<div className = "uagb-vimeo-title">
								<a href="#" rel = "noopener noreferrer">{ attributes.vimeoTitle }</a>
							</div>
						}
						{ attributes.introByeline && attributes.vimeoUserName && 
								<div className = "uagb-video__vimeo-byline">
									from  <a href="#" rel = "noopener noreferrer">{attributes.vimeoUserName}</a>
								</div>
						}
					</div>
				</div>	
		    )
		}else{
			return ( 
		    	null
		    )
		}
	}
}
export default VimeoMeta
