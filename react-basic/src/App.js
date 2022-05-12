import React, { useState, useEffect } from "react";

function App() {
  const [condition, setConditon] = useState(false);
  const toggle = () => setConditon(!condition);
  useEffect(() => {
      console.log(condition);
  },[condition])
  const renderCondition = condition
    ? 'True'
    : 'False'
  return(
    <div className="App">
        <h1>Code</h1>
        <div>
       {renderCondition}
        </div>
        <button onClick={toggle}>Toggle</button>
    </div>
  )
}

export default App;
