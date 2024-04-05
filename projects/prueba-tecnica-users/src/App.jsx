import { useState, useEffect, useRef, useMemo } from 'react'
import { UsersList } from "./components/UsersList.jsx"
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [showColors, setShowColors] = useState(false)
  const [sortByCountry, setSortByCountry] = useState(false)
  const [filterUserByCountry, setFilterUserByCountry] = useState("")
  const originalUsers = useRef([])

  useEffect(() => {
    let url = `https://randomuser.me/api/?results=100`
    fetch(url)
      .then(response => response.json())
      .then(response => {
        setUsers(response.results)
        originalUsers.current = response.results
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  
  
  const filteredUsers = useMemo(() => {
    console.log("calculate filtered Users")
    return filterUserByCountry.length > 0
      ? users.filter( user => {
        return user.location.country.toLowerCase().includes(filterUserByCountry.toLowerCase())
      })
      : users
  }, [users, filterUserByCountry] )
  
  const sortedUsers = useMemo(() => {
    console.log('sorted users')
    return sortByCountry 
    ? filteredUsers.toSorted((a, b) => {
      return a.location.country.localeCompare(b.location.country)
    }) : filteredUsers
  }, [filteredUsers, sortByCountry])
  
  
  const toggleShowColor = () => {
    setShowColors(!showColors)
  }
  
  const toggleSortByCountry = () => {
    setSortByCountry(prevState => !prevState)
  }
  
  const handleDelete = (email) => {
    const filteredUsers = users.filter( (user) => user.email !== email)
    setUsers(filteredUsers)
  }
  
  const handleResetUsers = () => {
    setUsers(originalUsers.current)
  }
  
  const handleFilterUserByCountry = (e) => {
    setFilterUserByCountry(e.target.value)
  }
  
  return (
    <>
      <header className="mt-12">
        <h1 className="text-blue-900 text-center text-3xl font-bold">
          Lista de usuarios
        </h1>
      </header>
      
      <main className="grid grid-cols-1 gap-y-12 items-center justify-center w-full max-w-6xl mx-auto mt-12">
        
        <div className="flex items-center justify-center gap-x-4">
          <button
            className="text-white text-center py-1 px-4 bg-neutral-700 hover:bg-neutral-800 rounded"
            onClick={toggleShowColor}
          >Colorea filas</button>
          <button
            className="text-white text-center py-1 px-4 bg-neutral-700 hover:bg-neutral-800 rounded"
            onClick={toggleSortByCountry}
          >{sortByCountry ? 'No ordenar' : 'Ordenar por pais'}</button>
          <button
            className="text-white text-center py-1 px-4 bg-neutral-700 hover:bg-neutral-800 rounded"
            onClick={handleResetUsers}
          >Reiniciar users</button>
          <div>
            <input
              className="border-2 border-gray-300 rounded py-1 px-4 text-sm outline-gray-400"
              placeholder="Filtrar por pais"
              value={filterUserByCountry}
              onChange={handleFilterUserByCountry}
            />
          </div>
        </div>
        
        <section className="flex items-center justify-center w-full max-w-6xl mx-auto">
          <UsersList 
            users={sortedUsers}
            showColors={showColors}
            handleDelete={handleDelete}
          />
        </section>
      </main>
    </>
  )
}

export default App
