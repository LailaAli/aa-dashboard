import Card from "./components/atoms/Card";
import "./App.scss";
import Heading from "./components/atoms/Heading";
import Button from "components/atoms/Button";
import {ReactComponent as Icon} from "./assets/svg/external-link.svg";

function App() {
  return (
    <Card>
      <Heading level="h6">take action</Heading>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
      </p>
      <Button
        ariaLabel="button"
        icon={<Icon />}
        variant="tertiary"
      >
        Learn more
      </Button>
    </Card>
  );
}

export default App;
