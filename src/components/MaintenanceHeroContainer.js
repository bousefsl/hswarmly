import React from 'react'
//Components
import Container from './global/Container';
//Styles
import {logo} from '../assets/styles/MaintenanceHeroContainer.module.css'
//Images
import WarmlyLogo from '../assets/images/warmly-logo-yellow.svg';

export default function MaintenanceHeroContainer() {
  return (
    <Container bgColor='navy'>
        <div className='row'>
            <div className='col'>

                <div className={logo}>
                    <img src={WarmlyLogo} alt='Warmly Logo' />
                </div>
                <div className='text-start text-sm-center px-4 px-sm-2'>
                    <h1 className='h2 warmly-peach-text'>Our site is currently 
                    <br /><span className='warmly-red-text-90'>undergoing maintenance</span></h1>

                    <p className='h3 warmly-peach-text'>
                        If you wish to get in contact with us please use the details below.
                    </p>
                </div>

            </div>
        </div>
    </Container>
  )
}
