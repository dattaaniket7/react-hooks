import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const incrementor = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(incrementor);
  }, [counter]);

  return (
    <>
      <div>
        <h2>{counter}</h2>
        <h1 onClick={() => setCounter(prevCounter + 1)}>Use Effect 🔥</h1>
        <input onChange={(e) => setInput(e.target.value)} type="text" />
      </div>
    </>
  );
}

export default App;
