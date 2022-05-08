import "./App.css";

function App() {
  const onSubmit = () => {
    alert("submitted");
  };

  const onKeyUp = (event) => {
    if (event.KeyCode === 13) {
      onSubmit();
    }
  }

  return (
    <div className="App">
      <input onKeyUp={onKeyUp} />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}

export default App;
