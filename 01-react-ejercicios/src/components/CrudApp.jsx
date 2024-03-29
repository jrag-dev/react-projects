import {CrudForm} from "./CrudForm.jsx";
import {CrudTable} from "./CrudTable.jsx";
import {useState} from "react";

const initialDb = [
	{
		id: 1,
		name: "Seiya",
		constellation: "Pegaso",
	},
	{
		id: 2,
		name: "Shiryu",
		constellation: "Dragón",
	},
	{
		id: 3,
		name: "Hyoga",
		constellation: "Cisne",
	},
	{
		id: 4,
		name: "Shun",
		constellation: "Andrómeda",
	},
	{
		id: 5,
		name: "Ikki",
		constellation: "Fénix",
	},
]

export const CrudApp = () => {
	const [db, setDb] = useState(initialDb)
	const [dataToEdit, setDataToEdit] = useState(null)
	
	const createData = (data) => {
		
		data.id = Date.now()
		console.log("Data: ", data)
		setDb([...db, data])
	}
	
	const updateData = (data) => {
		const objectItem = db.find(el => el.id === data.id)
		
		if (!objectItem) {
			console.log('Caballero no encontrado')
			return
		}
		const newData = db.map(el => el.id === data.id ? data : el)
		setDb(newData)
	}
	
	const deleteData = (id) => {
		let isDelete = window.confirm(
			`¿Estás seguro de eliminar el registro con el id: ${id}?`
		)
		
		if (isDelete) {
			const newData = db.filter(el => el.id !== id)
			setDb(newData)
		} else {
			return
		}
	}
	
	return (
		<section className="crud-app container">
			<h2>CRUD APP</h2>
			<CrudForm
				dataToEdit={dataToEdit}
				setDataToEdit={setDataToEdit}
				createData={createData}
				updateData={updateData}
			/>
			<CrudTable
				data={db}
				setDataToEdit={setDataToEdit}
				deleteData={deleteData}
			/>
		</section>
	)
}