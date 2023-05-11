import { React, useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Home } from './pages/Home/Home'
import { Categories } from './pages/Categories/Categories'
import { ProductPage } from './pages/Product/ProductPage'
import { CartProvider } from './contexts/cart'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'

function App() {
  // cada que se cambia la ruta hace scroll hacia el inicio
  // revisar esta funcion para que solo se ejecute una unica vez
  function ScrollToTop() {
    const { pathname } = useLocation()
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])
    return null
  }

  return (
    <CartProvider>
      <Navbar />
      <div className='container'>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/categories/:categoryName' element={<Categories />} />
          <Route path='/categories/product/:ID' element={<ProductPage />} />
        </Routes>
      </div>
      <Contact />
      <Footer />
    </CartProvider>
  )
}

export default App

/*
import { React } from 'react'
import {
  Route,
  Routes,
  Link,
  useParams,
  Outlet,
  NavLink,
} from 'react-router-dom'

function Home() {
  return <h3>Soy el home</h3>
}
function SearchPage() {
  const tacos = ['carnitas', 'pastor', 'chili', 'res']
  return (
    <>
      <h3>Soy el SearchPage</h3>
      {tacos.map((taco) => {
        return (
          <li key={taco}>
            <Link to={`/tacos/${taco}`}>{taco}</Link>
          </li>
        )
      })}
    </>
  )
}
function Tacos() {
  // nos permite capturar segmentos dinamicos
  // (o parametros de la ruta)
  // y recuperarlos en un componente
  const { name } = useParams()
  return (
    <>
      <h4>Tacos de {name}</h4>
      <Link to={'details'}>Ir a los details</Link>
      <Outlet />
    </>
  )
}

function TacoDetails() {
  const { name } = useParams()
  return (
    <>
      <h4>Details del taco {name}</h4>
    </>
  )
}

// COMPOSICION creando nuestro NavLink
function NavLinkRR({ to, children, ...props }) {
  return (
    <NavLink
      {...props}
      to={to}
      className={({ isActive }) => {
        return isActive ? 'is-active' : undefined
      }}
    >
      {children}
    </NavLink>
  )
}

function App() {
  return (
    <div className='App'>
      <header>
        <h1>E-COMMERCE</h1>
        <nav>
          <ul>
            <li>
              <NavLinkRR to='/'>HOME</NavLinkRR>
            </li>
            <li>
              <NavLinkRR to='/search-page'>SEARCH</NavLinkRR>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/search-page' element={<SearchPage />} />
        <Route path='/' element={<Home />} />
  
        <Route path='/tacos/:name' element={<Tacos />}>
          <Route path='details' element={<TacoDetails />} />
        </Route>
        <Route path='*' element={<h2>404 Not Found</h2>} />
      </Routes>
    </div>
  )
}

export default App
*/
