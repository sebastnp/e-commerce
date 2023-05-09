import React from 'react'
import styles from '../styles/Banner.css'

export function Banner({ clasname, title, text, img, alt }) {
  return (
    <section className={clasname}>
      <div className='text-side'>
        <div className='text'>
          <h2>{title}</h2>
          <p>{text}</p>
          <a href='#'>
            <button>SHOP NOW</button>
          </a>
        </div>
      </div>
      <div className='img-side'>
        <img src={img} alt={alt} />
      </div>
    </section>
  )
}
