import {useEffect, useState} from "react";


export function ScrollHooks() {
	
	const [ scrollY, setScrollY] = useState(0)
	
	useEffect(() => {
		console.log('Fase de Actualizacion con dependencia')
		
		const detectarScroll = () => {
			setScrollY(window.scrollY)
		}
		
		window.addEventListener('scroll', detectarScroll)
		
		return () => {
			window.removeEventListener('scroll', detectarScroll)
		}
		
	}, [scrollY])
	
	useEffect(() => {
		console.log('Fase de Montaje')
	}, [])
	
	/*
	useEffect(() => {
		console.log('Fase de Actualización')
	})
	*/
	
	useEffect(() => {
		
		return () => {
			console.log('Fase de Desmontaje')
		}
	})
	
	return (
		<div>
			<h2>Hooks - useEffect y el ciclo de vida</h2>
			<p>ScrollY del Navegador {scrollY}px</p>
		</div>
	)
}