import React from 'react'
import styles from '../styles/RecommendedProd.css'
import { ProductList } from '../../../components/ProductList'
import { recorandomItems } from '../../../services/itemCalc'

export function RecommendedProd() {
  return (
    <div className='recomm-container'>
      <h2>Productos que te podrian interesar</h2>
      <ProductList items={recorandomItems} />
    </div>
  )
}
