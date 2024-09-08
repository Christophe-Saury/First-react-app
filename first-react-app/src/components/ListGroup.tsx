import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New york", "SF", "tokyo", "London", "Paris"];

  // EventHandler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      {/* <> is used to wrap the code using a Fragment */}
      <h1>List</h1>
      {items.length === 0 && <p>No Item Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
