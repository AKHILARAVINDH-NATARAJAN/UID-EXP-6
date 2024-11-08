// src/App.js
import React, { useState } from "react";
import ItemForm from "./ItemForm";
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <div>
      <h1>Item List</h1>
      <ItemForm onAddItem={addItem} />
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <strong>{item.name}</strong>: {item.description} (Quantity: {item.quantity})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
