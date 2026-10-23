import { useState } from "react";
import Movie from "./Movie";
import SortButton from "./SortButton";
import AddMovieForm from "./AddMovieForm";

function MoviesList() {
  // collection of objects representing movies
  const movies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      year: 1994,
      synopsis: "Two imprisoned men find redemption.",
    },
    {
      id: 2,
      title: "The Dark Knight",
      year: 2008,
      synopsis: "Batman fights the menace known as the Joker.",
    },
    {
      id: 3,
      title: "Interstellar",
      year: 2014,
      synopsis: "Explorers travel through a wormhole in space.",
    },
  ];

  const [currentMovies, setCurrentMovies] = useState(movies);

  const movieItems = currentMovies.map(movie => (
    <Movie
      key={movie.id}
      title={movie.title}
      year={movie.year}
      synopsis={movie.synopsis} />
  ))

  const handleReverseMovies = () => {
    // 1. clone the original, so we don’t mutate it.
    let newMovies = [...currentMovies];
    // 2. modify the clone.
    newMovies.reverse();
     // 3. set updated clone in state.
    setCurrentMovies(newMovies);
  }

  const handleSortByTitle = () => {
    let newMovies = [...currentMovies];
    newMovies.sort((a, b) => a.title.localeCompare(b.title));
    setCurrentMovies(newMovies);
  }

  const handleSortByYear = () => {
    let newMovies = [...currentMovies];
    newMovies.sort((a, b) => a.year - b.year);
    setCurrentMovies(newMovies);
  }

  const handleAddMovie = (newMovie) => {
    newMovie.id = currentMovies.length +1;
    setCurrentMovies([...currentMovies, newMovie])
  }
  
  return (
    <div className="MoviesList componentBox">
      <ul> {/* iterate over each movie, print the title in a list */}
        {movieItems}
      </ul>
      <SortButton label="Reverse List" onClick={handleReverseMovies} />
      <SortButton label="Sort By Title" onClick={handleSortByTitle} />
      <SortButton label="Sort By Year" onClick={handleSortByYear} />
      <AddMovieForm onAddMovie={handleAddMovie} />
    </div>
  );
}
export default MoviesList;
