// 터미널(WARNING 메세지 없애기) ->  /* eslint-disable */
import './App.css';
import { useState } from 'react';

function App() {

  const logo = 'ReactBlog'
  // State쓰던 html은 자동 재랜더링됨 (자주 변경)
  let [글제목, b] = useState(['남자 코트 추천',' 우동 맛집', '파이썬독학']);
  let [좋아요, 변경] = useState(0);
 
  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>

      <div className="list">
        <h4>{ 글제목[0] } <span onClick={ () => { 변경(좋아요+1) }}>👌</span> {좋아요} </h4>
        <p>5월 7일 발행</p>
      </div>

      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>5월 7일 발행</p>
      </div>

      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>5월 7일 발행</p>
      </div>
    </div>
  );
}

export default App;
 