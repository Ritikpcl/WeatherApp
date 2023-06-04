import React from 'react'
import './Footer.css'

export default function Footer({mode: mode}) {
  return (
    <div className={mode ? 'footer-light' : 'footer-dark'}>
      <h1 className={mode ? 'footer-text-light' : 'footer-text-dark'}>&copy; 2022 | Ritik Panchal</h1>
    </div>
  )
}
