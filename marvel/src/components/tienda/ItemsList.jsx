import { useState } from "react";
import { CardDetail } from "./CardDetail";
import { useParams } from "react-router-dom";
import "./ItemsList.css";

export const ItemsList = ({items}) => {

    const [name, setName] = useState("");
	const [price, setPrice] = useState(0);
	const [detail, setDetail] = useState("");
	const [img, setImg] = useState("");
    console.log(items)

    const {categoryId} = useParams();
    //const q = query(itemsCollection, where('category', "==", categoryId ))

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
