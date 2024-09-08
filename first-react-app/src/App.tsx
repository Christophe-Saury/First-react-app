import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New york", "SF", "tokyo", "London", "Paris"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
