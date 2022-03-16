import { useItems } from "./items-context";
import "./styles.css";

const items = [
  {
    id: 1,
    name: "kala chasma",
    price: 1000
  },
  {
    id: 2,
    name: "laal chhadi",
    price: 500
  },
  {
    id: 3,
    name: "jalebi",
    price: 50
  },
  {
    id: 4,
    name: "japani joota",
    price: 10000
  }
];

export default function App() {
  const { state, dispatch } = useItems();
  // const {cartItems,totalPrice}=state;
  return (
    <div className="App">
      <h1> Cart </h1>
      <h2>Items: {state.cartItems}</h2>
      <h3>Total Price: {state.totalPrice}</h3>
      {items.map(({ id, name, price }) => (
        <div key={id}>
          <p>{name}</p>
          <p>{price}</p>
          <button
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: price })}
          >
            Add to Cart
          </button>
          <button
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_CART", payload: price })
            }
          >
            Remove from Cart
          </button>
          <button>Add to Wishlist</button>
          <hr />
        </div>
      ))}
      ]{" "}
    </div>
  );
}
