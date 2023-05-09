import React from 'react'
import { items } from '../../mocks/data'
import Carousel from 'react-multi-carousel'
import { Link } from 'react-router-dom'
import { formatCurrency } from '../utilities/formatCurrency'
import 'react-multi-carousel/lib/styles.css'
import styles from '../styles/Trending.css'

function getTrendingItems(items) {
  return items.slice(7, 20)
}

const trendingItems = getTrendingItems(items)

export function Trending() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  }
  return (
    <section className='trending-cont'>
      <h3>Trending now</h3>
      <Carousel responsive={responsive} className='carousel'>
        {trendingItems.map((item) => {
          return (
            <div className='trend-product' key={item.id}>
              <Link to={`/categories/product/${item.id}`}>
                <div className='trend-product_header'>
                  <img src={item.img} alt={item.description} />
                </div>
                <div className='trend-product_description'>
                  <p>{item.description}</p>
                  <p className='trend-product_price'>
                    {formatCurrency(item.price)}
                  </p>
                </div>
              </Link>
            </div>
          )
        })}
      </Carousel>
    </section>
  )
}
