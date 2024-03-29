import {useEffect, useRef, useState} from "react";


const initialState = {
	id: null,
	name: "",
	constellation: ""
}

export const CrudForm = ({ dataToEdit, setDataToEdit, createData, updateData }) => {
	const [ form, setForm ] = useState(initialState)
	
	const { id, name, constellation } = form
	
	useEffect(() => {
		if (dataToEdit) {
			setForm(dataToEdit)
		} else {
			setForm(initialState)
		}
	}, [dataToEdit])
	
	const handleChance = e => {
		setForm({
			...form,
			[e.target.name] : e.target.value
		})
	}
	
	const handleSubmit = e => {
		e.preventDefault()
		
		if (name === '' || constellation === '') {
			alert('Todos los campos son obligatorios')
			return
		}
		
		if (id === null) {
			createData(form)
		} else {
			updateData(form)
		}
		
		handleReset()
		
	}
	
	const handleReset = e => {
		setForm(initialState)
		setDataToEdit(null)
	}
	
	return (
		<div className="form-container">
			<h3>{dataToEdit ? 'Editar' : 'Agregar'}</h3>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					placeholder="Nombre"
					value={name}
					onChange={handleChance}
				/>
				<input
					type="text"
					name="constellation"
					placeholder="Constelación"
					value={constellation}
					onChange={handleChance}
				/>
				<div className="btn-container">
					<input
						className="btn-submit"
						type="submit"
						value="Enviar"
					/>
					<input
						type="reset"
						value="Limpiar"
						onClick={handleReset}
						className="btn-reset"
					/>
				</div>	
			</form>
		</div>
	)
}