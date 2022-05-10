import React, {useEffect, useState} from "react";

function App() {
  const [count, setCount] = useState(0);
  const [coco, setCoco] = useState(0);
  useEffect(( ) => {
    console.log(count)
  }, [count, coco])
  

  useEffect(() => {
    console.log('first rendering')
  }, [])
  const increment = () => {
    setCount(count + 1);
  }
    return (
    <div className="App">
      <h1>Code</h1>
      <button onClick={increment}>Click</button>
      <button onClick={() =>setCoco(coco + 1)}>Click1</button>
    </div>
  )
}

export default App;
