import React, { useState } from "react";

function InputForm({ onAddItem }) {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddItem = () => {
        onAddItem(inputValue);
        setInputValue(""); // Clear the input field after adding
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter an item"
            />
            <button onClick={handleAddItem}>Add Item</button>
        </div>
    );
}

export default InputForm;
