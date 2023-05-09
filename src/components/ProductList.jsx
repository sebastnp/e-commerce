import React from 'react'
import { Link } from 'react-router-dom'
import { formatCurrency } from '../utilities/formatCurrency'

export function ProductList({ items }) {
  return (
    <section className='grid-cont'>
      {items.map((item) => {
        return (
          <div className='product' key={item.id}>
            {/* AQUI HAY QUE PONER EL LINK LUEGO DE CREAR EL COMPONENTE */}
            <Link to={`/categories/product/${item.id}`}>
              <div className='product-header'>
                <img src={item.img} alt={item.description} />
              </div>
              <div className='product-description'>
                <p>{item.description}</p>
                <p className='product-description-price'>
                  {formatCurrency(item.price)}
                </p>
              </div>
            </Link>
          </div>
        )
      })}
    </section>
  )
}
