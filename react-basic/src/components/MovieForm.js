import React, {useState} from "react";

const MovieForm = ({addMovie}) => {
  const [movieTitle, setMovieTitle] = useState('');
  const [movieYear, setMovieYear] = useState('');

  const resetForm = () =>{
  // 추가된 목록 삭제
  setMovieTitle('');
  setMovieYear('');
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addMovie({
        title: movieTitle,
        year: movieYear,
    });
    resetForm();
  
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={movieTitle}
        placeholder="영화제목"
        onChange={(e) => setMovieTitle(e.target.value)}
      ></input>
      <br />
      <input
        type="text"
        value={movieYear}
        placeholder="개봉년도"
        onChange={(e) => setMovieYear(e.target.value)}
      ></input>
      <br />
      <button type="submit">영화추가</button>
    </form>
  );
};

export default MovieForm;
