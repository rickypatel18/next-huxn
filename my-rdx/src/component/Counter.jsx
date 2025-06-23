import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../app/features/counter/counterSlice";

const Counter = () => {
  // read the data from store
  const count = useSelector((state) => state.counter.value);

  //    changing the data by actions
  const dispatch = useDispatch();

  return (
    <div>
      <h1> {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
