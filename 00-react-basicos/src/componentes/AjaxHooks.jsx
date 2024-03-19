import {useEffect, useState} from "react";
import { PokemonItem } from "./PokemonItem.jsx";

export const AjaxHooks = () => {
	
	const [pokemons, setPokemons] = useState([])
	
	useEffect(() => {
		const obtenerDatos = () => {
			const url = 'https://pokeapi.co/api/v2/pokemon/'
			
			fetch(url)
				.then(resultado => resultado.json())
				.then(datos => {
					datos.results.forEach(item => {
						fetch(item.url)
							.then(result => result.json())
							.then(data => {
								let pokemon = {
									id: data.id,
									name: data.name,
									avatar: data.sprites.front_default
								}
								
								setPokemons( (pokemons) => [ ...pokemons, pokemon ])
							})
					})
				})
				.catch(error => console.log(error))
		}
		
		obtenerDatos()
		
	}, [])
	
	return (
		<>
		<h2>Peticiones Asíncronas con Hooks</h2>
		{
				pokemons.length === 0 ? (
					<h3>Cargando...</h3>
				) : (
					<article>
						{
							pokemons.map(pokemon => {
								return (
									<PokemonItem
										key={pokemon.id}
										pokemon={pokemon}
									/>	
								)
							})
						}
					</article>
				)
			}
		</>
	)
}