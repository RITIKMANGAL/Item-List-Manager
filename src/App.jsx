import React, { useState } from "react";
import ItemList from "./components/ItemList";
import InputForm from "./components/InputForm";
import "./App.css";

function App() {
    const [items, setItems] = useState([]);

    const addItem = (newItem) => {
        if (newItem.trim() !== "") {
            setItems([...items, newItem]);
        }
    };

    return (
        <div className="app">
            <h1>Item List Manager</h1>
            <InputForm onAddItem={addItem} />
            <ItemList items={items} />
        </div>
    );
}

export default App;
