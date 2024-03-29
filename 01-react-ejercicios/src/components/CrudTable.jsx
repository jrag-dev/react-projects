import {CrudTableRow} from "./CrudTableRow.jsx";


export function CrudTable ({ data, setDataToEdit, deleteData }) {
	
	return (
		<div className="table-container">
			<h3>Tabla de Datos</h3>
			<table>
				<thead>
					<tr>
						<th>Nombre</th>
						<th>Constelación</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody>
					{
						data.length === 0
							? <tr><td colSpan="3">Sin datos</td></tr>
							: (
								data.map(el => (
									<CrudTableRow
										key={el.id}
										cabellero={el}
										setDataToEdit={setDataToEdit}
										deleteData={deleteData}
									/>	
								))
							)
					}
				</tbody>
			</table>
		</div>
	)
}