import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react"
import { ItemCard } from "./ItemCard";


export const items = ()=> {

    const [items, setItems] = useState([]);

    const itemsCollection = collection(db, "items")

    const getItems = async () => {
        const data = await getDocs(itemsCollection)

        setItems(
            data.docs.map((doc)=>({...doc.data(), id:doc.id}))
        )
    }

    useEffect(()=>{
        getItems()
    }, [])

    return(

        <ul className="itemsGrid"> 
        {items.map((item)=>(
        <ItemCard key={item.id} item={item}/>
        ))}
    </ul>
    )
}