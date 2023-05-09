import React from 'react'
import styles from '../styles/Offcanvas.css'

export function Offcanvas({ isOpen, onClose, children }) {
  return (
    <div className={`offcanvas ${isOpen ? 'open' : ''}`}>
      <div className='offcanvas-overlay' onClick={onClose}></div>
      <div className='offcanvas-content'>{children}</div>
    </div>
  )
}
