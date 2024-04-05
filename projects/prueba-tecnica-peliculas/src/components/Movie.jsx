
export function Movie({ movie }) {
  return (
    <li className="movie-item" key={movie.id}>
      <div className="movie-header">
        <h3>{movie.title}</h3>
        <div className="movie-footer">
           <span><i>{movie.type}</i></span>
           <p><i>{movie.year}</i></p>
        </div>
      </div>
      <img src={movie.poster} alt={movie.title} />
    </li>
  )
}