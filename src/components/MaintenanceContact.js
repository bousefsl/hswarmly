import React from 'react'
//Components
import Container from './global/Container'
//Styles
import { warmlyContactCard, warmlyCardIcon } from '../assets/styles/MaintenanceContact.module.css';
//Images
import CallUsIcon from '../assets/images/call-us-icon.svg';
import EmailUsIcon from '../assets/images/email-us-icon.svg';
import VisitWebsiteIcon from '../assets/images/visit-website-icon.svg';

export default function MaintenanceContact() {
  return (
    <Container bgColor='body'>
        <div className='row'>
            <div className='col'>
                <div className='text-start text-sm-center mb-5 px-4 px-sm-2'>
                    <p className='h2 warmly-red-text'>
                        Warmly Boiler Service &amp; Repair 
                        <span className='warmly-navy-text'> Related Enquiries</span>
                    </p>
                    <p className='h3 homeserve-thin dark-grey-text'>
                        Our local Warmly installer is currently John Wilkinson Heating Services Lts who can be reached on:
                    </p>
                </div>

                <div className='d-flex flex-column flex-md-row justify-content-center justify-content-md-evenly mb-5'>

                    <div className={warmlyContactCard}>
                        <div className={warmlyCardIcon}>
                            <img src={CallUsIcon} alt='Call us Icon' />
                        </div>
                        <div className='h4 homeserve-extrathick'>
                            <p className='warmly-red-text mb-1'>Phone call:</p>
                            <a href='tel:08006128920' title='Click to dial - mobile only'>0800 612 8920</a>
                        </div>
                    </div>

                    <div className={warmlyContactCard}>
                        <div className={warmlyCardIcon}>
                            <img src={EmailUsIcon} alt='Email us Icon' />
                        </div>
                        <div className='h4 homeserve-extrathick'>
                            <p className='warmly-red-text mb-1'>via Email:</p>
                            <a href='mailto:John@jwheatingservices.co.uk' className='hyphenate'>John@jwheatingservices.co.uk</a>
                        </div>
                    </div>
                    
                    <div className={warmlyContactCard}>
                        <div className={warmlyCardIcon}>
                            <img src={VisitWebsiteIcon} alt='Visit website Icon' />
                        </div>
                        <div className='h4 homeserve-extrathick'>
                            <p className='warmly-red-text mb-1'>visit Website:</p>
                            <a href='https://www.jwheatingservices.co.uk' target='_blank' rel='noreferrer' className='hyphenate'>
                                jwheatingservices.co.uk 
                                <i aria-hidden="true" className="icon-hs-open-in-new ms-1 small"></i>
                                <span className="visually-hidden"> opens a new window</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='px-4 px-sm-2'>
                    <p className='h2 warmly-red-text text-start text-sm-center'>
                        Warmly Plan 
                        <span className='warmly-navy-text'> Related Support</span>
                    </p>
                    <p className='h3 homeserve-thin dark-grey-text'>
                        If you have a query related to your Warmly plan, the best way to contact us is via email at&nbsp;
                        <a href='mailto:support@warmly.co.uk'>support@warmly.co.uk</a>. 
                        You can also write to us at "Fairscore Ltd", 5 Merchant Square, London, UK, W2 1AY.
                    </p>
                </div>
            </div>
        </div>
    </Container>
  )
}
