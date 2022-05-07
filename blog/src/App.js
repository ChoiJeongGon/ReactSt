// 터미널(WARNING 메세지 없애기) ->  /* eslint-disable */
import './App.css';
import { useState } from 'react';

function App() {

  const logo = 'ReactBlog'
  // State쓰던 html은 자동 재랜더링됨 (자주 변경)
  let [글제목, 글제목변경] = useState(['남자 코트 추천',' 우동 맛집', '파이썬독학']);
  let [좋아요, 변경] = useState(0);
 
  // function 제목바꾸기(){
  //   // state를 deep copy 하기 [...]
  //   const newArray = [...글제목];
  //   newArray[0] = '여자 코트 추천';
  //   글제목변경( newArray );
  // }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <div className="list">
        <h4>{ 글제목[0] } <span onClick={ () => { 변경(좋아요+1) }}>👌</span> 
        {좋아요} </h4>
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

      <Modal />

    </div>
  );
}
// Component
function Modal(){
  return(
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}


export default App;
 