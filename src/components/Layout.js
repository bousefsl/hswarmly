import React from 'react'
import '../assets/scss/bootstrap-theme.scss'

export default function Layout({ children }) {
  return (
    <div className='layout'>
        <div className='content'>
            { children }
        </div>
    </div>
  )
}
