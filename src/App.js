import { useState } from 'react';
import Item from './components/Item';

import './App.css';

function App() {
  const [items, setItems] = useState([
    { id: 1, itemName: 'item 1', quantity: 1, isSelected: false },
    { id: 2, itemName: 'item 2', quantity: 3, isSelected: true },
    { id: 3, itemName: 'item 3', quantity: 2, isSelected: false },
  ]);

  const [totalQuantity, setTotalQuantity] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleQuantity = (updatedItem) => {
    const updatedItems = items.map( item => {
      if (item.id === updatedItem.id) {
        item.quantity = updatedItem.quantity;
      }
      return item;
    });

    setItems(updatedItems);
    totalCount();
  };

  const totalCount = () => {
    const total = items.reduce((acum, current) => acum += current.quantity , 0);
    
    setTotalQuantity(total);
  }

  const handleChange = (event) => {
    if(event.key === 'Enter' ) {
      handleAddButtonClick();
    } else {
      setInputValue(event.target.value);
    }
  };

  const handleAddButtonClick = () => {
    const newItem = {
      id: items.length + 1,
      itemName: inputValue,
      quantity: 0,
      isSelected: false
    };

    setItems([...items, newItem]);
    setInputValue('');
  };

  return (
    <div className="app">
      <div className="app__add">
        <input 
          type="text" 
          className="app__add__input" 
          value={inputValue} 
          onChange={handleChange}
          onKeyPress={handleChange}
          placeholder="  Add an item..."/>
        <button 
          className="app__add__button" 
          onClick={handleAddButtonClick}> + </button>
      </div>
      {items.map((item) => 
        <Item
          key={item.id}
          id={item.id} 
          onSelectQuantity={handleQuantity}
          name={item.itemName}
          quantity={item.quantity}
          isSelected={item.isSelected} 
        />
      )}
      <div className="app__quantity">
        <span> Total: {totalQuantity} </span>
      </div>
    </div>
  );
}

export default App;
