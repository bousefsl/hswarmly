import React from 'react'
import {included, incTeaser} from '../assets/styles/WhatsIncluded.module.css'
import JSONData from '../assets/content/whats-included.json'
import IncludedBGImage from '../assets/images/blue-bg-img.jpg'

export default function WhatsIncluded() {
  return (
    <div className={included} style={{backgroundImage: `url(${IncludedBGImage})`}}>

        <section className='section-spacer' aria-label="What's included section">
            <div className="container">
				<div className="row">
					<div className="col-12">
						<div className="section-header">
                            <h2 className='warmly-peach-text text-center'>{JSONData.title}</h2>
                            <p className='h3 warmly-peach-text homeserve-thin text-left text-sm-center px-4 px-sm-0' dangerouslySetInnerHTML={{__html:JSONData.titleparagraph}}></p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-10 offset-md-1'>
                        <div className='row mb-4'>
                            {JSONData.content.map((data, index) => {
                                return <div key={`content_item${index}`} className='col-sm-6'>
                                        <div className={incTeaser}>
                                            <p>{data.paragraph}</p>
                                        </div>
                                    </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
  )
}
