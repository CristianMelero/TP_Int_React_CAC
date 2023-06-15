import React, { createContext, useState } from 'react'


export   const CartContext = createContext();
export   const CartProvider= ({children})=>{

    const [cart, setCart] = useState([]);


const removeItem= (itemRemove) => {
  setCart(cart.filter(cartItem => cartItem.id !== itemRemove.id));
  
}
const removeAll=()=> {
  setCart([])
}
 const totalPrice=()=> {
   return cart.reduce((count, item) => count + item.quanty * item.price, 0)
 }
  const totalProducts=()=> {
    return cart.reduce((count, items) => count + items.quanty, 0 )
  }

 return (
  <CartContext.Provider value={ {cart, setCart, removeAll, removeItem, totalProducts, totalPrice }}>
      {children}
  </CartContext.Provider>
)
}