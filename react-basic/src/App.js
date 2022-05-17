import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";

function App() {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieYear, setMovieYear] = useState("");
  const [movies, setMovies] = useState([
    { title: "coder1", year: 2001 },
    { title: "coder2", year: 2002 },
    { title: "coder3", year: 2003 },
    { title: "coder4", year: 2004 },
  ]);
  useEffect(() =>{
      console.log('render');
  });

  const renderMovies = movies.map((movie) => {
    return (
    <Movie movie={movie} key={movie.title} />
    );
  });
  const addMovie = (event) =>{
    event.preventDefault();
    // 기존 목록에 추가
    setMovies([
      ...movies,
      {
      title: movieTitle,
      year: movieYear,
    }]);
    // 추가된 목록 삭제 
    setMovieTitle('');
    setMovieYear('');
  }
  return (
    <div className="App">
      <h1>Moive List</h1>
      <form onSubmit={addMovie}>
        <input
          type="text"
          value={movieTitle}
          placeholder="영화제목"
          onChange={e => setMovieTitle(e.target.value)}
        ></input>
        <br />
        <input
          type="text"
          value={movieYear}
          placeholder="개봉년도"
          onChange={e => setMovieYear(e.target.value)}
        ></input>
        <br />
        <button type="submit">영화추가</button>
      </form>
      {renderMovies}
    </div>
  );
}

export default App;
