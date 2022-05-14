import React from "react";

function App() {
  const movies = [
    { title: "coder1", year: 2001 },
    { title: "coder2", year: 2002 },
    { title: "coder3", year: 2003 },
    { title: "coder4", year: 2004 },
  ];

  const renderMovies = movies.map(movie => {
    return (
      <div className="movie" key={movie.title}>
        <div className="movie-title">{movie.title}</div>
        <div className="movie-year">{movie.year}</div>
      </div>
    );
  });
  return (
    <div className="App">
      <h1>Moive List</h1>
      {renderMovies}
    </div>
  );
}

export default App;
