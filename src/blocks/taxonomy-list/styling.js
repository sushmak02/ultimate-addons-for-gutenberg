/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"
import generateCSSUnit from "../../../dist/blocks/uagb-controls/generateCSSUnit"

function styling( props ) {

    const {
        block_id,
        postType,
        postToShow,
        taxonomyType,
        categories,
        order,
        orderBy,
        layout,
        columns,
        tcolumns,
        mcolumns,
        bgColor,
        titleColor,
        countColor,
        rowGap,
        columnGap,
        contentPadding,
        contentPaddingMobile,
        titleBottomSpace,
        titleAlignment,
        countAlignment,
        listStyle,
        seperatorStyle,
        seperatorWidth,
        seperatorThickness,
        seperatorColor,
        listTextColor,
        hoverlistTextColor,
        listLeftMargin,
        listBottomMargin,
        listStyleColor,
		hoverlistStyleColor
    } = props.attributes

    
    var selectors = {}
    var tablet_selectors = {}
    var mobile_selectors = {}
    
    
    
    selectors = {
        //grid layout styling
        ' .uagb-taxonomy-wrap.uagb-layout-grid' : {
            "display" : "grid",
            "grid-template-columns" : 'repeat(' + columns + ', 1fr)',
            "grid-column-gap": generateCSSUnit( columnGap, 'px' ),
            "grid-row-gap": generateCSSUnit( rowGap, 'px' ),            
        },        
        ' .uagb-layout-grid .uagb-taxomony-box' : {
            "border" : "1px solid #c6c6c6",
            "padding" :generateCSSUnit( contentPadding, 'px' ),
            "background-color" : bgColor,
                                 
        },        
        ' .uagb-layout-grid .uagb-tax-title' : {
            "color" : titleColor,
            "text-align" : titleAlignment,
            "margin-top" : "0",
            "margin-bottom" : generateCSSUnit( titleBottomSpace, 'px' ),                     
        },
        ' .uagb-layout-grid .uagb-tax-count' : {
            "color" : countColor,
            "text-align" : countAlignment,                     
        },
        

        //List layout styling
        ' .uagb-layout-list .uagb-tax-list' : {
            "list-style" : listStyle,
            "color" : listStyleColor ,
                                         
        },
        ' .uagb-layout-list .uagb-tax-list:hover' : {            
            "color" : hoverlistStyleColor                               
        },
        ' .uagb-layout-list .uagb-tax-list a.uagb-tax-link' : {
            "color" : listTextColor,                                        
        },
        ' .uagb-layout-list .uagb-tax-list a.uagb-tax-link:hover' : {
            "color" : hoverlistTextColor,                               
        },
        ' .uagb-layout-list .uagb-tax-list .uagb-tax-link-wrap' : {
            "margin-bottom" :  generateCSSUnit( listBottomMargin, 'px' )                                        
        },
        

        
        
    }

    if ( seperatorStyle !== "none" ) {
		selectors[" .uagb-layout-list .uagb-tax-separator"] = {
			"border-top-color": seperatorColor,
			"border-top-style": seperatorStyle,
			"border-top-width": generateCSSUnit( seperatorThickness, "px" ),
			"width": generateCSSUnit( seperatorWidth, "%" ),
		}
	}
    

    mobile_selectors = {
        
    }

    tablet_selectors = {
       
    }
    var styling_css = '';
    var id = `.uagb-block-${ block_id }`

    styling_css = generateCSS( selectors, id )
    
    styling_css += generateCSS( tablet_selectors, id, true, "tablet" )

	styling_css += generateCSS( mobile_selectors, id, true, "mobile" )

	return styling_css
}

export default styling