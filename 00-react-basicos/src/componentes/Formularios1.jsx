import {useState} from "react";


const initialState = {
	nombre: '',
	sabor: '',
	framework: '',
	terminos: false
}

export function Formularios1() {
	const [form, setForm] = useState(initialState)
	
	const { nombre, sabor, framework, terminos } = form
	
	const handleChangeForm = (e) => {
		setForm({
			...form,
			[e.target.name] : e.target.value
		})
	}
	
	const handleChageChecked = (e) => {
		setForm({
			...form,
			[e.target.name] : e.target.checked
		})
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
						onChange={handleChangeForm}
					/>
				</div>
				<div>
					<p>Selecciona tu Sabor JS Favorito:</p>
					<input
						type="radio"
						name="sabor"
						id="vanilla"
						value="vanilla"
						onChange={handleChangeForm}
					/>
					<label htmlFor="vanilla">Vanilla</label>
					
					<input
						type="radio"
						name="sabor"
						id="react"
						value="react"
						defaultChecked
						onChange={handleChangeForm}
					/>
					<label htmlFor="react">React</label>
					
					<input
						type="radio"
						name="sabor"
						id="vue"
						value="vue"
						onChange={handleChangeForm}
					/>
					<label htmlFor="vue">Vue</label>
					
					<input
						type="radio"
						name="sabor"
						id="angular"
						value="angular"
						onChange={handleChangeForm}
					/>
					<label htmlFor="angular">Angular</label>
					
					<input
						type="radio"
						name="sabor"
						id="svelte"
						value="svelte"
						onChange={handleChangeForm}
					/>
					<label htmlFor="svelte">Svelte</label>
					
				</div>
				
				<div>
					<p>Selecciona tu framework favorito: </p>
					<select
						name="framework"
						onChange={handleChangeForm}
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
						onChange={handleChageChecked}
					/>
				</div>
				
				<input type="submit" value="Enviar"/>
				
			</form>
		</>
	)
}