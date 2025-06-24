import {
  Componentsfactory,
  type ComponentConfig,
} from "./utils/Componentfactory";

const buttonConfig: ComponentConfig = {
  type: "button",
  props: {
    label: "Click me",
    onclick: () => alert("hello"),
    disabled: false,
  },
};

const cardConfig: ComponentConfig = {
  type: "card",
  props: {
    title: "Hello",
    content: "This is a card",
    footer: "footer content",
  },
};

const App = () => {
  return <div>
    {Componentsfactory(buttonConfig)}
    {Componentsfactory(cardConfig)}
  </div>;
};

export default App;
