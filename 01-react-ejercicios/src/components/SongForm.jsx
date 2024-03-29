import { useState } from "react"

const initialState = {
	artist: "",
	title: ""
}

export const SongForm = ({ handleSearch }) => {
	const [ form, setForm ] = useState(initialState)
	const { artist, title } = form
	
	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value
		})
	}
	
	const handleSubmit = (e) => {
		e.preventDefault()
		
		if (artist === "" || title === "") {
			alert("Todos los campos son requeridos!")
			return;
		}
		
		handleSearch(form)
		
		setForm(initialState)
	}

	return (
		<article className="w-full flex items-center justify-center">
			<form 
				className="w-full max-w-[600px] bg-gray-50 p-4 flex flex-col gap-2 items-center justify-center"
				onSubmit={handleSubmit}
			>
				<input
					type="text"
					name="artist"
					placeholder="Nombre del autor"
					className="border-2 rounded-lg py-2 px-4 w-full focus:border-gray-300 outline-none"
					value={artist}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="title"
					placeholder="Nombre de la canción" 
					className="border-2 rounded-lg py-2 px-4 w-full focus:border-gray-300 outline-none"
					value={title}
					onChange={handleChange}
				/>
				<input
					type="submit"
					value="Enviar"
					className="py-2 w-full max-w-[600px] px-6 cursor-pointer hover:border-lime-600 hover:text-lime-600 font-medium border-2 border-lime-500 text-lime-500 rounded-lg"
				/>
			</form>
		</article>
	)
}