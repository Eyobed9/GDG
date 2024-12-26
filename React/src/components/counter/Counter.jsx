import { useState } from "react";
import "./styles.css"

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <h1>Counter</h1>

        <button onClick={increment}>Increment</button>
        <button onClick={decrement} disabled={count === 0 ? true : false}>
          Decrement
        </button>
        <button onClick={() => setCount(0)}>Reset</button>
        <p id="count">{count}</p>
      </div>
    </div>
  );
}

export default Counter;
