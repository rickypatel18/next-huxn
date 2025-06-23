// import TodoList from "./components/TodoList";
// import { printProps } from "./utils/printProps";

// const TodoListWrapper = printProps(TodoList);

import { withLoading } from "./utils/withLoading";
import MyComponent from "./components/MyComponent";
import { useEffect, useState } from "react";

const Mycompowithload = withLoading(MyComponent);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setData("Data fetched");
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {/* <TodoListWrapper one={1} two="hello" three={{ name: "huxn" }} /> */}
      <Mycompowithload isLoading={isLoading} data={data} />
    </>
  );
};

export default App;
