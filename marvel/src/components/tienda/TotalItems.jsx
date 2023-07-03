import { CartContext } from '../../context/cartContext.jsx';
import { useContext } from "react";

export const TotalItems = () => {

  //Icono carrito y suma de unidades

    const { cart } = useContext(CartContext);

    const itemsQuanty = cart.reduce((acum, elem) => acum + elem.quanty, 0)

  return (
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">{itemsQuanty} <span className="visually-hidden">unread messages</span></span>

  )
}
