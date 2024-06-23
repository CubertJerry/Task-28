import React from 'react';
import { useCart } from './CartContext';

const CartPage = () => {
    const { state, increaseQuantity, decreaseQuantity } = useCart();
    const totalQuantity = state.items.reduce((acc, item) => acc + item.quantity, 0);
    const totalAmount = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div>
            <h1>Cart</h1>
            <div>
                {state.items.map(item => (
                    <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <img src={item.thumbnail} alt={item.title} style={{ width: '50px' }} />
                        <div>{item.title}</div>
                        <div>${item.price}</div>
                        <div>
                            <button onClick={() => decreaseQuantity(item)}>-</button>
                            {item.quantity}
                            <button onClick={() => increaseQuantity(item)}>+</button>
                        </div>
                    </div>
                ))}
            </div>
            <div>Total Quantity: {totalQuantity}</div>
            <div>Total Amount: ${totalAmount.toFixed(2)}</div>
        </div>
    );
};

export default CartPage;