import Card from "./component/Card";

const App = () => {
  return (
    <div>
      <Card>
        <Card.title>SOmething titlte</Card.title>
        <Card.content>SOmething related to content</Card.content>
      </Card>
      <Card>
        <Card.title>1 titlte</Card.title>
        <Card.content>1 content</Card.content>
      </Card>
    </div>
  );
};

export default App;
