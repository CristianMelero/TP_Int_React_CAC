import "./CardDetail.css"
import { Count } from "./Count";
import { useContext, useState } from "react";
import { CartContext } from '../../context/cartContext.jsx';




export const CardDetail= ({item})=> {
    //const { addToCart } = useContext(CartContext);
    const { cart, setCart } = useContext(CartContext);
    //const [countCart, setCountCart] = useState(0);

    const addToCart = (item)=> {
        
        const repeatProduct = cart.find((item) => item.id === item.id);

        if(repeatProduct){
            setCart(cart.map((item)=> item.id === item.id ? {...item, quanty: repeatProduct.quanty +1} : item))
        }else{
            setCart([...cart, item])
        }
    };
    

    

    return (
    
        <div className="p-2 container">
            <div className="card text-center bg-dark " style={{width:"18rem"}}>
                <img src={item.img} className="card-img-top p-4 rounded mx-auto d-block" alt={item.name}/>
                <div className="card-body">
                    <h3 className="card-title nameCard text-light">{item.name}</h3>
                    <h5 className="priceCard text-light">${item.price}</h5>

                    <Count/>

                    <button
                        className="btn btn-secondary mt-4" 
                        style={{width:"13rem", fontSize:"22px"}}
                        initial={1} 
                        stock={item.stock} 
                        onClick={()=> addToCart(item)}
                    >
                            Agregar al carrito
                    </button>
                    
                </div>
            </div>
        </div>
      );
}