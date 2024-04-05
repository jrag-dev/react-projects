
const API_KEY = '7d1fad3e' 

export const searchMovies = async ({ search }) => {
    if (search === '') return null

    try {
      const URL = `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${search}`
       const response = await fetch(URL)
       const data = await response.json()

       const movies = data.Search
       
       return movies?.map(movie => (
        {
            id: movie.imdbID,
           title: movie.Title,
           year: movie.Year,
           poster: movie.Poster,
           type: movie.Type
        }
      ))

    } catch (err) {
       throw new Error("Error searchibg movies.")
    }
}