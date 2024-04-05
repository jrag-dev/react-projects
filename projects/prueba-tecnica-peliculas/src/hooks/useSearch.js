import { useState } from "react"

export function useSearch() {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  
  const handleChange = query => {
    const newQuery = query
    if (newQuery.startsWith(' ')) return
    setSearch(newQuery)

    if (newQuery === '') {
      setError("No se puede buscar una pelicula vacia")
      return
    }

    if (newQuery.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula con un número.')
      return
    }

    if (newQuery.length <= 3) {
      setError('La busqueda debe tener al menos 4 carácteres.')
      return
    }

    setError(null)
  }

  return { search, error, handleChange }
}