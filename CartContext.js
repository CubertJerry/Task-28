import React, { createContext, useReducer, useContext } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] };
        case 'REMOVE_ITEM':
            return { ...state, items: state.items.filter(item => item.id !== action.payload.id) };
        case 'INCREASE_QUANTITY':
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                ),
            };
        case 'DECREASE_QUANTITY':
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item
                ).filter(item => item.quantity > 0),
            };
        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, { items: [] });

    const addItem = item => dispatch({ type: 'ADD_ITEM', payload: item });
    const removeItem = item => dispatch({ type: 'REMOVE_ITEM', payload: item });
    const increaseQuantity = item => dispatch({ type: 'INCREASE_QUANTITY', payload: item });
    const decreaseQuantity = item => dispatch({ type: 'DECREASE_QUANTITY', payload: item });

    return (
        <CartContext.Provider value={{ state, addItem, removeItem, increaseQuantity, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);