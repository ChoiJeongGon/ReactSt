import React from "react";
import Movie from "./components/Movie";

function App() {
  const movies = [
    { title: "coder1", year: 2001 },
    { title: "coder2", year: 2002 },
    { title: "coder3", year: 2003 },
    { title: "coder4", year: 2004 },
    { title: "coder5", year: 2005 },
  ];

  const renderMovies = movies.map(movie => {
    return (
      <Movie movie={movie} key={movie.title}/>
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
