import { useState, useEffect, useLayoutEffect } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  useLayoutEffect(() => {
    function test() {
      if (counter === 0) {
        setCounter(Math.random() * 200);
      }
    }
    test();
  }, [counter]);

  return (
    <>
      <div>
        <h2>{counter}</h2>
        <h1 onClick={() => setCounter(0)}>Use Layout Effect</h1>
      </div>
    </>
  );
}

export default App;
