import React, { useState } from "react";

const MovieForm = ({ addMovie }) => {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieYear, setMovieYear] = useState("");
  const [titleError, settitleError] = useState("");
  const [yearError, setyearError] = useState("");

  const resetForm = () => {
    // 추가된 목록 삭제
    setMovieTitle("");
    setMovieYear("");
  };

  const validateForm = () => {
    resetError();
    let validated = true;
    if (!movieTitle) {
      settitleError("영화제목을 넣어주세요");
      validated = false;
    }

    if (!movieYear) {
      setyearError("개봉년도를 넣어주세요");
      validated = false;
    }

    return validated;
  };

  const resetError = () => {
    settitleError("");
    setyearError("");
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      addMovie({
        id: Date.now(),
        title: movieTitle,
        year: movieYear,
      });
      resetError();
      resetForm();
    }
   
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
      <div style={{color: 'red'}}>{titleError}</div>
      <input
        type="number"
        value={movieYear}
        placeholder="개봉년도"
        onChange={(e) => setMovieYear(e.target.value)}
      ></input>
      <br />
      <div style={{color: 'red'}}>{yearError}</div>
      <button type="submit">영화추가</button>
    </form>
  );
};

export default MovieForm;
