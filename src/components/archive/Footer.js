import React from 'react'
import JSONData from '../assets/content/footer.json'
import {logo, footerTop, footerLinks, textLink, footerBaseline} from '../assets/styles/Footer.module.css'
import WarmlyLogo from '../assets/images/warmly-logo.svg'

export default function Footer() {

const today = new Date();

  return (
    <footer>
        <section className={footerTop} aria-label='Footer'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className={logo}>
                            <img src={WarmlyLogo} alt="Warmly" />
                        </div>
                    </div>
                </div>
            </div>              
        </section>
        <section className={footerLinks}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="text-left">
                                {JSONData.content.map((data, index) => {
                                    return <span key={`content_item${index}`}>
                                        <a href={data.footerlink} className={textLink} target='_blank' rel='noreferrer'>
                                            {data.footerlinktext} <i aria-hidden="true" className="icon-hs-open-in-new ms-1"></i>
                                            <span className="visually-hidden"> opens a new window</span>
                                        </a>
                                    </span>
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className={footerBaseline}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p className="text-center">&copy; HomeServe Membership Ltd {today.getFullYear()}.</p>
                    </div>
                </div>
            </div>
        </section>
    </footer>
  )
}
