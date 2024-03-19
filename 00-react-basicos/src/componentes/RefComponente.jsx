import {useRef} from "react";


export function RefComponente() {
	let ref = useRef(0)
	
	function handleClick() {
		ref.current = ref.current + 1
		alert('Hiciste click ' + ref.current + ' veces!')
	}
	
	return (
		<>
			<h2>Referencias en React</h2>
			<button onClick={handleClick}>
				¡Hazme click!
			</button>	
		</>
	)
}