import React from 'react'
import {teaserWrapper, teaser, teaserIcon, iconRight} from '../assets/styles/Teasers.module.css'
import JSONdata from '../assets/content/how-it-works.json'

export default function HowItWorks() {
  return (
    <div className='how-it-works'>

        <section className="section-spacer" aria-label='How it works section'>
			<div className="container">
                <div className="row">
					<div className="col-12">
						<div className="section-header px-4 px-sm-0">
                            <h2 dangerouslySetInnerHTML={{__html:JSONdata.title}}></h2>
                            <p className='h3 dark-grey-text homeserve-thin'>{JSONdata.titleparagraph}</p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    {JSONdata.content.map((data, index) => {
                        return <div key={`content_item${index}`} className={'col-sm-6 col-lg-3 mt-offset ' + teaserWrapper}>
                                <div className={teaser} >
                                    <div className={teaserIcon}><span className={data.icon + ' warmly-red-text icon-hs-2x'}></span></div>
                                    <h3 dangerouslySetInnerHTML={{__html:data.subtitle}}></h3>
                                    <span className={iconRight + ' icon-hs-arrow-forward icon-hs-1-5x warmly-red-text'}></span>
                                    <p>{data.paragraph}</p>
                                </div>
                            </div>
                    })}
                </div>
            </div>
        </section>

    </div>
  )
}
