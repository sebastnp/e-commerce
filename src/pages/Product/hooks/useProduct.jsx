import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from '../../../../mocks/data'

export function useProduct() {
  const [quantity, setQuantity] = useState(1)
  const { ID } = useParams()
  // A través de useParams encontramos el ID
  const item = items.find((prod) => prod.id === parseInt(ID))
  // capturamos el precio del item
  const precio = item.price
  const [price, setPrice] = useState(precio)

  // cada que veo otro producto
  // se reinicia el precio y cantidad
  useEffect(() => {
    setPrice(precio)
    setQuantity(1)
  }, [ID])

  const handleAdd = () => {
    const newQ = quantity + 1
    setQuantity(newQ)
    setPrice(newQ * precio)
  }

  const handleRem = () => {
    const newQ = quantity - 1
    if (quantity === 1) return
    setQuantity(newQ)
    setPrice(newQ * precio)
  }

  return { handleAdd, handleRem, price, quantity, item }
}
