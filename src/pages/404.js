import { Link } from 'gatsby'
import React from 'react'
import {logo} from '../assets/styles/NotFound.module.css'
import WarmlyLogo from '../assets/images/warmly-logo.svg'

export default function NotFound() {
  return (
    <div className='not-found'>

      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='mt-5 mb-4'>
                <div className={logo}>
                  <img src={WarmlyLogo} alt="Warmly" />
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-8'>
              <h1 className='h3'>404: Not found</h1>
              <p>Sorry, we couldn't find that page, please check the URL and try again or use the homepage link below.</p>
              <Link to='/'>Go to the homepage</Link>
            </div>
          </div>
        </div>
      </section>
        
    </div>
  )
}
