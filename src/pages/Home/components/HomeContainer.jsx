import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/HomeContainer.css'
import Casa from '../../../../media/home/casa.jpg'
import Electronics from '../../../../media/home/electronics.jpg'
import Kitchen from '../../../../media/home/kitchen.jpg'
import Skincare from '../../../../media/home/skincare.jpg'

export function HomeContainer() {
  return (
    <div className='home-container'>
      <div className='grid-container'>
        {/* GRID 1 */}
        <div className='feautered  grid-one'>
          <Link to={`/categories/all`}>
            <div className='lil-overlay' id='img1'></div>
            <img src={Casa} alt='img1' />
            <p className='main-description'>Live Comfortably</p>
          </Link>
        </div>
        {/* GRID 2 */}
        <div className='feautered  grid-two'>
          <Link to={`/categories/skin-care`}>
            <div className='lil-overlay' id='img2'></div>
            <img src={Skincare} alt='img2' />
            <p className='main-description'>Skincare</p>
          </Link>
        </div>
        {/* GRID 3 */}
        <div className='feautered  grid-three'>
          <Link to={`/categories/kitchen`}>
            <div className='lil-overlay' id='img3'></div>
            <img src={Kitchen} alt='img3' />
            <p className='main-description'>Kitchen</p>
          </Link>
        </div>
        {/* GRID 4 */}
        <div className='feautered  grid-three-low'>
          <Link to={`/categories/electronic`}>
            <div className='lil-overlay' id='img4'></div>
            <img src={Electronics} alt='img4' />
            <p className='main-description'>Electronics</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
