import { React, useRef } from 'react'
import { Cart } from './Cart'
import { Offcanvas } from './Offcanvas'
import { useCart } from '../hooks/useCart'
import { useScrollPosition } from '../hooks/useScrollPosition'
import { Link } from 'react-router-dom'
import styles from '../styles/Navbar.css'
import Logo from '../../media/imagenes/logo.png'

export function Navbar() {
  const { isMenuOpen, toggleMenu } = useCart()
  const navRef = useRef()

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav')
  }

  const scrollPosition = useScrollPosition()

  return (
    <div
      className={
        scrollPosition > 120 ? 'navbar-container scrolling' : 'navbar-container'
      }
      id='navbar-container'
    >
      <nav
        className={scrollPosition > 120 ? 'navbar scrolling' : 'navbar'}
        id='navbar'
      >
        <Link to='/'>
          <img src={Logo} alt='logo page' />
        </Link>
        {/* Contiene los Links y el icono para cerrar; el icono solo aparecerá cuando la pantalla sea pequeña */}
        <div ref={navRef} className='links responsive_nav'>
          <Link onClick={showNavbar} to='/categories/all'>
            CATEGORIES
          </Link>
          <Link onClick={showNavbar} to='/categories/product/19'>
            PRODUCT PAGE
          </Link>
          <button className='nav-btn nav-close-btn' onClick={showNavbar}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='30'
              viewBox='0 0 24 24'
            >
              <path
                fill='black'
                d='M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z'
              />
            </svg>
          </button>
        </div>
        <button className='cart-btn' onClick={toggleMenu}>
          {/* <BsBagDash className='cart-btn_icon' /> */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='35'
            height='35'
            viewBox='0 0 24 24'
          >
            <path
              fill='black'
              d='M4 22V6h4q0-1.65 1.175-2.825T12 2q1.65 0 2.825 1.175T16 6h4v16H4Zm6-16h4q0-.825-.588-1.413T12 4q-.825 0-1.413.588T10 6ZM6 20h12V8h-2v3h-2V8h-4v3H8V8H6v12Zm0 0V8v12Z'
            />
          </svg>
        </button>
        <Offcanvas isOpen={isMenuOpen} onClose={toggleMenu}>
          <Cart onClose={toggleMenu} />
        </Offcanvas>
        {/* Icono de opciones que se mostrara cuando la pantalla sea pequeña */}
        <button className='nav-btn' onClick={showNavbar}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='30'
            height='30'
            viewBox='0 0 448 512'
          >
            <path
              fill='black'
              d='M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z'
            />
          </svg>
        </button>
      </nav>
    </div>
  )
}
