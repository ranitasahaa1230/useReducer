import { useCounter } from "./counter-context";
import "./styles.css";

export default function Items() {
  const { state, dispatch } = useCounter();
  return (
    <div className="App">
      <h1>{state.counter}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 42 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 20 })}>
        -
      </button>
    </div>
  );
}
