import { useState } from "react";
import "./App.css";

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCounter) => prevCounter + 1);
    setCount((prevCounter) => prevCounter + 1);
    setCount((prevCounter) => prevCounter + 1);
  };

  return (
    <>
      <div>
        <h1>{count}</h1>
        <Contact />
        <button onClick={increment}>Increment Count</button>
      </div>
    </>
  );
}

export default App;
