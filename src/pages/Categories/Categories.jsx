import React from 'react'
import { ProductList } from '../../components/ProductList'
import { items } from '../../../mocks/data'
import { getCategoryProducts } from '../../services/itemCalc'
import styles from './Categories.css'
import { Link, useParams } from 'react-router-dom'

function CategoriesHeader({ categoryName }) {
  const buttonNames = [
    'all',
    'furniture',
    'electronic',
    'lamp',
    'kitchen',
    'chair',
    'skin-care',
  ]

  return (
    <div className='catego-cont'>
      <div className='catego-header'>
        <Link to='/' className='catego-header_home'>
          Home
        </Link>
        <h3>{categoryName}</h3>
      </div>
      <div className='catego-header_links'>
        {buttonNames.map((category) => {
          return (
            <Link to={`/categories/${category}`} key={category}>
              <button className='catego-buttons'>{category}</button>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export function Categories() {
  const { categoryName } = useParams()
  return (
    <>
      <CategoriesHeader categoryName={categoryName} />
      <ProductList items={getCategoryProducts(items, categoryName)} />
    </>
  )
}
