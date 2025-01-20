import React from 'react'
//Styles
import {logo} from '../assets/styles/SubHeader.module.css'
//Images
import WarmlyLogo from '../assets/images/warmly-logo-yellow.svg';
import { Link } from 'gatsby';

export default function SubHeader() {
  return (
    <div className='warmly-navy-bg'>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <div className={logo}>
                        <Link to='/'><img src={WarmlyLogo} alt='Warmly Logo' /></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
