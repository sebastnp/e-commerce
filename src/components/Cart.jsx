import { React } from 'react'
import { useCart } from '../hooks/useCart'
import { FaTimes } from 'react-icons/fa'
import { formatCurrency } from '../utilities/formatCurrency'
import styles from '../styles/Cart.css'

export function Cart({ onClose }) {
  const { state, total, removeFromCart } = useCart()
  return (
    <>
      {/* <label htmlFor={cartCheckedBoxId} className='cart-button'>
        <CartIcon />
      </label>
      <input type='checkbox' hidden id={cartCheckedBoxId} /> */}

      <aside className='cart'>
        <div className='cart-header'>
          <h3>Your Shopping Cart</h3>
          <FaTimes onClick={onClose} className='cart-header_btn' />
        </div>
        <div className='cart-body'>
          <div className='cart-items-container'>
            <ul className='full-cart'>
              {state.map((item) => {
                return (
                  <li key={item.id} className='cart-product'>
                    <div className='cart-product-img'>
                      <img src={item.img} alt={item.description} />
                    </div>
                    <div className='cart-product-middle'>
                      <p className='cart-product-middle-title'>
                        {item.description}
                      </p>
                      <p className='cart-product-middle-qty'>
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    <div className='cart-product-right'>
                      <p>{formatCurrency(item.price)}</p>
                      <FaTimes
                        className='cart-product-right_button'
                        onClick={() => removeFromCart(item)}
                      />
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className='cart-info'>
            <div className='cart-info_left'>
              <p>Subtotal</p>
              <p>{formatCurrency(total)}</p>
            </div>
            <div className='cart-info_right'>
              <a href='#'>Go to Checkout</a>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
