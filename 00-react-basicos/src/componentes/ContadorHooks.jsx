import {useState} from "react";


export function ContadorHooks () {
	
	const [ contador, setContador ] = useState(0)
	
	const sumar = () => setContador(contador + 1)
	const restar = () => setContador(contador - 1)
	
	return (
		<div>
			<h2>Hooks - useState</h2>
			<nav>
				<button onClick={sumar}>+</button>
				<button onClick={restar}>-</button>
			</nav>
			<h3>{contador}</h3>
		</div>
	)
}