function ListGroup() {
  const items = ["New york", "SF", "tokyo", "London", "Paris"];

  if (items.length === 0) return <p>No item Found</p>;

  return (
    <>
      {/* <> is used to wrap the code using a Fragment */}
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
