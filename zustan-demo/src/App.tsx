import Other from "./Other";
import { useCounter } from "./store";

const App = () => {
  const { count } = useCounter();

  return (
    <div>
      <h1>COunt: {count}</h1>
      <Other />
    </div>
  );
};

export default App;
