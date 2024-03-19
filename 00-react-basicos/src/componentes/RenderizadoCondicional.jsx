import {useState} from "react";


function Login({ login }) {
	return (
		<div>
			<h3>El usuario no ha iniciado sesión</h3>
			<button type="button" onClick={login}>Login</button>
		</div>
	)
}

function Logout({ logout }) {
	return (
		<div>
			<h3>El usuario ha iniciado sesión</h3>
			<button type="button" onClick={logout}>Logout</button>
		</div>
		)
}

export const RenderizadoCondicional = () => {
	
	const [auth, setAuth] = useState(false)
	
	const login = () => {
		console.log('login')
		setAuth(prevState => {
			return true
		})
	}
	
	const logout = () => {
		setAuth(prevState => {
			return false
		})
	}
	
	
	return (
		<>
			<h2>Renderizado Condicional</h2>
		
			{
				!auth
					? (
						<Login login={login} />
					) : (
						<Logout logout={logout}/>
					)
			}
		</>
	)
}