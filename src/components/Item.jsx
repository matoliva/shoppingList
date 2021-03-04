import { useState } from "react";
import AmountInput from './AmountInput';
import PropTypes from 'prop-types';

import './item.css';

const Item = ({id, name, quantity = 0, isSelected = false, onSelectQuantity}) => {
    const [checked, setChecked] = useState(isSelected);

    const handleClick = () => {
        setChecked(!checked);
    }

    const handleQuantity = (updatedItem) => {
        const newState = { id: id, itemName: name, quantity: updatedItem };
        onSelectQuantity(newState);
    }

    return (
        <div className="item">
            <div className="item__desc">
                <input
                    className="item__desc__check" 
                    type="checkbox"
                    defaultChecked={checked}
                    onClick={ handleClick }></input>
                <span className={ checked ? 'item__check--checked' : '' } >{name}</span>
            </div>
            <AmountInput 
                quantity={quantity} 
                onSelectQuantity={handleQuantity} />
        </div>
    )
}

Item.propTypes = {
    id: PropTypes.number.isRequired, 
    name: PropTypes.string.isRequired, 
    quantity: PropTypes.number, 
    isSelected: PropTypes.bool,
    onSelectQuantity: PropTypes.func.isRequired
};

export default Item;