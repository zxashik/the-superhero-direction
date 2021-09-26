import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const cast of cart) {
        total = total + cast.salary;
    }

    return (
        <div>
            <h4>Member Added: {props.cart.length}</h4>
            <h4>Total Cost: ${total} </h4>
            <hr />
            {
                cart.map(pd => <h4 className='orange'>{pd.name}</h4>)
            }
        </div>
    );
};

export default Cart;