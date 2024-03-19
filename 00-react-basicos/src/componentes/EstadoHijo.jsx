

export function EstadoHijo({ handleCountPlus, handleCountMinus }) {
	
	return (
		<div className="acciones">
			<button
				type="button"
				onClick={handleCountPlus}>+</button>
			<button
				type="button"
				onClick={handleCountMinus}>-</button>
		</div>		
	)
}