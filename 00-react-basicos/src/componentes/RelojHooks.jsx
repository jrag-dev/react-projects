import {useEffect, useState} from "react";
import {Reloj} from "./Reloj.tsx";

export function RelojHooks() {
	
	const [hour, setHour] = useState(new Date().toLocaleTimeString())
	const [visible, setVisible] = useState(true)
	
	useEffect(() => {
		let temporizador
		
		if (visible) {
			temporizador = setInterval(() => {
				setHour(new Date().toLocaleTimeString())
			}, 1000)
		} else {
			clearInterval(temporizador)
		}
		
		return () => {
			clearInterval(temporizador)
		}
		
	}, [visible])
	
	const tictac = (valor) => {
		setVisible(valor)
	}
	
	return (
		<div>
			<h2>Reloj Hooks</h2>
			{
				visible && <Reloj hour={hour} />
			}
			<button onClick={() => tictac(true)}>Iniciar</button>
			<button onClick={() => tictac(false)}>Detener</button>
		</div>
	)
}