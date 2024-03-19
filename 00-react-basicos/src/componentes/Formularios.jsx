import {useState} from "react";


export function Formularios() {
	const [nombre, setNombre] = useState('')
	const [sabor, setSabor] = useState('')
	const [framework, setFramework] = useState('')
	const [terminos, setTerminos] = useState(false)
	
	const handleChangeNombre = (e) => {
		setNombre(e.target.value)
	}
	
	const handleChangeSabor = (e) => {
		setSabor(e.target.value)
	}
	
	const handleChangeFramework = (e) => {
		setFramework(e.target.value)
	}
	
	const handleSubmitForm = e => {
		e.preventDefault()
		
		let datos = {
			nombre: nombre,
			sabor: sabor,
			framework: framework
		}
		
		if (!terminos) {
			console.log("Debes aceptar los términos y condiciones!")
			return
		}
		
		console.log(datos)
	}
	
	return (
		<>
			<h2>Formularios</h2>
			<form onSubmit={handleSubmitForm}>
				<div>
					<label htmlFor="nombre">Nombre</label>
					<input
						type="text"
						name="nombre"
						id="nombre"
						placeholder="pj. Jose Alvarado"
						value={nombre}
						onChange={handleChangeNombre}
					/>
				</div>
				<div>
					<p>Selecciona tu Sabor JS Favorito:</p>
					<input
						type="radio"
						name="sabor"
						id="vanilla"
						value="vanilla"
						onChange={handleChangeSabor}
					/>
					<label htmlFor="vanilla">Vanilla</label>
					
					<input
						type="radio"
						name="sabor"
						id="react"
						value="react"
						defaultChecked
						onChange={handleChangeSabor}
					/>
					<label htmlFor="react">React</label>
					
					<input
						type="radio"
						name="sabor"
						id="vue"
						value="vue"
						onChange={handleChangeSabor}
					/>
					<label htmlFor="vue">Vue</label>
					
					<input
						type="radio"
						name="sabor"
						id="angular"
						value="angular"
						onChange={handleChangeSabor}
					/>
					<label htmlFor="angular">Angular</label>
					
					<input
						type="radio"
						name="sabor"
						id="svelte"
						value="svelte"
						onChange={handleChangeSabor}
					/>
					<label htmlFor="svelte">Svelte</label>
					
				</div>
				
				<div>
					<p>Selecciona tu framework favorito: </p>
					<select
						name="framework"
						onChange={handleChangeFramework}
						defaultValue=""
					>
						<option value="">Seleccionae Framework: </option>
						<option value="django">Django</option>
						<option value="flask">Flask</option>
						<option value="fastapi">FasAPI</option>
						<option value="express">Express</option>
						<option value="springboot">Spring Boot</option>
					</select>
				</div>
				
				<div>
					<label htmlFor="terminos">Acepto términos y condiciones</label>
					<input
						type="checkbox"
						name="terminos"
						id="terminos"
						onChange={(e) => setTerminos(e.target.checked)}
					/>
				</div>
				
				<input type="submit" value="Enviar"/>
				
			</form>
		</>
	)
}