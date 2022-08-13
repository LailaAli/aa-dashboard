import Card from "./components/atoms/Card";
import "./App.scss";
import Heading from "./components/atoms/Heading";

function App() {
  return (
    <Card>
      <Heading level="h6">take action</Heading>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
      </p>
    </Card>
  );
}

export default App;
