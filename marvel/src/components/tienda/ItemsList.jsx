<<<<<<< HEAD
import { useState } from "react";
=======
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
>>>>>>> afb09fff0fb3c289007a85e20d2cd1b929c95052
import { CardDetail } from "./CardDetail";
import { useParams } from "react-router-dom";
import "./ItemsList.css";

<<<<<<< HEAD
export const ItemsList = ({items}) => {

    const [name, setName] = useState("");
	const [price, setPrice] = useState(0);
	const [detail, setDetail] = useState("");
	const [img, setImg] = useState("");
    console.log(items)

    const {categoryId} = useParams();
    //const q = query(itemsCollection, where('category', "==", categoryId ))
=======
export const ItemsList = ({categoryId}) => {
	const [cargando, setCargando] = useState(true);
	const [items, setItems] = useState([]);
    // const [name, setName] = useState("");
	// const [price, setPrice] = useState(0);
	// const [detail, setDetail] = useState("");
	// const [img, setImg] = useState("");

    const itemsCollection = collection(db,"products")
    const q = query(itemsCollection, where('category', "==", categoryId ))
    
    //Lista de productos completa de Firebase
	const getProducts = async () => {
		const data = await getDocs(itemsCollection);
		setItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setCargando(false)
	};

    // Filtro por categorias de productos
    const getProductsByCategory = async () => {
        const itemsCategory = await getDocs(q);
        setItems(itemsCategory.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setCargando(false)
    } 

    useEffect(() => {
		if(categoryId){
           getProductsByCategory()
       }else{
           getProducts()
       }
	}, [categoryId]);

    if (cargando) {
		return <Spinner />;
	}
>>>>>>> afb09fff0fb3c289007a85e20d2cd1b929c95052

	return (
		<ul className="itemsGrid container" style={{marginBottom: "0"}}>
			{items.map((item) => (
				<CardDetail key={item.id} item={item} />
			))}
		</ul>
	);
};
