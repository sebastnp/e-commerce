import { useState, useEffect } from 'react'
export function useScrollPosition() {
  // custom hook para traquear el scrollposition
  // y añade la clase
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset)
    }
    window.addEventListener('scroll', updatePosition)
    // se ejecuta aqui tambien para que cuando el componente
    // se monte por primera vez recoja el valor,
    // luego ya se ejecuta lo de arriba
    updatePosition()
    // se limpia el eventlistener cuando se desmonta
    return () => window.removeEventListener('scroll', updatePosition)
  }, [])

  return scrollPosition
}
