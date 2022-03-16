import { createContext, useContext, useReducer } from "react";
import { counterReducer } from "./counterReducer";

const CounterContext = createContext(null);

const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, { counter: 0 });

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};
const useCounter = () => useContext(CounterContext);

export { CounterProvider, useCounter };
