

export function CrudTableRow ({ cabellero, setDataToEdit, deleteData }) {
	
	const { id, name, constellation } = cabellero
	
	return (
		<tr>
			<td>{name}</td>
			<td>{constellation}</td>
			<td className="acciones">
				<button className="text-center text-yellow-500 hover:text-gray-50 hover:bg-yellow-500 border-2 border-yellow-500 p-1 px-3 rounded-lg" onClick={() => setDataToEdit(cabellero)}>Editar</button>
				<button className="text-center text-red-500 hover:text-gray-50 hover:bg-red-500 border-2 border-red-500 p-1 px-3 rounded-lg" onClick={() => deleteData(id)}>Eliminar</button>
			</td>
		</tr>
	)
}