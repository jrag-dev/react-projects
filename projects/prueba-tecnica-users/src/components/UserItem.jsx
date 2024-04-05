

export const UserItem = ({ name, location, id, email, picture, showColors, handleDelete }) => {
  
  const { value } = id
  const { first, last } = name
  const { country } = location
  const { medium } = picture
  
  return (
    <tr key={value} className={`mb-2 ${showColors ? "bg-neutral-700 even:bg-neutral-800 border-l-4 hover:border-red-600" : "border-l-4 bg-white"}`}>
      <td className="py-2 flex flex-col justify-center items-center">
        <img className="h-10 w-10" src={medium} alt="" />
      </td>
      <td className="py-2 text-center">{first}</td>
      <td className="py-2 text-center">{last}</td>
      <td className="py-2 text-center">{country}</td>
      <td className="py-2 text-center">
        <button 
          className="text-center bg-slate-900 hover:bg-slate-950 text-white py-1 px-4 rounded-md"
          onClick={() => handleDelete(email)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  )
}