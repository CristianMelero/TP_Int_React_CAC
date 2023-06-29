import React, { createContext, useState } from "react";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addToCart = (product)=> {
        
        const repeatProduct = cart.find((item) => item.id === product.id);

        if(repeatProduct){
            setCart(cart.map((item)=> item.id === product.id ? {...item, quanty: repeatProduct.quanty +1} : item))
        }else{
            setCart([...cart, product])
        }
    };

	const removeItem = (itemRemove) => {
		setCart(cart.filter((cartItem) => cartItem.id !== itemRemove.id));
	};
	const removeAll = () => {
		setCart([]);
	};
	const totalPrice = () => {
		return cart.reduce((acum, item) => acum + item.quantity * item.price, 0);
	};
	const totalProducts = () => {
		return cart.reduce((acum, item) => acum + item.quantity, 0);
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				setCart,
				removeAll,
				removeItem,
				totalProducts,
				totalPrice,
			}}>
			{children}
		</CartContext.Provider>
	);
};
