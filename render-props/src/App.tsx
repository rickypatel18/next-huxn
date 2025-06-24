import Counter from "./components/Counter";
import MouseTracker from "./components/MouseTracker";

const App = () => {
  return (
    <div>
      <Counter
        render={(count: number) => <p>The current Count is: {count}</p>}
      />
      <MouseTracker
        render={(position: any) => (
          <p>
            Mouse is at X({position.x}) - Y({position.y})
          </p>
        )}
      />
    </div>
  );
};

export default App;
