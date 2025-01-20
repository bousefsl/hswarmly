import React from 'react'
import {hereToHelp} from '../assets/styles/Contact.module.css'
import JSONData from '../assets/content/contact.json'
import contactBGImg from '../assets/images/contact-bg-img.jpg'

export default function Contact() {
  return (
    <div className={hereToHelp} style={{backgroundImage: `url(${contactBGImg})`}}>

        <section aria-label='Contact section'>
            <div className="container">
				<div className="row">
					<div className="col-sm-8 offset-sm-2 col-md-7 offset-md-0 col-lg-5 offset-lg-1">
                        <div className="section-header text-left">
                            <h2 dangerouslySetInnerHTML={{__html:JSONData.title}}></h2>
                            <p className='mb-4' dangerouslySetInnerHTML={{__html:JSONData.subtitle}}></p>
                            <p className='mb-5' dangerouslySetInnerHTML={{__html:JSONData.paragraph}}></p>
                            <p className='mb-4'><a href={JSONData['button-link']} className='btn btn-primary' title='Click to dial - mobile only'>
                                <span className="icon-hs-contact-us mr5-xs"></span> {JSONData['button-text']}
                            </a></p>
                            <p className='mb-5'><small>{JSONData['paragraph-smallprint']}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
  )
}
