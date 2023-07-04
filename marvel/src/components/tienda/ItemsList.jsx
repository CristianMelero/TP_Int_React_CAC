import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { CardDetail } from "./CardDetail";
import { db } from "../../firebaseConfig/firebase";
import { useParams } from "react-router-dom";
import { Spinner } from "../Spinner";
import "./ItemsList.css";

export const ItemsList = () => {
	const [cargando, setCargando] = useState(true);
	const [items, setItems] = useState([]);
    const [name, setName] = useState("");
	const [price, setPrice] = useState(0);
	const [detail, setDetail] = useState("");
	const [img, setImg] = useState("");

    const itemsCollection = collection(db,"products")
    const {categoryId} = useParams();
    //const q = query(itemsCollection, where('category', "==", categoryId ))
    
    //Lista de productos de Firebase
	const getProducts = async () => {
		const data = await getDocs(itemsCollection);
		setItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setCargando(false)
	};

    useEffect(() => {
		getProducts();
	}, []);

	if (cargando) {
		return <Spinner />;
	}

// Filtro por categorias

    // const getProductsByCategory = async () => {
    //     const itemsCategory = await getDocs(q);
    //     console.log(itemsCategory);

    //     if(itemsCategory.exists()) {
    //         setName(itemsCategory.data().name);
    //         setPrice(itemsCategory.data().price);
    //         setDetail(itemsCategory.data().detail);
    //         setImg(itemsCategory.data().img);
    //         setItems(
    //             itemsCategory.docs.map((doc)=>({...doc.data(), id:doc.id}))
    //         )
    //     }
    // } 

    // useEffect(() => {
	// 	if(categoryId){
    //        getProductsByCategory()
    //    }else{
    //        getProducts()
    //    }
	// }, [categoryId]);

	return (
		<ul className="itemsGrid container" style={{marginBottom: "0"}}>
			{items.map((item) => (
				<CardDetail key={item.id} item={item} />
			))}
		</ul>
	);
};
