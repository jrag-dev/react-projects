import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />  
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className="gallery">
      <h1>Científicos increíbles</h1>
      <article>
        <Profile/>
        <Profile/>
        <Profile/>
        <Profile/>
      </article>
    </section>
  )
}

export default App
