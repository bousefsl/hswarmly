import React from 'react';
import {containerPadding} from '../../assets/styles/Container.module.css';

export default function Container({children, bgColor}) {
  return (
    <div className={`warmly-${bgColor}-bg`}>
        <div className={`container ${containerPadding}`}>
            {children}
        </div>
    </div>
  )
}