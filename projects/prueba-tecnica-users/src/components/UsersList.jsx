import { UserItem } from "./UserItem.jsx"

export const UsersList = ({ users, showColors, handleDelete }) => {
  
  return (
      <table className="w-[90%] lg:w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="py-4 text-center">Foto</th>
            <th className="py-4 text-center">Nombre</th>
            <th className="py-4 text-center">Apellido</th>
            <th className="py-4 text-center">Pais</th>
            <th className="py-4 text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            users.length === 0
              ? (
                  <tr>
                    <td colSpan="4">Sin datos</td>
                  </tr>
              ) : (
                users.map(user => (
                  <UserItem
                    key={user.email}
                    id={user.id}
                    email={user.email}
                    name={user.name}
                    location={user.location}
                    picture={user.picture}
                    showColors={showColors}
                    handleDelete={handleDelete}
                  />
                ))
              )
          }
        </tbody>
      </table>
  )
}