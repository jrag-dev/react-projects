import {useState} from "react";
import {EstadoHijo} from "./EstadoHijo.jsx";


export function Estado() {
	const [count, setCount] = useState(0)
	
	const handleCountPlus = () => {
		setCount(prevState => {
			return prevState + 1
		})
	}
	
	const handleCountMinus = () => {
		if (count <= 0) {
			return
		}
		setCount(prevState => {
			return prevState - 1
		})
	}
	
	return (
		<>
			<p>Contador: {count}</p>
			<EstadoHijo
				handleCountPlus={handleCountPlus}
				handleCountMinus={handleCountMinus}
			/>	
		</>
	)
}