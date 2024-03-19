import {useState} from "react";
import data from "../helpers/data.json"


const initialSeasonsState = ['Primavera', 'Verano', 'Otoño', 'Invierno']

export function RenderizadoElementos() {
	const [seasons, setSeasons] = useState(initialSeasonsState)
	
	return (
		<>
			<h3>Estaciones del Año: </h3>
			<ul>
				{
					seasons.map(season => {
						return (
							<li key={season}>{season}</li>
						)	
					})
				}
			</ul>
			
			<h3>Frameworks Favoritos: </h3>
			{
				data.frameworks.map( ({id, name, language}) => {
					return (
						<div key={id}>
							<p>{name} - {language}</p>
						</div>
						)		
				})
			}
		</>
	)
}