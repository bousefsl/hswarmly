import React from 'react'
//Components

//Styles
import { incTeaser } from '../assets/styles/MaintenanceComplaint.module.css';
import Container from './global/Container';

export default function MaintenanceComplaint() {
  return (
    <Container bgColor='blue'>
        <div className='row'>
            <div className='col px-4 px-sm-2'>
                <div className='mb-5'>
                    <p className='h2 warmly-cream-text text-center'>
                        What can I do if I have a complaint?
                    </p>
                    <p className='h3 warmly-cream-text homeserve-thick'>
                        If you have a complaint about the service you've received, please contact us through email at&nbsp;
                        <a href='mailto:complaints@warmly.co.uk'className='text-white'>complaints@warmly.co.uk</a> or write to us at 
                        "Fairscore Ltd", 5 Merchant Square, London, UK, W2 1AY;
                    </p>
                    <p className='h3 warmly-cream-text homeserve-thick'>
                        If we're unable to resolve your complaint, you may have a right to refer your complaint to the Financial Ombudsman Service by:
                    </p>
                </div>

                <div className='row'>
                    <div className='col-md-10 offset-md-1'>
                        <div className='row mb-4'>
                            <div className='col-sm-6'>
                                <div className={incTeaser}>
                                    <p>Writing to them at The Financial Ombudsman Service, Exchange Tower, London, E14 9SR</p>
                                </div>
                            </div>
                            <div className='col-sm-6'>
                                <div className={incTeaser}>
                                    <p>Calling them on <a href='tel:08000234567' title='Click to dial - mobile only'>0800 023 4567</a></p>
                                </div>
                            </div>
                            <div className='col-sm-6'>
                                <div className={incTeaser}>
                                    <p>Emailing them at <a href='mailto:complaint.info@financialombudsman.org.uk' className='hyphenate'>complaint.info@financialombudsman.org.uk</a></p>
                                </div>
                            </div>
                            <div className='col-sm-6'>
                                <div className={incTeaser}>
                                    <p>
                                        You can also complete a complaint form online. The FOS website is&nbsp;
                                        <a href='https://www.financial-ombudsman.org.uk' target='_blank' rel='noreferrer' className='hyphenate'>financial-ombudsman.org.uk</a>
                                        <i aria-hidden="true" className="icon-hs-open-in-new ms-1 small"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col'>
                        <p className='h3 warmly-cream-text homeserve-thick'>
                            If you do not take up your complaint with us first, you will not be entitled to refer it to the Financial Ombudsman Service.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </Container>
  )
}
