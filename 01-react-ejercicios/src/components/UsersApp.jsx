import {useUsers} from "../hooks/useUsers.js";


export function UsersApp () {

	const { userDB } = useUsers()
	
	return (
		<section className="users-app container">
			<h2>Usuarios App</h2>
			
			<table>
				<thead>
					<tr>
						<th>id</th>
						<th>Name</th>
						<th>Email</th>
						<th>Avatar</th>
					</tr>
				</thead>
				<tbody>
					{
						userDB.length === 0
							? <tr><td colSpan="3">Sin datos</td></tr>
							: (
								userDB.map(el => (
									<tr key={el.id}>
										<td>{el.id}</td>
										<td>{el.first_name} {el.last_name}</td>
										<td>{el.email}</td>
										<td className="table-user-img">
											<img src={el.avatar} alt={el.first_name}/>
										</td>
									</tr>
								))
							)
					}
				</tbody>
			</table>
			
		</section>
	)
}