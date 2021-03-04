import { useState, useEffect } from "react";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import PropTypes from 'prop-types';

import "./amountInput.css";

const AmountInput = ({quantity = 0, onSelectQuantity}) => {
    const [_quantity, setQuantity] = useState(quantity);

    const handleClickPlus = () => {
        setQuantity(_quantity + 1);
    }

    const handleClickLess = () => {
        if (_quantity > 0) {
            setQuantity(_quantity - 1);
        }
    }

    useEffect(() => {
        onSelectQuantity(_quantity);
    }, [_quantity]);

    return (
        <div className="amount-input">
            <button id="btn-subtract" className="amount-input__button" onClick={handleClickLess}> <BsFillCaretLeftFill />  </button>
            <span>{_quantity}</span>
            <button id="btn-add" className="amount-input__button" onClick={handleClickPlus}> <BsFillCaretRightFill /> </button>
        </div>
    )
}

AmountInput.propTypes = {
    quantity: PropTypes.number,
    onSelectQuantity: PropTypes.func.isRequired
};

export default AmountInput;