import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  return (
    <div>
      <Button color="secondary" onClick={() => console.log("CLicked")}>
        My button
      </Button>
    </div>
  );
}

export default App;
