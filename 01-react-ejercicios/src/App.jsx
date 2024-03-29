import {CrudApp} from "./components/CrudApp.jsx";
import {UsersApp} from "./components/UsersApp.jsx";

import './App.css'
import {CrudApi} from "./components/CrudApi.jsx";
import {SongSearch} from "./components/SongSearch.jsx";
import { SelectsAnidados } from "./components/SelectsAnidados.jsx"


function App() {

  return (
    <>
      <h1>Ejercicios React</h1>
      <hr/>
      {/* <SelectAnidados/> */}
      <hr/>
      <SongSearch/>
      <hr/>
      <CrudApi/>
      <hr/>
      <UsersApp/>
      <CrudApp/>
    </>
  )
}

export default App