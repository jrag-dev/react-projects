

export function PokemonItem({ pokemon }) {
	
	const { name, avatar } = pokemon
	
	return (
		<div>
			<h4>{name}</h4>
			<img src={avatar} alt={name} />
		</div>
	)
}