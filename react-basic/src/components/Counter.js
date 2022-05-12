import React ,{ useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const clickString = props.click || 'Click';
  
  return (
  <button onClick={increment}>
      {clickString} {count}
      </button>
      );
};
export default Counter;
// src -> components안에 js를 만들어 식을 입력하고 App.js에서 import