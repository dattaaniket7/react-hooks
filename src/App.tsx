import { useRef, useEffect } from "react";

function App() {
  const titleRef = useRef();

  useEffect(() => {
    console.log(titleRef.current.offsetHeight);
  }, []);
  return (
    <div>
      <h1 ref={titleRef}>Hello Reducer</h1>
    </div>
  );
}

export default App;
