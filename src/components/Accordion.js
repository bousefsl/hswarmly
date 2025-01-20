import React from 'react'

const Accordion = ({ items, accID }) => {

    const accordionID = accID;
    const accordionItems = items.map((item, index) => {

        const bsCollapseState = item.accordionCollapseState
        const collapseStatus = bsCollapseState !== 'show' ? 'collapsed' : ''
        const ariaExpandedStatus = bsCollapseState === 'show' ? true : false

        return (
            <div key={`content_item${index}`} className='accordion-item'>
                <p className='accordion-header' id={'heading' + index}>
                    <button className={`accordion-button ${collapseStatus}`} type='button' data-bs-toggle='collapse' data-bs-target={'#collapse' + index} 
                    aria-expanded={Boolean(`${ariaExpandedStatus}`)} aria-controls={'collapse' + index}>
                        {item.accordionTitle}
                    </button>
                </p>
                <div id={'collapse' + index} className={'accordion-collapse collapse ' + item.accordionCollapseState} aria-labelledby={'heading' + index} data-bs-parent={'#' + accordionID}>
                    <div className='accordion-body' dangerouslySetInnerHTML={{__html:item.accordionParagraph}}></div>
                </div>
            </div>
        )
    })
    return <div className="accordion" id={accordionID}>{accordionItems}</div>
}

export default Accordion