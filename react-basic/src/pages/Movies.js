import React, { useState } from "react";
import Movie from "../components/Movie";
import MovieForm from "../components/MovieForm";
const Movies = () => {
  const [movies, setMovies] = useState([]);

  const removeMovie = (id) => {
    setMovies(
      movies.filter((movie) => {
        return movie.id !== id;
      })
    );
  };

  const renderMovies = movies.length
    ? movies.map((movie) => {
        return <Movie movie={movie} key={movie.id} removeMovie={removeMovie} />;
      })
    : "추가된 영화가 없습니다.";
  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };
  return (
    <>
      <h1>Moive List</h1>
      <MovieForm addMovie={addMovie} />
      {renderMovies}
    </>
  );
};
export default Movies;
