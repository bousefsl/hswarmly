import React from 'react'
import {hero, logo, boilerWrapper, boilerBrands, boilerImg} from '../assets/styles/HeroContainer.module.css'
import HeroImage from '../assets/images/warmly-header-background.jpg'
import HeroRepeatImage from '../assets/images/warmly-header-background-repeat.jpg'
import WarmlyLogo from '../assets/images/warmly-logo.svg'
import BoilerBrand from '../assets/images/worcester-bosch-logo.svg'
import BoilerImage from '../assets/images/worcester-bosch-boilers.png'

export default function HeroContainer() {
  return (
    
    <div className={hero} style={{backgroundImage: `url(${HeroImage}), url(${HeroRepeatImage})`}}>

      <section className="section-spacer" aria-label='Hero section'>

        <div className="container">
          <div className="row d-flex align-items-lg-stretch">
            <div className="col-sm-10 offset-sm-1 col-md-9 offset-md-0 col-lg-6">
              <div className="header-content">
                <div className={logo}>
                  <img src={WarmlyLogo} alt="Warmly" />
                </div>
                <h1>Get the <br /><span className="warmly-dark-red-text">Warmly feeling</span></h1>
                <p className="h3 mb-3">
                  No nonsense boiler plans, managed by our expert local engineers, at a permanently fixed price.
                </p>
                <ul>
                  <li>No upfront costs</li>
                  <li>No price increases</li>
                  <li>Just one fixed monthly fee that covers all the costs</li>
                </ul>
                <div className="mb-5">
                  <a href='https://www.youtube.com/watch?v=ERkgVyI65bk' target='_blank' className='btn btn-primary' rel='noreferrer'>
                    <span className="icon-hs-play-video mr5-xs" /> Watch video <i aria-hidden="true" className="icon-hs-open-in-new ms-1"></i>
                    <span className="visually-hidden"> opens a new window</span>
                  </a>
                </div>
                <div id={boilerBrands}>
                  <span>
                    <img src={BoilerBrand} alt="Worcester Bosch" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 position-relative">
              <div id={boilerWrapper} className="d-none d-lg-block">
                <div id={boilerImg}>
                  <img src={BoilerImage} alt="Worcester Bosch Boilers" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
}
