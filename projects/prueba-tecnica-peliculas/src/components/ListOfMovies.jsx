import { Movie } from "./Movie";

export function ListOfMovies({ movies }) {
  return (
    <ul className="movie-list">
      {
        movies.map(movie => (
            <Movie
                key={movie.id}
                movie={movie}
            />
        ))
      }
    </ul>
  )
}