import React, { createContext, useState } from "react";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	//agrega productos al carrito
	const addToCart = (product, quantity) => {
		const repeatProduct = cart.find((item) => item.id === product.id);

		if (repeatProduct) {
			setCart(
				cart.map((item) =>
					item.id === product.id
						? {
								...item,
								quanty: (repeatProduct.quanty += quantity),
						  }
						: item,
				),
			);
		} else {
			setCart([...cart, { ...product, quanty: quantity }]);
		}
	};

	//Eliminar item
	const removeItem = (itemRemove) => {
		setCart(cart.filter((cartItem) => cartItem.id !== itemRemove.id));
	};

	//Vacias carrito
	const removeAll = () => {
		setCart([]);
	};

	//Precio total
	const totalPrice = () => {
		return cart.reduce((acum, item) => acum + item.quanty * item.price, 0);
	};

	//Total de productos
	const totalProducts = () => {
		return cart.reduce((acum, item) => acum + item.quanty, 0);
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
