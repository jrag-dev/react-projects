import {TwitterCard} from "./TwitterCard";


const users = [
	{
		id: 1,
		name: 'Jose Alvarado',
		username: '@josealvarado',
		photo: 'image1.jpg'
	},
	{
		id: 2,
		name: 'Mark Turson',
		username: '@turson',
		photo: 'image2.jpg'
	},
	{
		id: 3,
		name: 'Stefany Brenson',
		username: '@stefanny1',
		photo: 'image3.jpg'
	},
]

export function TwitterFollowCard() {
	
	return (
		<article className="twitter-card-container">
			<h2>A quién seguir</h2>
			{
				users.map(user => (
					<TwitterCard
						key={user.id}
						user={user}
					/>	
				))
			}
		</article>
	)
}