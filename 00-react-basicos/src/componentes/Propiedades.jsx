
export default function Propiedades(props) {
	return (
		<div>
			<h2>{props.porDefecto}</h2>
			<ul>
				<li>{props.cadena}</li>
				<li>{props.numero}</li>
				<li>{props.booleano ? "Verdadero" : "Falso"}</li>
				<li>{props.arreglo.join(", ")}</li>
				<li>{props.objeto.nombre} - ${props.objeto.precio}</li>
				<li>{props.elementoReact}</li>
				<li>{props.funcion({ nombre: "Jose Alvarado", profesion: "Desarrollador Backend"})}</li>
				<li>{props.componenteReact}</li>
			</ul>
			
		</div>
	)
}

Propiedades.defaultProps = {
	porDefecto: "Las props"
}