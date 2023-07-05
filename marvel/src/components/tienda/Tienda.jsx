<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig/firebase";
=======
import { useState } from "react";
>>>>>>> afb09fff0fb3c289007a85e20d2cd1b929c95052
import { DropdownTienda } from "./DropdownTienda";
import { ItemsList } from "./ItemsList";
import "./Tienda.css";
import { Spinner } from "../Spinner";
import { useParams } from "react-router-dom";

export const Tienda = () => {
<<<<<<< HEAD

	const [items, setItems] = useState([]);
	const [categoryItems, setCategoryItems] = useState(null)
	const [cargando, setCargando] = useState(true);

	const itemsCollection = collection(db,"products")

	const { categoryId } = useParams();
	console.log(categoryId)

	//Lista de productos de Firebase
	const getProducts = async () => {
		const data = await getDocs(itemsCollection);
		setItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		setCargando(false)
	};

	useEffect(() => {
		getProducts();
	}, []);

	useEffect(() => {
		if(items.length > 0) {
		const itemsOfCategory = items.filter(item => item.category === categoryId)
		setCategoryItems(itemsOfCategory)
		}
	}, [categoryId]);

	if (cargando) {
		return <Spinner />;
	}

=======
	const [selectedCategory, setSelectedCategory] = useState("");

	const selectCategory = (category) => {
		setSelectedCategory(category);
	};

>>>>>>> afb09fff0fb3c289007a85e20d2cd1b929c95052
	return (
		<div className="tienda">
			<div className="tienda-container">
				<b>
					<h1> Marvel Shop</h1>
				</b>
				<p>Los productos de Marvel que estabas buscando</p>
			</div>
			<div>
				<div className=" bg-dark">
<<<<<<< HEAD
					<DropdownTienda items={ items } />
				</div>
			</div>
			{ categoryId && <p>Estas en la categoría <strong>{ categoryId }</strong></p>}
			<ItemsList items={ categoryItems || items } />
=======
					<DropdownTienda selectCategory={selectCategory} />
				</div>
			</div>
			<ItemsList categoryId={selectedCategory} />
>>>>>>> afb09fff0fb3c289007a85e20d2cd1b929c95052
		</div>
	);
};
