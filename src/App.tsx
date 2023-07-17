import { useState, useMemo } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  //After usememo
  const expensiveCalculation = () => {
    return Math.random() * 1000;
  };

  const renderedValue = useMemo(() => expensiveCalculation(), [count]);

  return (
    <div>
      <p onClick={() => setCount((prevCount) => prevCount + 1)}>
        Count: {count}
      </p>
      <p>Rendered value: {renderedValue}</p>
    </div>
  );
};

export default App;
