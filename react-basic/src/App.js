import React, { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [buttonName, serButtonName] = useState('클릭');
  const clickButton = () =>{
    serButtonName('click');
  }
  return (
    <div className="App">
      <h1>Code</h1>
      <Counter click="Click1"/>
      <Counter click={buttonName}/>
      <Counter />
      <button onClick={clickButton}>Click</button>
    </div>
  );
}

export default App;
