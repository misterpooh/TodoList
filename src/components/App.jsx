import React, { useState } from "react";
import Item from "./Item";

function App() {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");
  function changeItem(event) {
    setItem(event.target.value);
  }
  function addItem() {
    setItems((prevItems) => [...prevItems, item]);
    setItem("");
  }
  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((element, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={changeItem} value={item} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todo, index) => (
            <Item key={index} id={index} item={todo} onChecked={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
