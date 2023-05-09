import { items } from '../../mocks/data'

// PARA LOS ITEMS RECOMENDADOS
function getRandomProducts(items) {
  // toSorted no afecta el array original
  return items.toSorted(() => (Math.random() > 0.5 ? 1 : -1)).slice(0, 8)
}
export const recorandomItems = getRandomProducts(items)

// LOGICA PARA CADA UNO DE LAS CATEGORIAS SELECCIONADAS
// debo calcular cunado sea ALL o cuando sea cualquier
// otra categoria

export function getCategoryProducts(items, category) {
  if (category === 'all') return items
  return items.filter((item) => {
    return item.category === category
  })
}
