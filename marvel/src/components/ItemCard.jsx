import "./ItemCard.css"
import { Count } from "./Count";
export const ItemCard= ({item})=> {
    
    

    return (
    
        <div className="p-2 container">
            <div className="card text-center" style={{width:"16rem", height:"100%"}}>
                <img src={item.img} className="card-img-top imgCard" alt={item.name}/>
                <div className="card-body">
                    <h5 className="card-title nameCard">{item.name}</h5>
                    <p className="card-text text-dark">{item.detail}</p>
                    <Count/>
                    <a href="#" class="btn btn-secondary mt-4" style={{width:"10rem", fontSize:"26px"}}>Añadir al carrito</a>
                </div>
            </div>
          
          
        </div>
      );
}