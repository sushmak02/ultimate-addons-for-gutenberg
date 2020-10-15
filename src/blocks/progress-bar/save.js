/**
 * BLOCK: Test Block - Save Block
 */

import classnames from "classnames"

const {
	RichText
} = wp.blockEditor

export default function save( props ) {
	
	const {
		block_id,
		titleText,
		progressValue,
		animSpeed
	} = props.attributes

	return (
		<div
			className={ classnames(
				props.className,
				`uagb-block-${block_id}`,					
			) }
		>

			<div className="uagb-progress-bar__main-wrap" data-progress={ progressValue } data-speed={ animSpeed }>
				<div className="uagb-progress-bar__text-wrap">
					<RichText.Content
						value={ titleText }
						tagName='span'
						className='uagb-progress-bar__text uagb-progress-bar__title-text'
					/>
					<span className='uagb-progress-bar__text uagb-progress-bar__progress-text'>{ progressValue }%</span>
				</div>

				<div className="uagb-progress-bar__wrapper">
					<div className="uagb-progress-bar"></div>
				</div>
			</div>

		</div>
	)
}
