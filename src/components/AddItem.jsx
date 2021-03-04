import { useState } from 'react';
import './AddItem.css';

const AddItem = ({ onAddNewItem }) => {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        if (event.key === 'Enter') {
            handleAddButtonClick();
        } else {
            setInputValue(event.target.value);
        }
    };

    const handleAddButtonClick = () => {
        const newItem = {
            itemName: inputValue,
            quantity: 0,
            isSelected: false
        };
        setInputValue('');
        onAddNewItem(newItem);
    };
    return (
        <div className="app__add">
            <input
                type="text"
                className="app__add__input"
                value={inputValue}
                onChange={handleChange}
                onKeyPress={handleChange}
                placeholder="  Add an item..." />
            <button
                className="app__add__button"
                onClick={handleAddButtonClick}>
                +
            </button>
        </div>
    )
}

export default AddItem;