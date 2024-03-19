import {useRef, useState} from "react";

export function TwitterCard({user}) {
	const [isFollowing, setisFollowing] = useState(false)
	let useButtonisFollowing = useRef(null)
	
	const { name, username, photo } = user
	
	let text = isFollowing ? 'Siguiendo' : 'Seguir'
	
	const handleChanceFollow = () => {
		setisFollowing(!isFollowing)
	}
	
	console.log(useButtonisFollowing.current)
	
	return (
		<div className="twitter-card">
			<div className="card-user">
				<img src={photo} alt={name} />
				<div className="twitter-card-texts">
					<h3>{name}</h3>
					<p>{username}</p>
				</div>
			</div>
			{
				isFollowing
					? (
						<button
							ref={useButtonisFollowing}
							className='card-btn is-following'
							onClick={() => handleChanceFollow()}
							>{text}
						</button>
					) : (
						<button
							className='card-btn'
							onClick={() => handleChanceFollow()}
							>{text}
						</button>
					)
			}

		</div>
	)
}