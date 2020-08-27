import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { name, price } = props.course;
    return (
        <div>
            <li>
                <p>{name}: ${price}</p>
            </li>
        </div>
    );
};

export default Cart;