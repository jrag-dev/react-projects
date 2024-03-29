import { useState } from "react"

import { SelectList } from "./SelectList.jsx"

export function SelectsAnidados () { 
  const TOKEN_API = "7f0b9af1-7289-478f-866e-5f6b681a04fc"
  
  const [state, setState] = useState('')
  const [town, setTown] = useState('')
  const [suburb, setSuburb] = useState('')
  
  return (
    <section className="flex flex-col justify-center items-center py-10">
      <h2 className="text-center text-indigo-500 py-4 font-extrabold text-2xl">Select Anidados</h2>
      <SelectList
        label="Selecciona un Estado"
        endpoint={`https://api.copomex.com/query/get_estados?token=${TOKEN_API}`}
        handleChange={(e) => setState(e.target.value)}
      />
      {
        state && (
          <SelectList
            label="Selecciona un Municipios"
            endpoint={`https://api.copomex.com/query/get_municipio_por_estado/${state}?token=${TOKEN_API}`} 
            handleChange={(e) => setTown(e.target.value)}           
          />
        )
      }
      
      {
        town && (
          <SelectList
            label="Selecciona una Colonia"
            endpoint={`https://api.copomex.com/query/get_colonia_por_municipio/${town}?token=${TOKEN_API}`}
            handleChange={(e) => setSuburb(e.target.value)}              
          />
        )
      }
      <pre className="mt-10">
        <code>
          {state} - {town} - {suburb}
        </code>
      </pre>
    </section>
  )
}