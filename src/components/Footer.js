import React from 'react'
import {logo, footerTop, footerLinks, textLink, footerBaseline} from '../assets/styles/Footer.module.css'
import WarmlyLogo from '../assets/images/warmly-logo.svg'
import JSONData from '../assets/content/footer.json'
import { Link } from 'gatsby';

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
                                    <Link to={data.footerlink} className={textLink}>
                                        {data.footerlinktext}
                                    </Link>
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
