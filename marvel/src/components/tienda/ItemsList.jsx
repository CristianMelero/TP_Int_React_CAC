import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react"
import { CardDetail } from "./CardDetail";
import { db } from "../../firebaseConfig/firebase";
import "./ItemsList.css"


export const ItemsList = ()=> {

    const [items, setItems] = useState([]);

    const itemsCollection = collection(db,"products")
  
    const getProducts = async() =>{
        const data = await getDocs(itemsCollection)

        setItems(
            data.docs.map((doc)=>({...doc.data(), id:doc.id}))
        )
        
    }

    useEffect(()=>{
        getProducts()
    }, []);

    return(

        <ul className="itemsGrid container"> 
            {items.map((item)=>(
            <CardDetail 
                key={item.id}
                item={item}
            />
        ))}
    </ul>
    )
}