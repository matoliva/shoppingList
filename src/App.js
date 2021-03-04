import { useState } from 'react';
import ListItems from './components/ListItems';
import AddItem from './components/AddItem';

import './App.css';

function App() {
  const [items, setItems] = useState([
    { id: 1, itemName: 'item 1', quantity: 1, isSelected: false },
    { id: 2, itemName: 'item 2', quantity: 3, isSelected: true },
    { id: 3, itemName: 'item 3', quantity: 2, isSelected: false },
  ]);

  const [totalQuantity, setTotalQuantity] = useState(0);

  const handleNewItem = (newItem) => {
    const item = {...newItem, id: items.length + 1}

    setItems([...items, item]);
  };

  const handleQuantity = (updatedItem) => {
    const updatedItems = items.map(item => {
      if (item.id === updatedItem.id) {
        item.quantity = updatedItem.quantity;
      }
      return item;
    });

    setItems(updatedItems);
    totalCount();
  };

  const totalCount = () => {
    const total = items.reduce((acum, current) => acum += current.quantity, 0);

    setTotalQuantity(total);
  }

  return (
    <div className="app">
      <AddItem 
        onAddNewItem={handleNewItem}/>
      <ListItems
        listItems={items}
        onSelectQuantity={handleQuantity}
      />
      <div className="app__quantity">
        <span> Total: {totalQuantity} </span>
      </div>
    </div>
  );
}

export default App;
