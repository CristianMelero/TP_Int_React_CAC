import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig/firebase";
import { DropdownTienda } from "./DropdownTienda";
import "./Tienda.css";
import { Spinner } from "../Spinner";
import { useParams } from "react-router-dom";

import { ItemsList } from "./ItemsList";

export const Tienda = () => {
	const [items, setItems] = useState([]);
	const [categoryItems, setCategoryItems] = useState(null);
	const [cargando, setCargando] = useState(true);

	const itemsCollection = collection(db, "products");

	const { categoryId } = useParams();

	//Lista de productos de Firebase
	const getProducts = async () => {
		const data = await getDocs(itemsCollection);
		setItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		setCargando(false);
	};

	useEffect(() => {
		getProducts();
	}, []);

	useEffect(() => {
		if (items.length > 0) {
			const itemsOfCategory = items.filter(
				(item) => item.category === categoryId,
			);
			setCategoryItems(itemsOfCategory);
		}
	}, [categoryId]);

	if (cargando) {
		return <Spinner />;
	}

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
					<DropdownTienda items={items} />
				</div>
			</div>
			{categoryId && (
				<p>
					Estas en la categoría <strong>{categoryId}</strong>
				</p>
			)}
			<ItemsList items={categoryItems || items} />
		</div>
	);
};
