import { useState, useEffect } from "react";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

import "./amountInput.css";

const AmountInput = (props) => {
    const [quantity, setQuantity] = useState(props.quantity | 0);

    const handleClickPlus = () => {
        setQuantity(quantity + 1);
    }

    const handleClickLess = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    }

    useEffect(() => {
        props.onSelectQuantity(quantity);
    }, [quantity]);

    return (
        <div className="amount-input">
            <button className="amount-input__button" onClick={handleClickLess}> <BsFillCaretLeftFill />  </button>
            <span> {props.quantity } </span>
            <button className="amount-input__button" onClick={handleClickPlus}> <BsFillCaretRightFill /> </button>
        </div>
    )
}

export default AmountInput;