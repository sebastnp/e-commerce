import React from 'react'
import styles from '../styles/Contact.css'

export function Contact() {
  return (
    <div className='new-container'>
      <div className='new-container-elements'>
        <h2>Contact me!</h2>
        <form className='new-container-elements-form'>
          <input type='email' placeholder='your@email.com' />
          <button type='submit'>Send</button>
        </form>
      </div>
    </div>
  )
}
