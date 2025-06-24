import Card from "./components/Card";
import CardCompound from "./components/CardCompound";
import CardNamed from "./components/CardNamed";

const App = () => {
  return (
    <div>
      <Card>
        {/* default slot (Anonymous slot) */}
        <h1>This is my card</h1>
        <p>his scmdk lcds</p>
      </Card>
      <CardNamed
        cardTitle={<h1> This is my card title</h1>}
        cardContent={<p>This is content crad</p>}
      />
      <div>
        <CardCompound.Title>
          <h1>Card Title</h1>
        </CardCompound.Title>
        <CardCompound.Content>
          <p>Crad content goes here</p>
        </CardCompound.Content>
      </div>
    </div>
  );
};

export default App;
