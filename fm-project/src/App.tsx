import Carousel from "./components/Carousel";
import ProgressSteps from "./components/ProgressSteps";
import ScrollAnimation from "./components/ScrollAnimation";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div>
      <Sidebar/>
      <Carousel />
      <ScrollAnimation/>
      <ProgressSteps/>
    </div>
  );
};

export default App;
