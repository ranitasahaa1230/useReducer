import { createContext, useContext, useReducer } from "react";
import { counterFunc } from "./CounterReducer";

const CounterContext = createContext(null);

const useCounter = () => useContext(CounterContext);

const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterFunc, { counter: 0 });

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export { CounterProvider, useCounter };
