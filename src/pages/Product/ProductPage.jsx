import { React } from 'react'
import { Trending } from '../../components/Trending'
import { useProduct } from './hooks/useProduct'
import { useCart } from '../../hooks/useCart'
import { formatCurrency } from '../../utilities/formatCurrency'
import styles from './ProductPage.css'

export function ProductPage() {
  const { handleAdd, handleRem, price, quantity, item } = useProduct()

  const { addToCart } = useCart()

  return (
    <>
      <div className='product-cont'>
        <h3>{item.description}</h3>
        <div className='product-div'>
          <div className='product-left'>
            <div className='big-img'>
              <img src={item.img} alt={item.description} />
            </div>
            <div className='small-imgs'>
              <img src={item.img} alt='' />
              <img src={item.otherImgs[0]} alt={item.description} />
              <img src={item.otherImgs[1]} alt={item.description} />
            </div>
          </div>
          <div className='product-right'>
            <p className='product-right_text'>{item.specs}</p>
            <div className='prod-quantity'>
              <p>Quantity</p>
              <div className='prod-quantity_btns'>
                <button onClick={() => handleRem()}>-</button>
                <p className='quantity'>{quantity}</p>
                <button onClick={() => handleAdd()}>+</button>
              </div>
              <p className='prod-quantity_price'>{formatCurrency(price)}</p>
            </div>
            <div className='prod-btns_act'>
              <button
                className='prod-btns_act_add'
                onClick={() => addToCart(item, quantity, price)}
              >
                ADD TO CART
              </button>
              <button className='prod-btns_act_buy'>BUY NOW</button>
            </div>
          </div>
        </div>
      </div>
      {/* ESPECIFICACIONES DE CADA PRODUCTO */}
      <div className='product-specification'>
        <div className='spec'>
          <p className='spec-title'>Texture:</p>
          <p className='spec-desc'>{item.texture}</p>
        </div>
        <div className='spec'>
          <p className='spec-title'>Weight:</p>
          <p className='spec-desc'>{item.weight}</p>
        </div>
        <div className='spec'>
          <p className='spec-title'>Size:</p>
          <p className='spec-desc'>{item.size}</p>
        </div>
      </div>

      <Trending />
    </>
  )
}
