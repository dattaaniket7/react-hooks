import React from "react";
import Multiplier from "./Multiplier";

function App() {
  const [count, setCount] = React.useState(0);

  const handleMultiplier = React.useCallback(() => {
    setCount((prevCount) => prevCount * 1233);
  }, [count]);

  return (
    <>
      Count: {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me!
      </button>
      <Multiplier handleClick={handleMultiplier} />
    </>
  );
}

export default App;
