import {useState} from "react";


const initialTaskState = {
	name: '',
	completed: null
}

export function Eventos() {
	
	const [task, setTask] = useState(initialTaskState)
	
	const { name, completed } = task
	
	const handleChangeTask = (e) => {
		setTask(prevState => {
			return {
				name: e.target.value,
				completed: false
			}
		})
	}
	
	const handleSubmit = (e) => {
		e.preventDefault()
		
		console.log(task)
	}
	
	return (
		<div>
			<h2>Eventos en React</h2>
			
			<form onSubmit={handleSubmit}>
				<legend>Task Manager</legend>
				<label htmlFor="name">Nombre de la tarea</label>
				<input name="name" type="text" id="name" onChange={handleChangeTask}/>
				<button type="submit">Enviar</button>
			</form>
		</div>
	)
}