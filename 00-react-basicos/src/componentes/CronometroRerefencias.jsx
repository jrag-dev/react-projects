import {useRef, useState} from "react";


export function CronometroRerefencias() {
	
	const [startTime, setStartTime] = useState(null)
	const [now, setNow] = useState(null)
	const intercalRef = useRef(null)
	
	function handleStart() {
		// Empieza a contar
		setStartTime(Date.now())
		setNow(Date.now())
		
		clearInterval(intercalRef.current)
		intercalRef.current = setInterval(() => {
			// Actualiza el tiempo actual cada 10milisegundos
			setNow(Date.now())
		}, 10)
	}
	
	function handleStop() {
		clearInterval(intercalRef.current)
	}
	
	let secondsPassed = 0
	let minutsPassed = 0
	if (startTime != null && now != null) {
		secondsPassed = (now - startTime)/1000
		minutsPassed = secondsPassed / 60
	}	
	
	return (
		<>
		<h2>Tiempo transcurrido: {secondsPassed.toFixed(3)}</h2>
		<h2>Tiempo transcurrido: {minutsPassed.toFixed(1)}</h2>
		<button onClick={handleStart}>
				Iniciar
			</button>
		<button onClick={handleStop}>
			Detener
		</button>	
		</>
	)
}