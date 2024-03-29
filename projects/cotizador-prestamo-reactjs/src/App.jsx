import { useEffect, useState } from "react"
import { Header } from "./components/Header"
import { Button } from "./components/Button"
import { calcularMensualidades, calcularTotalPagar, formatearDinero } from "./helpers"

function App() {

  const [cantidad, setCantidad] = useState(10000)
  const [meses, setMeses] = useState(3)
  const [total, setTotal] = useState(0)
  const [pagoMensual, setPagoMensual] = useState(0)

  const MAX = 20000
  const MIN = 0
  const STEP = 100


  useEffect(() => {
    const resultadoTotalAPagar = calcularTotalPagar(cantidad, meses)
    setTotal(resultadoTotalAPagar)
  }, [cantidad, meses])

  useEffect(() => {
    const mensualidad = calcularMensualidades(total, meses)
    setPagoMensual(mensualidad)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total])

  function handleChange (e) {
    setCantidad(+e.target.value)
  }

  function handleClickDecremento () {
    const valor = cantidad - STEP
    if (cantidad > MIN) {
      setCantidad(valor)
    }
  }

  function handleClickIncremento () {
    const valor = cantidad + STEP

    if (cantidad < MAX) {
      setCantidad(valor)
    }
  }


  return (
    <section className="my-20 max-w-lg mx-auto p-5 bg-white">
      <Header/>

      <div className="flex justify-between my-6">
        <Button
          operador="-"
          fn={handleClickDecremento}
        />
        <Button
          operador="+"
          fn={handleClickIncremento}
        />
      </div>
      <input 
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
        min={MIN}
        step={STEP}
        max={MAX}
        value={cantidad}
        onChange={handleChange}
      />

      <p className="text-indigo-600 text-5xl font-extrabold text-center my-10">
        {formatearDinero(cantidad)}
      </p>


      <article className="w-full flex flex-col justify-center align-center gap-5">

        <h2 className="text-2xl text-center font-bold text-gray-500">Elige un <span className="text-indigo-600">Plazo </span> a pagar</h2>

        <select 
          className="mt-5 p-2 w-full bg-white border border-gray-300 rounded-lg text-lg text-center font-extrabold text-gray-500"
          value={meses}
          onChange={(e) => setMeses(+e.target.value)}
        >
          <option value="3">3 Meses</option>
          <option value="6">6 Meses</option>
          <option value="9">9 Meses</option>
          <option value="12">12 Meses</option>
          <option value="24">24 Meses</option>
          <option value="36">36 Meses</option>
        </select>

        <div className="my-5 bg-gray-50 space-y-3 p-4">
          <h2 className="text-2xl text-center font-extrabold text-gray-500">Resumen <span className="text-indigo-600">de pagos</span></h2>
          <p className="text-lg text-center font-extrabold text-gray-500">{meses} Meses</p>
          <p className="text-lg text-center font-extrabold text-gray-500">{formatearDinero(total)} Total a pagar</p>
          <p className="text-lg text-center font-extrabold text-gray-500">{formatearDinero(pagoMensual)} Mensuales</p>

        </div>
      </article>


    </section>
  )
}

export default App