import React from 'react'
import styles from '../styles/Offcanvas.css'

export function Offcanvas({ isOpen, onClose, children }) {
  // Obtén una referencia al elemento <body>
  const bodyElement = document.querySelector('body')

  function overlayScrollToggle() {
    return isOpen
      ? bodyElement.classList.add('no-scroll')
      : bodyElement.classList.remove('no-scroll')
  }
  overlayScrollToggle()

  return (
    <div className={`offcanvas ${isOpen ? 'open' : ''}`}>
      <div className='offcanvas-overlay' onClick={onClose}></div>
      <div className='offcanvas-content'>{children}</div>
    </div>
  )
}
