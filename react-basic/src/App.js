import React, {useState} from "react";

function App() {
  const [text, setText] = useState('hello');
  const onSubmit = () => {
    alert("submitted");
  };

  const onKeyUp = (event) => {
    if (event.KeyCode === 13) {
      onSubmit();
    }
  };

  // let text = 'hello1';

  const updateText = () => {
    // text = 'Coder';
    setText('Coder')
    console.log(text)
  }

  return (
    <div className="App">
      <input onKeyUp={onKeyUp} />
      <button onClick={onSubmit}>Submit</button>


      <br /><br />

      <span>{text}</span>
      <button onClick={updateText}>Update</button>
    </div>
  );
}

export default App;
