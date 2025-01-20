import React from 'react'
import {faqWrapper} from '../assets/styles/FAQs.module.css'
import Accordion from './Accordion'
import faqJSONData from '../assets/content/faqs.json'
import FAQImg from '../assets/images/faqs-img.jpg'

const itemsParentID = faqJSONData.accordionID;
const items = faqJSONData.content;

export default function FAQs() {

  return (
    <div className={faqWrapper}>

      <section className="section-spacer" aria-label='Frequently asked questions section'>
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="section-header text-left">
                <h2 dangerouslySetInnerHTML={{__html:faqJSONData.title}}></h2>
              </div>

              <Accordion items={items} accID={itemsParentID} />

            </div>
            <div className="col-lg-5">
              <div className="d-none d-lg-block text-end">
                <img src={FAQImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
