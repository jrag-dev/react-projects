import { useFetch } from "../hooks/useFetch.js"
import { Loader } from "./Loader.jsx"

export function SelectList ({label, endpoint, handleChange}) {
  
  const { data, error, loading } = useFetch(endpoint)
  
  if (!data) return null;
  
   if(error) {
      return ( 
         <Message 
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor='#dc3545'
         />
      )
   }
  
  let title = label.split(" ")[2].toLowerCase()
  let id = `select-${title}`;

  let options = data.response[title]
  
  return (
    <div className="w-full max-w-[400px]">
      <label htmlFor={id}></label>
      { loading && <Loader/>}
      <select
        name={id}
        id={id}
        className="mt-4 p-2 w-full bg-gray-50 border border-gray-300 rounded-lg text-medium text-center font-medium text-gray-500"
        onChange={handleChange}
      >
        <option value="">{label}</option>
        {
          data && options.map(el => (
            <option key={el} value={el}>
              {el}
            </option>
          )
        )}
      </select>
    </div>
  )
}