import SlotCompo from "./components/SlotCompo";
import SlotContent from "./components/SlotContent";
import { MyProvider } from "./context/MyCOntext";

const App = () => {
  return (
    <MyProvider>
      <SlotCompo>
        <SlotContent />
      </SlotCompo>
    </MyProvider>
  );
};

export default App;
