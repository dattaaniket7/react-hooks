import { useContext, useState, createContext, ReactNode } from "react";
import "./App.css";

interface CounterContextType {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const CounterContext = createContext<CounterContextType | undefined>(undefined);

interface CounterProviderProps {
  children: ReactNode;
}

const CounterProvider = ({ children }: CounterProviderProps) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((counter) => counter + 1);
  const decrement = () => setCount((counter) => counter - 1);

  const contextValue: CounterContextType = {
    count,
    increment,
    decrement,
  };

  return (
    <CounterContext.Provider value={contextValue}>
      {children}
    </CounterContext.Provider>
  );
};

const IncrementCounter = () => {
  const { increment } = useContext(CounterContext)!;
  return <button onClick={increment}>Increment</button>;
};

const DecrementCounter = () => {
  const { decrement } = useContext(CounterContext)!;
  return <button onClick={decrement}>Decrement</button>;
};

const ShowResult = () => {
  const { count } = useContext(CounterContext)!;
  return <h1>{count}</h1>;
};

const App = () => (
  <CounterProvider>
    <ShowResult />
    <IncrementCounter />
    <DecrementCounter />
  </CounterProvider>
);

export default App;
