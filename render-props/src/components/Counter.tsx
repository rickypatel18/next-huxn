import { useState } from "react";

const Counter = ({ render }: any) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <button onClick={increment}>Increment</button>
      {render(count)}
    </div>
  );
};

export default Counter;
