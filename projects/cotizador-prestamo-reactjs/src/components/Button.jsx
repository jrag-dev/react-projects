/* eslint-disable react/prop-types */
export function Button ({ operador, fn }) {

    return (
        <button
        className="h-10 bg-lime-500 text-white flex items-center justify-center font-bold w-10 rounded-full text-2xl hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-lime-500"
        onClick={fn}
      >{operador}</button>
    )
}