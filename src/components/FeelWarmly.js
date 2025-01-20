import React from 'react'
import {teaser, teaserImg} from '../assets/styles/Teasers.module.css'
import JSONdata from '../assets/content/feel-warmly.json'

export default function FeelWarmly() {
  return (
    <div className='feel-warmly'>

        <section className="section-spacer" aria-label='Feel Warmly section'>
			<div className="container">
                <div className="row">
					<div className="col-12">
						<div className="section-header text-center">
							<h2 dangerouslySetInnerHTML={{__html: JSONdata.title}}></h2>
						</div>
					</div>
				</div>
                <div className='row'>
                    {JSONdata.content.map((data, index) => {
                        return <div key={`content_item${index}`} className='col-sm-6 col-lg-3'>
                            <div className={teaser}>
                                <div className={teaserImg}>
                                    <img src={`${data.image}`} alt='' />
                                </div>
                                <h3>{ data.subtitle }</h3>
                                <p dangerouslySetInnerHTML={{__html: data.paragraph}}></p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </section>

    </div>
  )
}
