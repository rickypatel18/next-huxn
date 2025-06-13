import { useCounter } from "./store";

const Other = () => {
  //   const increment = useCounter((state) => state.increment);
  //   const decrement = useCounter((state) => state.decrement);
  const { increment, decrement } = useCounter();
  return (
    <div>
      <button onClick={increment}>Inc</button>
      <button onClick={decrement}>Dec</button>
    </div>
  );
};

export default Other;
