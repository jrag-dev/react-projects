import { useCallback, useEffect, useState } from 'react'
import './App.css'
import { ListOfMovies } from './components/ListOfMovies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from "./hooks/useSearch"
import debounce from 'just-debounce-it'


function App() {
  const [ sort, setSort] = useState(false)
  const { search, error, handleChange } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })

  const hasMovies = movies?.length > 0

  const debouncedGetMovies = useCallback(
    debounce(search => {
      getMovies(search)
    }, 300)
  ,[])

  const handleChangeSearch = e => {
    const newSearch = e.target.value
    handleChange(newSearch)
    debouncedGetMovies({ search: newSearch})
  }

  const handleSubmit = e => {
    e.preventDefault()
    //const fields = Object.fromEntries(new window.FormData(e.target))
    //const { query } = fields

    getMovies({search})
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className="page">
      <header className="header">
        <h1 className="header__h1">Buscador de peliculas</h1>
        <form onSubmit={handleSubmit} className="header__form">
          <input
            name="search"
            className={`form__input ${error && 'form__input-error'}`}
            placeholder='Avengers, Star Wars, The Matrix...'
            value={search}
            onChange={handleChangeSearch}
          />
          <input type="checkbox" onChange={handleSort} checked={sort}/>
          <button className="form__btn" type="submit">Buscar</button>
        </form>
        {error && <p className="error">{error}</p>}
      </header>

      <main className="main">

        {
          loading && <p>Cargando...</p>
        }

        {
          hasMovies && <h2 className="listado-titulo">Resultados Obtenidos</h2>
        }

        {
          hasMovies
            ? (
              <ListOfMovies
                movies={movies}
              />
            ) : (
              <h2 className="listado-titulo">No se obtuvieron resultados</h2>
            )
        }
      </main>
    </div>
  )
}

export default App