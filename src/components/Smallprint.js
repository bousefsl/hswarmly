import React from 'react'
import JSONData from '../assets/content/smallprint.json'

export default function Smallprint() {
  return (
    <div className='smallprint'>

        <div className="container">
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <div className="mb-5">
                        {JSONData.content.map((data, index) => {
                            return <p key={`content_item${index}`}><small  dangerouslySetInnerHTML={{__html:data.spParagraph}}></small></p>
                        })}
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
