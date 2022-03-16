import "./styles.css";
import { items } from "./data";
import { useCart } from "./cart-context";

export default function App() {
  const { state, dispatch } = useCart();
  return (
    <div className="App">
      <h1>Cart Management</h1>
      <h2>Items:{state.quantity}</h2>
      <h3>Price:{state.priced}</h3>
      {items.map((product) => (
        <div key={product.id}>
          <span>{product.name}</span> <span>{product.price}</span>
          <button
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
          >
            Add to Cart
          </button>
          <hr />
        </div>
      ))}
      <h3>Cart Items</h3>
      {state.cartItems.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span> <span>{item.price}</span>
          <button
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_CART", payload: item })
            }
          >
            Remove From Cart
          </button>
        </div>
      ))}
    </div>
  );
}
