import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react"
import { CardDetail } from "./CardDetail";
import { db } from "../../firebaseConfig/firebase";
import "./ItemsList.css"
import { useParams } from "react-router-dom";


export const ItemsList = ()=> {

    const [items, setItems] = useState([]);

    const itemsCollection = collection(db,"products")
    
    
    const getProducts = async() =>{
        const data = await getDocs(itemsCollection)

        setItems(
            data.docs.map((doc)=>({...doc.data(), id:doc.id}))
        )
        
    }

    // const { categoryId } = useParams();
    // const q = query(itemsCollection, where("category", '==', categoryId ))


    // const [name, setName] = useState("");
	// const [price, setPrice] = useState(0);
	// const [detail, setDetail] = useState("");
	// const [img, setImg] = useState("");

    // const getProductsByCategory = async () => {
    //     const itemsCategory = await getDocs(q);

    //     if(itemsCategory.exists()) {
    //         // setName(itemsCategory.data().name);
    //         // setPrice(itemsCategory.data().price);
    //         // setDetail(itemsCategory.data().detail);
    //         // setImg(itemsCategory.data().img);
    //         setItems(
    //             itemsCategory.docs.map((doc)=>({...doc.data(), id:doc.id}))
    //         )
    //     } 

    //  useEffect(() => {
	//  	if(categoryId){
    //         getProductsByCategory()
    //     }else{
    //         getProducts()
    //     }
	//  }, [categoryId]);

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