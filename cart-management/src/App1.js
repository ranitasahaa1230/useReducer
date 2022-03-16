import "./styles.css";
import { items } from "./data";
import { useReducer } from "react";

export default function App1() {
  const increasePrice = (state, id) => {
    // console.log(state.products.find((item)=>console.log(item)))//to find a particular item
    //only prod which it found
    return {
      products: state.products.map((item) => {
        // console.log(item)
        return item.id === id ? { ...item, price: item.price + 100 } : item;
      })
    };
  };

  const reducerFunc = (state, action) => {
    switch (action.type) {
      case "LOW_TO_HIGH":
        //  return console.log('HIGH')
        return {
          ...state,
          products: state.products.sort(
            (a, b) =>
              // console.log(a,"\t",b)
              a.price - b.price
          )
        };
      case "HIGH_TO_LOW":
        return {
          ...state,
          products: state.products.sort((a, b) => b.price - a.price)
        };
      //  return console.log('HIGH')
      case "INCREMENT":
        // return console.log('added')
        // console.log(action.payload)
        return increasePrice(state, action.payload);
      // return state;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducerFunc, { products: items });
  return (
    <div className="App">
      <fieldset>
        <legend>Sort by Price</legend>
        <div className="filter-price">
          <label htmlFor="filter-low-high">
            <input
              type="radio"
              name="radio-filter"
              id="filter-low-high"
              onClick={() => dispatch({ type: "LOW_TO_HIGH" })}
            />
            Price- low to high
          </label>
          <label htmlFor="filter-high-low">
            <input
              type="radio"
              name="radio-filter"
              id="filter-high-low"
              onClick={() => dispatch({ type: "HIGH_TO_LOW" })}
            />
            Price- high to low
          </label>
        </div>
      </fieldset>
      <hr />
      <hr />
      {state.products.map((product) => (
        <div key={product.id}>
          <span>{product.name}</span> <span>{product.price}</span>
          <button
            onClick={() => dispatch({ type: "INCREMENT", payload: product.id })}
          >
            Increase by 100
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
}
