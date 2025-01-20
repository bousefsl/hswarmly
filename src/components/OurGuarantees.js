import React from 'react'
import {incTeaser} from '../assets/styles/OurGuarantees.module.css'
import JSONData from '../assets/content/our-guarantees.json'

export default function OurGuarantees() {
  return (
    <div className='our-gurantees'>
        
        <section className='section-spacer' aria-label='Our guarantees section'>
            <div className="container">
				<div className="row">
					<div className="col-12">
						<div className="text-center">
                            <h2 dangerouslySetInnerHTML={{__html:JSONData.title}} className='mb-5'></h2>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    {JSONData.content.map((data, index) => {
                        return <div key={`content_item${index}`} className='col-sm-6'>
                                <div className={incTeaser}>
                                    <h3>{data.subtitle}</h3>
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
