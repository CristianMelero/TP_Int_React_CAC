import "./CardDetail.css"
import Swal from "sweetalert2"
import { useContext, useState } from "react";
import { CartContext } from '../../context/cartContext.jsx';
import { ItemCount } from "./ItemCount";
import { Link } from "react-router-dom";





export const CardDetail= ({item})=> {
    const { addToCart } = useContext(CartContext);
    const [countCart, setCountCart] = useState([])
    
    const onAdd = (quantity) => {

        addToCart(item, quantity);
  
  setCountCart(quantity)
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: `${quantity} ${item.name} agregados al carrito`,
    showConfirmButton: false,
    timer: 1500
  })
  
    }
    
    

    

    return (
    
        <div className="p-2 container">
            <div className="card text-center bg-dark " style={{width:"18rem"}}>
                <img src={item.img} className="card-img-top p-4 rounded mx-auto d-block" alt={item.name}/>
                <div className="card-body">
                    <h3 className="card-title nameCard text-light">{item.name}</h3>
                    <h5 className="priceCard text-light">${item.price}</h5>

                    <ItemCount initial={1} stock={item.stock} onAdd={onAdd}/>

                    <Link to={`/detail/${item.id}`}>
                        <a className="text-secondary mt-4" style={{width:"13rem", fontSize:"22px"}}>
                            Ver detalles
                        </a> 
                    </Link>

                    
                    
                </div>
            </div>
        </div>
      );
}