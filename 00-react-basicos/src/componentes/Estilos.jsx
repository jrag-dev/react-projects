import "./Estilos.css"
import moduleStyles from "./Estilos.module.css"


export function Estilos() {
	
	return (
		<section className="estilos">
			<h2>Estilos CSS en React</h2>
			<h3 className="bg-react">Estilos en hoja de css externa</h3>
			
			<div>
				<h3 className={moduleStyles.success}>Estilos con módulos</h3>
				<h3 className={moduleStyles.error}>Estilos con módulos</h3>
			</div>
		</section>
	)
}