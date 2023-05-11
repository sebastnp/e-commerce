import { React, useRef } from 'react'
import { Cart } from './Cart'
import { Offcanvas } from './Offcanvas'
import { useCart } from '../hooks/useCart'
import { useScrollPosition } from '../hooks/useScrollPosition'
import { Link } from 'react-router-dom'
import styles from '../styles/Navbar.css'
import Logo from '../../media/imagenes/logo.png'
import { BsBagDash } from 'react-icons/bs'
import { FaBars, FaTimes } from 'react-icons/fa'

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
            <FaTimes />
          </button>
        </div>
        <button className='cart-btn' onClick={toggleMenu}>
          <BsBagDash className='cart-btn_icon' />
        </button>
        <Offcanvas isOpen={isMenuOpen} onClose={toggleMenu}>
          <Cart onClose={toggleMenu} />
        </Offcanvas>
        {/* Icono de opciones que se mostrara cuando la pantalla sea pequeña */}
        <button className='nav-btn' onClick={showNavbar}>
          <FaBars className='nav-btn_icon' />
        </button>
      </nav>
    </div>
  )
}
