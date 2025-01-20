import React from 'react'
import '../assets/scss/bootstrap-theme.scss'
import SubHeader from './SubHeader'
import Footer from './Footer'

export default function LayoutSub({children}) {
  return (
    <div className='layout-sub root-layout'>
        <SubHeader />
        <main>
            <div className='container'>
                <div className='row'>
                    <div className='col mt-5 mb-5'>
                        { children }
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </div>
  )
}
