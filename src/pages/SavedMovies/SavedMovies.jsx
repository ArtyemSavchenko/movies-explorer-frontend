import MovieCard from "../../components/MovieCard/MovieCard"
import SearchMovieForm from "../Movies/SearchMovieForm/SearchMovieForm"

const SavedMovies = () => {
  return (
    <section className="movies">
      <SearchMovieForm extraClass="movies__search-form" />
      <MovieCard name="Большой куш или невероятные приключения" coverUrl="https://api.nomoreparties.co/uploads/stones_in_exile_b2f1b8f4b7.jpeg" duration="115" />
    </section>
  )
}
export default SavedMovies
