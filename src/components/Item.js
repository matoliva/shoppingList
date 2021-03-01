import { useState } from "react";
import AmountInput from './AmountInput';

import './item.css';

const Item = (props) => {
    const [checked, setChecked] = useState(props.isSelected | false);

    const handleClick = () => {
        setChecked(!checked);
    }

    const handleQuantity = (updatedItem) => {
        const newState = { id: props.id, itemName: props.name, quantity: updatedItem };
        props.onSelectQuantity(newState);
    }

    return (
        <div className="item">
            <div className="item__desc">
                <input
                    className="item__desc__check" 
                    type="checkbox"
                    defaultChecked={checked}
                    onClick={ handleClick }></input>
                <span className={ checked ? 'item__check--checked' : '' } >{props.name}</span>
            </div>
            <AmountInput 
                quantity={props.quantity} 
                onSelectQuantity={handleQuantity} />
        </div>
    )
}

export default Item;