import React from 'react';
import CartPage from './CartPage';
import { useCart } from './CartContext';

const App = () => {
    const { addItem } = useCart();
    const products = [
        {
            id: 1,
            title: "iPhone 9",
            price: 549,
            thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        },
        {
            id: 2,
            title: "iPhone X",
            price: 899,
            thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        },
        // ... more products
    ];

    return (
        <div>
            <h1>Products</h1>
            <div>
                {products.map(product => (
                    <div key={product.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <img src={product.thumbnail} alt={product.title} style={{ width: '50px' }} />
                        <div>{product.title}</div>
                        <div>${product.price}</div>
                        <button onClick={() => addItem(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
            <CartPage />
        </div>
    );
};

export default App;