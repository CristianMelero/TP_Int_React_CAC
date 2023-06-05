import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react"
import { ItemCard } from "./ItemCard";
import { db } from "../firebaseConfig/firebase";
import "./Items.css"


export const Items = ()=> {

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
    }, [])

    return(

        <ul className="itemsGrid"> 
            {items.map((item)=>(
            <ItemCard 
                key={item.id}
                item={item}
            />
        ))}
    </ul>
    )
}